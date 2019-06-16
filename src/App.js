import React, { Component } from "react";
import { Provider } from "react-redux";

import Routes from "./routes/index.js";
import store from "./store/index.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
