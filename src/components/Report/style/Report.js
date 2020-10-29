import styled from "styled-components/macro";
export {
  Date,
  Solution,
  Slope,
  Offset,
  User,
} from "../../CalibrationReport/style/CalibrationReport";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 15px;
`;
