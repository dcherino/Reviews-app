import styled from 'styled-components'

export const HelpfulButton = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  background: #2c5b84;
  color: #fff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    background: #7adae0;
    color: #2c3e50;
  }

  &[disabled] {
    background: #ddd;
    color: #555;
  }

  &[disabled]:hover {
    text-decoration: none;
  }
`;