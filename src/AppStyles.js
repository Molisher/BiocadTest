import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Container = styled.div`
  width: ${(props) => (props.first ? "35%" : "61%")};
`;
