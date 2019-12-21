import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@chakra-ui/core";
import { StateProvider } from "./context";
import axios from "axios";

import SingleArtist from "../src/components/pages/SingleArtist";
import SingleArtPiece from "../src/components/pages/SingleArtPiece";
import Artists from "../src/components/pages/Artists";
import Header from "../src/components/Header/Header";
import Home from "../src/components/pages/Home";
import Cart from "../src/components/pages/Cart";
import About from "../src/components/pages/About";
import Events from "../src/components/pages/Events";
import Footer from "../src/components/Footer/Footer";
import Order from "./components/pages/Cart/Order";

import customTheme from "./theme";
import "./App.css";

function App() {
  const [artists, setArtists] = useState([]);
  const [artPieces, setArtPieces] = useState([]);
  console.log(artPieces);

  const initialState = {
    cart: []
  };

  const myReducer = (state, action) => {
    switch (action.type) {
      case "addCartItem":
        let idArray = [];
        state.cart.map(item => idArray.push(item.artwork_id));
        if (!idArray.includes(action.item.artwork_id)) {
          return {
            cart: [...state.cart, action.item]
          };
        }
        return {
          cart: [...state.cart]
        };
      case "removeCartItem":
        let newCart = [];
        state.cart.map(item =>
          item.artwork_id === action.item.artwork_id ? "" : newCart.push(item)
        );
        return {
          cart: [...newCart]
        };
      case "clearCart":
        // setTimeout(fetchArtPieceData(), 3000);
        console.log(artPieces);
        return {
          cart: []
        };
      default:
        return state;
    }
  };

  // Fetching Artist Data

  const fetchData = () => {
    let uri = "http://admin.insae.org/api/artists/all";
    axios
      .get(uri)
      .then(data => {
        setArtists(data.data);
      })
      .catch(error => console.log(error));
  };

  // Fetching Artwork Data

  const fetchArtPieceData = () => {
    let uri = "http://admin.insae.org/api/artworks/all";
    axios
      .get(uri)
      .then(data => {
        setArtPieces(data.data);
      })
      .catch(error => console.log(error));
  };

  // Sets state one time with array of artists and array of art pieces

  useEffect(() => {
    fetchData();
    fetchArtPieceData();
  }, []);

  return (
    <div className='App'>
      <ThemeProvider>
        <StateProvider reducer={myReducer} initialState={initialState}>
          <Header />

          <Switch>
            <Route path='/piece/:id'>
              <SingleArtPiece />
            </Route>
            <Route exact path='/'>
              {artPieces[0] ? <Home artPieces={artPieces} /> : null}
            </Route>
            <Route path='/artists/artist/:id'>
              <SingleArtist />
            </Route>
            <Route path='/artists'>
              <Artists artists={artists} />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/events'>
              <Events />
            </Route>
            <Route path='/cart'>
              <Cart fetchArtPieceData={fetchArtPieceData} />
            </Route>
            <Route path='/order'>
              <Order />
            </Route>
          </Switch>
          <Footer />
        </StateProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
