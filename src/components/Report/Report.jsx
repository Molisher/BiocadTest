import React from "react";

import {
  Date,
  Solution,
  Slope,
  Offset,
  User,
  Container,
  TableRow,
} from "./style/Report";

import success from "../../assets/img/success.svg";
import failure from "../../assets/img/failure.svg";

const Report = ({ slope, offset, user, slopeSuccess, offsetSuccess }) => {
  return (
    <TableRow>
      <Date>
        04.10.2019 <br /> 10:23
      </Date>
      <Solution>
        В1: № 2000460789536: pH 1.09 B2: № 2000460789536: pH 2.00 В3: №
        2000460789536: pH 4.01 В4: № 2000460789536: pH 7.00 В5: № 2000460789536:
        pH 9.21
      </Solution>
      <Slope>
        <Container>
          {slope} <img src={slopeSuccess ? success : failure} alt="Result" />
        </Container>
      </Slope>
      <Offset>
        <Container>
          {offset} <img src={offsetSuccess ? success : failure} alt="Result" />
        </Container>
      </Offset>
      <User>{user}</User>
    </TableRow>
  );
};

export default Report;
