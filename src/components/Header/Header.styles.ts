import styled from "styled-components";

export const HeaderDiv = styled.div`
  grid-area: Header;
  border-bottom: 1px solid #dae4e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8vw;

  @media (min-width: 1024px) {
    padding: 0 40px;
  }
`;
