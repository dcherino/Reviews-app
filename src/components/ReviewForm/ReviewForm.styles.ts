import styled from "styled-components";

export const FormContainer = styled.div`
  flex: 0 0 auto;
  background: #fff;
  box-shadow: 0 5px 10px rgba(82, 132, 160, 0.3);
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  min-height: auto;

  @media (min-width: 1024px) {
    width: 55%;
    min-height: 440px;
  }

  h2 {
    color: #333;
    margin: 20px 0;
  }

  & .inputs-wrap {
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  & .inputs-wrap div {
    width: 100%;

    @media (min-width: 1024px) {
      width: 48%;
    }
  }
`;

export const InputText = styled.input`
  width: 100%;
  height: 38px;
  background: #ffffff;
  border: 1px solid #cfd8f4;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 8px;
  font: 400 14px "Roboto";
  color: #304056;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  background: #ffffff;
  border: 1px solid #cfd8f4;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 8px;
  font: 400 14px "Roboto";
  color: #304056;
`;

export const Label = styled.label`
  font: 700 16px "Roboto";
  line-height: 22px;
  display: block;
`;

export const Button = styled.button`
  border: 0;
  color: #fff;
  background: #2c3e50;
  padding: 12px 24px;
  font: 400 16px "Roboto";
  text-align: center;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    background: #7adae0;
    color: #2c3e50;
  }
`;
