import styled from "styled-components/macro";

export const Wrapper = styled.div`
  margin-top: 46px;
  padding: 40px 20px 60px 40px;
  background: #ffffff;
  border: 1px dashed #939da6;
  box-sizing: border-box;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.15);
  font-size: 13px;
  line-height: 15px;
`;

export const Header = styled.h2`
  font-size: 1rem;
`;
export const TableHeader = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
  color: #939da6;
`;

export const Date = styled.div`
  width: 10%;
  font-size: 16px;
  line-height: 19px;
`;
export const Solution = styled.div`
  width: 24%;

  p {
    margin: 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const User = styled.div`
  width: 30%;
`;
export const Slope = styled.div`
  width: 10%;
`;
export const Offset = styled(Slope)``;
