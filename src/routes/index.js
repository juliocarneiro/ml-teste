import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../store/actions";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "../components/Loader";

import Main from "../pages/Main";
import Product from "../pages/Product";
import SearchBar from "../components/SearchBar";

const Routes = props => {
  return (
    <BrowserRouter>
      <SearchBar />
      {props.loading === true ? (
        <Loader color="#999999" />
      ) : (
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      )}
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  loading: state.loadingReducer.isLoading
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
