import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  border-radius: 4px;
  padding: 0 16px;
  margin: 0 0 16px 0;
  display: grid;
`;
export const ProductStyle = styled.div`
  .wrapper-product {
    text-align: center;
    padding: 32px 16px 16px 16px;
  }
  .specs {
    span {
      font-size: 14px;
      margin: 0 0 16px 0;
      display: block;
    }
    h3 {
      font-size: 24px;
      font-weight: bold;
      margin: 0 32px 32px 0;
    }
    h1 {
      font-size: 48px;
      margin: 0 0 32px 0;
    }
    a.link {
      display: block;
      border-radius: 4px;
      background-color: #3483fa;
      padding: 10px;
      color: white;
      text-decoration: none;
      text-align: center;
      margin-right: 32px;
      font-size: 16px;
    }
  }
  .description {
    text-align: left;
    margin-left: 32px;
    p {
      font-size: 16px;
      margin: 10px 0;
      color: #999;
      display: block;
      width: 100%;
    }
    h1:first-child {
      font-size: 28px;
      color: #666;
      margin-top: 32px;
    }
    h1,
    h2 {
      margin: 10px 0;
      font-size: 22px;
    }
    ul {
      color: #999;
      padding-left: 15px;
      li {
        list-style: ;
        list-style-type: circle;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .wrapper-product {
      padding: 16px 12px 16px 12px;
    }
    img.product {
      width: 80% !important;
    }
    a.link {
      margin-right: 0px !important;
    }
    .description {
      margin: 0;
      ul {
        padding: 0;
        li {
          list-style: none;
        }
      }
    }
  }
`;
