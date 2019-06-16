import styled from "styled-components";

const LoaderStyled = styled.div`
  text-align: center;
  height: calc(100vh - 100px);
  width: 100% !important;
  display: flex;
  justify-items: center;
  align-items: center;

  #loader {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoaderStyled;
