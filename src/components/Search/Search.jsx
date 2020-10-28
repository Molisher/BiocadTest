import React from "react";

import { Form, Label, Input, Button, Container } from "./styles/Search";

const Search = () => {
  return (
    <Form>
      <Label htmlFor="search">Enter inventory number, guid or bims id</Label>
      <Container>
        <Input id="search" type="text" defaultValue="A-001234" />
        <Button>Search</Button>
      </Container>
    </Form>
  );
};

export default Search;
