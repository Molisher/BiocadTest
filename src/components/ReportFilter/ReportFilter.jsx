import React from "react";

import { Container, Select } from "./style/ReportFilter";

const ReportFilter = () => {
  return (
    <Container>
      <Select>
        <option value="1 month">1 month</option>
        <option value="3 month">3 month</option>
        <option value="6 month">6 month</option>
      </Select>
      <p></p>
      <p>
        <input name="ReportType" type="radio" value="Calibration" />
        Calibration
      </p>
      <p>
        <input name="ReportType" type="radio" value="Measuring" />
        Measuring
      </p>
      <p>
        <input name="ReportType" type="radio" value="Using" />
        Using
      </p>
    </Container>
  );
};

export default ReportFilter;
