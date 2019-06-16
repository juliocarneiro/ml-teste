import styled from "styled-components";

const BreadStyled = styled.div`
  padding: 16px 0;
  color: #999;
  p:last-child {
    font-weight: bold;
  }
  p:not(:last-child) {
    margin-right: 10px;
    &:after {
      content: ">";
      margin-left: 10px;
    }
  }
`;

export default BreadStyled;
