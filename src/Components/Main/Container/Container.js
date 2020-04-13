import React, { Component } from "react";
import "./Container.css";
import { fetchMovies, setLoading } from "../../../actions/searchActions";
import { connect } from "react-redux";
import SearchForm from "./searchForm/searchForm";
import Spinner from "../../Layout/Spinner";
import MovieContainer from "../MoviesContainer/MoviesContainer";
class Container extends Component {
  onClickAddEvent = () => {
    if (
      this.props.isExist &&
      this.props.currentPage < this.props.isExist.page_count
    ) {
      this.props.fetchMovies(this.props.text, this.props.currentPage + 1);
      this.props.setLoading();
    }
  };
  onClickReduceEvent = () => {
    if (this.props.isExist && this.props.currentPage > 1) {
      this.props.fetchMovies(this.props.text, this.props.currentPage - 1);
      this.props.setLoading();
    }
  };
  render() {
    const { isExist, loading } = this.props;
    return (
      <div>
        <div className="Container_height row bg-light ">
          <div className="container">
            <div className="col-md-12 my-4">
              <SearchForm />
            </div>
          </div>
          <div className="container">
            {isExist && isExist.page_count > 1 && loading === false ? (
              <div className="d-flex justify-content-center">
                <button disabled={this.props.isExist && this.props.currentPage <= 1 ? true:false} className="btn btn-danger mx-1" onClick={this.onClickReduceEvent}>Previus Page</button>
                <button disabled={this.props.isExist && this.props.currentPage === this.props.isExist.page_count} className="btn btn-danger mx-1" onClick={this.onClickAddEvent}>Next Page</button>
              </div>
            ) : null}

            {loading ? (
              <Spinner />
            ) : isExist && isExist.total_count === 0 && loading === false ? (
              <h1 className="text-center">No Result</h1>
            ) : (
              <MovieContainer />
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isExist: state.movies.isExist,
  loading: state.movies.loading,
  text: state.movies.text,

  currentPage: state.movies.currentPage,
});

export default connect(mapStateToProps, { fetchMovies, setLoading })(Container);
