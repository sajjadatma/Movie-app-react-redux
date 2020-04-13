import React, { Component } from "react";
import MovieCart from "./MoviesCard";
import { connect } from "react-redux";
class MoviesContainer extends Component {
  render() {
    const {movies} = this.props  
    let content = '';
    content =
    movies.length > 0
      ? movies.map((movie, index) => {
       return (            
          <MovieCart key={index} movie={movie} />
        )
      } )
          : null;
    return (
      <div className="row mx-auto">
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies
});
export default connect(mapStateToProps)(MoviesContainer);
