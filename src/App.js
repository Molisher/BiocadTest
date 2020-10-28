import { Search, Scale, ReportFilter } from "./components";

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
        <Container>Hello2</Container>
      </Wrapper>
    </div>
  );
}

export default App;
