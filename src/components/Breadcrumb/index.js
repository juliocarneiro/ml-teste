import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../store/actions";

import { Container, Row } from "react-grid-system";

import BreadStyled from "./style";

const Breadcrumb = props => {
  return (
    <BreadStyled className="animated fadeIn">
      <Container>
        <Row>
          {props.products !== null &&
            props.products.filters.map(e => {
              return (
                e.values &&
                e.values.map(i => {
                  return (
                    i.path_from_root &&
                    i.path_from_root.map(o => {
                      return <p key={o.id}>{o.name}</p>;
                    })
                  );
                })
              );
            })}
        </Row>
      </Container>
    </BreadStyled>
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
)(Breadcrumb);
