import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../store/actions";

import SearchList from "../components/SearchList";
import { Container } from "react-grid-system";

import { Wrapper } from "./style";
import Breadcrumb from "../components/Breadcrumb";

const Main = props => {
  return (
    <div className="animated fadeIn">
      <Container>
        <Breadcrumb />
        {props.products !== null && props.products.results.length > 0 ? (
          <Wrapper>
            {props.products.results.slice(0, 4).map((e, key) => (
              <SearchList key={key} data={e} />
            ))}
          </Wrapper>
        ) : null}
        {props.products !== null && props.products.paging.total === 0 ? (
          <p>Nenhum resultado encontrado...</p>
        ) : null}
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.getProductsList.products
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
