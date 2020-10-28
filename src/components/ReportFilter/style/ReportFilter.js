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
`;

export const SelectArrow = styled.p`
content: ' '
  position: absolute;
  width: 10px;
  height: 6.3px;
  right: 10px;
  top: calc(50% - 6.3px / 2 + 0.15px);

  /* 8C8C8C */

  background: #8c8c8c;
`;
