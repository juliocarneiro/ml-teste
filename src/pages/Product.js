import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../store/actions";
import ReactMarkdown from "react-markdown";

import { Container, Row, Col } from "react-grid-system";
import Breadcrumb from "../components/Breadcrumb";
import Image from "../components/Image";

import { Wrapper, ProductStyle } from "./style";

class Product extends Component {
  componentDidMount() {
    const product = this.props.match.params.id;
    this.props.getDataProduct(product);
    this.props.getDetailProduct(product);
    this.props.setLoading(false);
  }
  render() {
    const props = this.props;
    return (
      <ProductStyle className="animated fadeIn">
        <Container>
          <Breadcrumb />
          <Wrapper className="wrapper-product">
            <Row>
              <Col md={8}>
                <Image
                  src={props.product && props.product.pictures[0].url}
                  alt=""
                  className="product"
                />
                <div className="description">
                  <h1>Descrição do produto</h1>
                  <ReactMarkdown
                    source={props.description && props.description.plain_text}
                  />
                </div>
              </Col>
              <Col md={4} className="specs">
                {props.product ? (
                  <Fragment>
                    <span>
                      {props.product.condition} - {props.product.sold_quantity}{" "}
                      vendidos
                    </span>
                    <h3>{props.product.title}</h3>
                    <h1>$ {props.product.price.toLocaleString()}</h1>
                    <a
                      href={
                        props.product.permalink ? props.product.permalink : "/"
                      }
                      alt={props.product.title}
                      className="link"
                    >
                      Comprar
                    </a>
                  </Fragment>
                ) : null}
              </Col>
            </Row>
          </Wrapper>
        </Container>
      </ProductStyle>
    );
  }
}

const mapStateToProps = state => ({
  product: state.getDataProduct.product,
  description: state.getDataProduct.description
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
