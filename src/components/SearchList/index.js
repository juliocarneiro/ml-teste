import React, { Component } from "react";
import { Row, Col } from "react-grid-system";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../store/actions";
import Image from "../Image";
import { Link } from "react-router-dom";

import SearchListStyled from "./style";

import freeShipping from "../../utils/img/ic_shipping.png";

class SearchList extends Component {
  render() {
    const props = this.props;
    return (
      <SearchListStyled>
        <Link to={`/product/${props.data.id}`}>
          <div>
            <Image
              src={props.data.thumbnail}
              alt={props.data.title}
              width="180px"
              height="180px"
              borderRadius="4px"
              className="thumb"
            />
          </div>

          <div>
            <Row>
              <Col md={9}>
                <h1>
                  $ {props.data.price.toLocaleString()}{" "}
                  {props.data.shipping.free_shipping ? (
                    <Image src={freeShipping} alt="Entrega grátis" />
                  ) : null}
                </h1>
                <p>{props.data.title}</p>
              </Col>
              <Col md={3}>
                <span>{props.data.seller_address.city.name}</span>
              </Col>
            </Row>
          </div>
        </Link>
      </SearchListStyled>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchList);
