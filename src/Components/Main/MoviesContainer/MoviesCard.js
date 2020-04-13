import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Icon from '@mdi/react'
import { mdiCardsHeart } from '@mdi/js'
import { addToFavorite,removeFromFavorite } from "../../../actions/FavoriteActions";
class MovieCart extends Component {
  addFavoriteEvent(movie) {
    this.props.addToFavorite(movie);
  }

  addFavoriteDisableButton(movie) {
    return this.props.favorite.find((item) => item.id === movie.id)
      ? true
      : false;
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-4 d-flex justify-content-center  my-2">
        <div className="card" style={{ width: 18 + "rem" }}>
          <img
            style={{ height: 430 }}
            src={movie.poster}
            className="card-img-top"
            alt={movie.title}
          />
          <div className="card-body">
            <div style={{ height: 50 }}>
              <h6 className="card-title text-center">{movie.title}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <Link
                to={"/details/" + movie.id}
                className="btn btn-primary btn-sm mx-1"
              >
             <span className="h6">Details</span>
              </Link>
              {
                !this.addFavoriteDisableButton(movie) ? ( <button
                 style={{border:0}}
                  onClick={() => this.props.addToFavorite(movie)}
                  className="badge badge-primary  mx-1"
                >
                  <Icon
                    path={mdiCardsHeart}
                     size={1}
                     color="white"
                     />
                </button>) :
                 <button
                 onClick={() => this.props.removeFromFavorite(movie.id)}
                    className="badge badge-danger  mx-1"
                    style={{border:0}}
               >
                   <Icon path={mdiCardsHeart}
                      size={1}
                    color="white"
                    />
               </button>
              }
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favorite: state.favorites.favorites,
});
export default connect(mapStateToProps, { addToFavorite,removeFromFavorite })(MovieCart);
