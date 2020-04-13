import React, { Component } from "react";
import "./Header.css";
import { connect } from 'react-redux'
import Icon from '@mdi/react'
import { mdiCardsHeart } from '@mdi/js'
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div className=" Header_Heigh d-flex bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-6 height center text-light">
              <Link to="/">
                <h3 className="text-danger font-weight-bolder">Movies App</h3>
              </Link>
            </div>
            <div className="col-md-6 height center">
              <Link to="/favorites" className="btn btn-danger">
              <Icon
                    path={mdiCardsHeart}
                     size={0.9}
                     color="white"
                     />
                <span> Favorite</span>
                {this.props.favorite.length > 0 ? <span className="badge badge-light favoriteNum">{this.props.favorite.length}</span>:null}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  favorite: state.favorites.favorites,
})
export default connect(mapStateToProps) (Header);
