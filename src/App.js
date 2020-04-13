import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
