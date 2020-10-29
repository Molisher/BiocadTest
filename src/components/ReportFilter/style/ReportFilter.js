import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 70%;
`;
export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: none;
  border: none;
  font-family: TT Norms;
  line-height: 24px;
  letter-spacing: 0.16px;
  border: 1px solid #e9e9e9;
  padding-left: 12px;
  width: 100%;
  cursor: pointer;
`;

export const SelectArrow = styled.p`
  content: " ";
  position: absolute;
  width: 10px;
  height: 6.3px;
  right: 10px;
  top: calc(50% - 6.3px / 2 + 0.15px);
  background: #8c8c8c;
  margin: 0;
  clip-path: polygon(0 0, 100% 0, 50% 100%, 0 0);
  pointer-events: none;
`;
export const Wrapper = styled.div`
  position: relative;
`;
export const RadioButton = styled.p`
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
  input {
    width: 18px;
    height: 18px;
  }
  label {
    margin-left: 6px;
  }
`;
export const Button = styled.button`
  margin-top: 50px;
  background: #4990e2;
  border-radius: 3px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  padding: 8px 0;
  width: 180px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
