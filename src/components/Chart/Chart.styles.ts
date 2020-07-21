import styled from 'styled-components'

export const ChartContainer = styled.div`
  flex: 0 0 auto;
  background: #fff;
  box-shadow: 0 5px 10px rgba(82, 132, 160, 0.3);
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    width: 40%;
    margin-bottom: 0;
  }

  & h2 {
    margin: 20px 0;
    color: #333;
  }
`;