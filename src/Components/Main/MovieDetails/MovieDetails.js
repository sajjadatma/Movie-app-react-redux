import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie, setLoading } from "../../../actions/searchActions";
import Spinner from "../../Layout/Spinner";
class MovieDetails extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }



  render() {


    const style = {
      row: { minHeight: 76 + "vh" },
      card: { width: 22 + "rem", minHeight: 72 + "vh", maxHeight: 72 + "vh" },
      image: { height: 65 + "vh" },
    };
    const { movie, loading } = this.props;
    return (
      <div style={style.row} className="row bg-light ">
        <div className="container">
          {loading ? (
            <Spinner />
          ) : (
            <div className="row my-4 ">
              <div className="col-md-4 my-4">
              <div className="my-3 ">
                  <button
                    onClick={()=>this.props.history.goBack()}
                      className="btn btn-primary"
                      style={{fontSize:16,fontWeight:700}}
                  >
                    Back
                  </button>
                </div>
                  <div className="card mx-auto" style={style.card}>
                  <div className="card-body">
                    <img
                      style={style.image}
                      src={movie.poster}
                      className="card-img-top"
                      alt={movie.title}
                    />
                  </div>
                </div>
          
              </div>
              <div className="col-md-8 my-4">
                <div className="card">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h5>Movie Title</h5>
                      <span>{movie.title}</span>
                    </li>
                    <li className="list-group-item">
                      <h5>Director</h5>
                      <span>{movie.director}</span>
                    </li>
                    <li className="list-group-item">
                      <h5>Writer</h5>
                      <span>{movie.writer}</span>
                    </li>
                    <li className="list-group-item">
                      <h5>Imdb</h5>
                      <span>{movie.imdb_rating}</span>
                    </li>
                    <li className="list-group-item">
                      <h5>Actors</h5>
                      <span>{movie.actors}</span>
                    </li>
                    <li className="list-group-item">
                      <h5>Awards</h5>
                      <span>{movie.awards}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  loading: state.movies.loading,
});
export default connect(mapStateToProps, { fetchMovie, setLoading })(
  MovieDetails
);
