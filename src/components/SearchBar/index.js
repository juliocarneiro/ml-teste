import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../store/actions";
import { Container, Row, Col } from "react-grid-system";
import { Link } from "react-router-dom";

import logo from "../../utils/img/Logo_ML.png";
import lupa from "../../utils/img/ic_Search.png";

import Image from "../Image";

import SearchBarStyled from "./style";

class SearchBar extends Component {
  state = {
    query: ""
  };
  updateInputValue = evt => {
    this.setState({
      query: evt.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getProductsList(this.state.query);
  };
  render() {
    return (
      <SearchBarStyled>
        <Container>
          <Row>
            <Col md={1} className="logo">
              <Link to="/">
                <Image src={logo} alt="Mercado Livre" />
              </Link>
            </Col>
            <Col md={11}>
              <form className="search-box" onSubmit={e => this.handleSubmit(e)}>
                <input
                  placeholder="Nunca deixe de buscar..."
                  onChange={this.updateInputValue}
                />
                <button type="submit">
                  <Image src={lupa} alt="Buscar..." />
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </SearchBarStyled>
    );
  }
}

const mapStateToProps = state => ({
  products: state.getProductsList.products
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
