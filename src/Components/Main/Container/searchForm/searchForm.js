import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from '@mdi/react'
import { mdiCardSearch } from '@mdi/js'
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../../../actions/searchActions";
class searchForm extends Component {
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };
  onSubmit = (e) => {
    this.props.fetchMovies(this.props.text,1);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="card mt-2 mx-auto ">
        <div className="card-header bg-gray text-center">
       
          <h4>  <Icon
                    path={mdiCardSearch}
                     size={2}
                     color="black"
                     /> Search for a movie ,TV series ...</h4>
        </div>
        <div className="card-body">
          <div className="form-inline-large center">
            <div className="input-group input-group-lg">
              <input
                placeholder="Search for a movie ,TV series ..."
                type="text"
                className="form-control"
                onChange={this.onChange}
              />
            </div>
            <button onClick={this.onSubmit} className="btn btn-primary btn-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
  movies: state.movies.movies,
  currentPage: state.movies.currentPage
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(searchForm);
