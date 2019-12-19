import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import ArtistCard from "../../Cards/ArtistCard";
import { Grid } from "@chakra-ui/core";
import "./artists.css";

export class GalleryList extends Component {
  render() {
    let artistNodes = this.props.data.map(function(artist, index) {
      return <ArtistCard key={index} artist={artist} />;
    });

    return <> {artistNodes} </>;
  }
}

class Artists extends Component {
  state = {
    data: [],
    offset: 0,
    pageCount: 0
  };
  componentDidMount() {
    this.setArtistPage();
  }
  setArtistPage() {
    this.setState({
      data: this.props.artists.slice(this.state.offset, this.state.offset + 3),
      pageCount: Math.ceil(this.props.artists.length / 3)
    });
  }
  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * 3);

    this.setState({ offset: offset }, () => {
      this.setArtistPage();
    });
  };
  render() {
    return (
      <>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
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

export default Artists;
