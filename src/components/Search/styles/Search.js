import styled from "styled-components/macro";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  padding-bottom: 10px;
`;
export const Label = styled.label`
  color: #8c8c8c;
  line-height: 24px;
  letter-spacing: 0.16px;
`;
export const Container = styled.div`
  flex-direction: row;
  align-items: center;
  padding-top: 1rem;
`;
export const Input = styled.input`
  padding: 5px 12px;
  border: 1px solid #e9e9e9;
  color: #353535;
  outline: 0;
  line-height: 24px;
  letter-spacing: 0.16px;

  &:focus {
    outline: #4990e2 solid 1px;
  }
`;
export const Button = styled.button`
  padding: 8px 22.5px;
  border: none;
  outline: 0;
  margin-left: 20px;
  background-color: #444651;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.16px;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;
