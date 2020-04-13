import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Main/Header/Header";
import {routes} from '../../Routes'
import Footer from "../Main/Footer/Footer";
class Layout extends Component {
  render() {
    return (
      <div className="w-100">
        <Header />
        <Switch>
          <Route path={routes.Home.route} exact component={routes.Home.component} />
          <Route path={routes.Favorites.route} component={routes.Favorites.component} />
          <Route path={routes.MovieDetails.route} component={routes.MovieDetails.component} />
          <Route component={routes.noPage.component} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Layout;
