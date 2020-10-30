import React from "react";

import {
  Container,
  Select,
  SelectArrow,
  RadioButton,
  Wrapper,
  Button,
} from "./style/ReportFilter";

const ReportFilter = () => {
  return (
    <Container>
      <Wrapper>
        <Select>
          <option value="1 month">1 month</option>
          <option value="3 month">3 month</option>
          <option value="6 month">6 month</option>
        </Select>
        <SelectArrow></SelectArrow>
      </Wrapper>
      <RadioButton style={{ marginTop: "20px" }}>
        <input
          defaultValue
          id="calibration"
          name="ReportType"
          type="radio"
          value="Calibration"
        />
        <label htmlFor="calibration">Calibration</label>
      </RadioButton>
      <RadioButton>
        <input
          id="measuring"
          name="ReportType"
          type="radio"
          value="Measuring"
        />
        <label htmlFor="measuring">Measuring</label>
      </RadioButton>
      <RadioButton>
        <input id="using" name="ReportType" type="radio" value="Using" />
        <label htmlFor="using">Using</label>
      </RadioButton>
      <Button>Generate report</Button>
    </Container>
  );
};

export default ReportFilter;
