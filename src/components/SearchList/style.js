import styled from "styled-components";

const SearchListStyled = styled.div`
  a {
    border-bottom: 1px solid #eee;
    display: flex;
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover {
      opacity: 0.5;
    }
  }
  > a > div {
    padding: 16px 16px 16px 0px;
    cursor: pointer;
    &:last-child {
      width: 100%;
      padding-right: 0;
    }
    h1 {
      font-size: 24px;
      margin: 0 0 32px 0;
      color: #333;
    }
    p {
      font-size: 18px;
      color: #333;
    }
  }
  @media screen and (max-width: 700px) {
    img.thumb {
      width: 100% !important;
      height: auto !important;
    }
    > a > div {
      h1 {
        margin-bottom: 10px;
      }
      p {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }
`;

export default SearchListStyled;
