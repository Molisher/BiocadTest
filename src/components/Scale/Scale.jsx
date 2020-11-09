import React from "react";
import scale from "../../assets/img/scale.svg";

import { Container, Title } from "./style/Scale";

const Scale = () => {
  return (
    <Container>
      <img src={scale} alt="Device"></img>
      <Title>Аналитические весы OHAUS Adventurer АХ324 (B715976163)</Title>
    </Container>
  );
};

export default Scale;
