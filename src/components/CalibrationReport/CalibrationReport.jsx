import React from "react";

import {
  Wrapper,
  Header,
  TableHeader,
  Date,
  Solution,
  User,
  Slope,
  Offset,
} from "./style/CalibrationReport";

import { Report } from "../Report";

const CalibrationReport = () => {
  return (
    <Wrapper>
      <Header>Calibration report</Header>
      <TableHeader>
        <Date>Data</Date>
        <Solution>Used buffed solutions</Solution>
        <Slope>
          Slope, % <br /> Norm 95-105
        </Slope>
        <Offset>
          Offset, mV <br /> Norm &plusmn;(0-20)
        </Offset>
        <User>User</User>
      </TableHeader>
      <Report
        slope="98.7"
        slopeSuccess
        offset="-0.3"
        offsetSuccess
        user="Иванов Иван Иванович"
      />
      <Report
        slope="98.7"
        slopeSuccess
        offset="-0.3"
        offsetSuccess
        user="Петров Генадий Иванович"
      />
      <Report
        slope="90.1"
        offset="-0.5"
        offsetSuccess
        user="Генадьев Иван Петрович"
      />
    </Wrapper>
  );
};

export default CalibrationReport;
