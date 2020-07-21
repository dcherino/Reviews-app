import styled from "styled-components";

export const PaginationContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 20px auto;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  background: #2c5b84;
  color: #fff;
  cursor: pointer;
  font: 400 14px "Roboto";

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

export const Select = styled.select`
  display: inline-block;
  font: 400 14px 'Roboto';
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: auto;
  max-width: 100%;
  margin: 0 20px;
  border: 0px solid #aaa;
  box-shadow: 0 5px 10px rgba(82,132,160,0.3);
  border-radius: 0.5em;
  appearance: none;
  background-color: #fff;

  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
    background-position: right .7em top 50%, 0 0;
    /* icon size, then gradient */
    background-size: .65em auto, 100%;
}

  &::-ms-expand {
    display: none;
  }

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #aaa;
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }

  /* Set options to normal weight */
  & option {
    font-weight: normal;
  }
`;
