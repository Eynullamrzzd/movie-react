import React, { Component } from "react";
import "./SearchBox.css";
import { connect } from "react-redux";
import { fetchMovies } from "../../redux/actions";

class SearchBox extends Component {
  state = {
    searchLine: "",
  };
  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });
  };
  searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    const {searchLine} = this.state;
    if (searchLine.trim() !== "") {
    this.props.dispatch(fetchMovies(searchLine));
    }
  };
  render() {
    const { searchLine } = this.state;

    return (
      <div className="search-box">
        <form
          className="search-box__form"
          onSubmit={this.searchBoxSubmitHandler}
        >
          <label className="search-box__form-label">
          Search for a movie by title:
            <input
              value={searchLine}
              type="text"
              className="search-box__form-input"
              placeholder="Example, Shawshank Redemption"
              onChange={this.searchLineChangeHandler}
            />
          </label>
          <button
            type="submit"
            className="search-box__form-submit"
            disabled={!searchLine.trim() === ""}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null)(SearchBox);
