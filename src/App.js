import {
  Search,
  Scale,
  ReportFilter,
  DeviceInfo,
  CalibrationReport,
} from "./components";

import { Wrapper, Container } from "./AppStyles";

function App() {
  return (
    <div className="App" style={{ padding: "30px 50px 106px" }}>
      <Search />
      <Wrapper>
        <Container first>
          <Scale />
          <ReportFilter />
        </Container>
        <DeviceInfo />
      </Wrapper>
      <CalibrationReport />
    </div>
  );
}

export default App;
