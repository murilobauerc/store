import styled from "styled-components";

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: blueviolet;

  div {
    display: flex;
    flex-direction: column;
  }
`;
