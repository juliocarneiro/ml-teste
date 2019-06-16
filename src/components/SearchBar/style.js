import styled from "styled-components";

const SearchBarStyled = styled.header`
  background: #ffe600;
  height: auto;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;

  .logo {
    text-align: left;
    padding: 0;
  }

  .search-box input {
    width: 100%;
    height: 100%;
    border: 0;
    -webkit-border-top-left-radius: 4px;
    -webkit-border-bottom-left-radius: 4px;
    -moz-border-radius-topleft: 4px;
    -moz-border-radius-bottomleft: 4px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
  }

  .search-box button {
    min-height: 36px;
    border: 0;
    -webkit-border-top-right-radius: 4px;
    -webkit-border-bottom-right-radius: 4px;
    -moz-border-radius-topright: 4px;
    -moz-border-radius-bottomright: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: white;
    outline: none;
    cursor: pointer;
    align-items: center;
    display: flex;
    padding: 0 10px;
  }

  .search-box {
    align-items: center;
    display: flex;
    padding: 0;
  }

  @media screen and (max-width: 700px) {
    .logo {
      margin: 10px 0 10px 0;
      text-align: center;
    }
  }
`;

export default SearchBarStyled;
