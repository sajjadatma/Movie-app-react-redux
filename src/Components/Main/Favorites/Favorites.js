import React, { Component } from "react";
import "./Favorites.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiTrashCan } from "@mdi/js";
import { removeFromFavorite } from "../../../actions/FavoriteActions";
class Favorites extends Component {

  onClickEvent(id) {
    this.props.removeFromFavorite(id);
  }

  render() {

    const { favorite } = this.props;
    return (
      <div className="Container_height">
        <div className="container">
          <div className=" text-center row py-2">
            <div className="col col-md-1 my-auto ">
              <button
                onClick={() => this.props.history.goBack()}
                className="btn btn-primary"
              >
                Back
              </button>
            </div>
            <div className="col col-md-3 offset-md-3 my-auto ">
              <span className="h2">Your Favorites: </span>
            </div>
          </div>
          <div className="row">
            {favorite.length === 0 ? (
              <div
                className="alert alert-danger text-center col-md-12"
                role="alert"
              >
                <strong>No Movie, Please add Movies</strong>
              </div>
            ) : (
              favorite.map((movie, index) => {
                return (
                  <div
                    className="col-md-3 mt-3 d-flex justify-content-center"
                    key={index}
                  >
                    <div
                      className="card"
                      style={{ width: 12 + "rem", minHeight: 22 + "rem" }}
                    >
                      <img
                        style={{ maxHeight: 15 + "rem" }}
                        src={movie.poster}
                        className="card-img-top"
                        alt={movie.title}
                      />
                      <div className="card-body">
                        <div style={{ height: 60 }}>
                          <h6 className="card-title text-center">
                            {movie.title}
                          </h6>
                        </div>

                        <div className="d-flex justify-content-center">
                          <Link
                            to={"/details/" + movie.id}
                            className="btn btn-primary btn-sm  mx-1"
                          >
                            Details
                          </Link>
                          <button
                            onClick={()=>this.onClickEvent(movie.id)}
                            className="btn btn-danger btn-sm  mx-1"
                          >
                            <Icon path={mdiTrashCan} size={1} color="white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  favorite: state.favorites.favorites,
});
export default connect(mapStateToProps, { removeFromFavorite })(Favorites);
