import React, { Component } from "react";
import ArtPieceCard from "../../Cards/ArtPieceCard";
import ReactPaginate from "react-paginate";

import { Grid } from "@chakra-ui/core";
import "./home.css";

export class GalleryList extends Component {
  render() {
    let artworkNodes = this.props.data.map(function(artwork, index) {
      return <ArtPieceCard key={index} piece={artwork} />;
    });

    return <> {artworkNodes} </>;
  }
}

class Home extends Component {
  state = {
    data: [],
    offset: 0,
    pageCount: 0
  };
  componentDidMount() {
    this.setArtPage();
  }
  setArtPage() {
    this.setState({
      data: this.props.artPieces.slice(
        this.state.offset,
        this.state.offset + 6
      ),
      pageCount: Math.ceil(this.props.artPieces.length / 6)
    });
  }
  handlePageClick = data => {
    console.log("hi", data);
    let selected = data.selected;
    let offset = Math.ceil(selected * 6);

    this.setState({ offset: offset }, () => {
      this.setArtPage();
    });
  };
  render() {
    return (
      <>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)"
          ]}
          mt={4}
          gap={6}
        >
          <GalleryList data={this.state.data} />
        </Grid>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          pageLinkClassName={"pages"}
          activeClassName={"activePage"}
          activeLinkClassName={"activeLink"}
          nextLinkClassName={"nextButton"}
          previousLinkClassName={"prevButton"}
        />
      </>
    );
  }
}

export default Home;
