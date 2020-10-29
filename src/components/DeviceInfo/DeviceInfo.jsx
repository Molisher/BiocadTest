import React from "react";

import { Container, TextBlock } from "./style/DeviceInfo";

const DeviceInfo = () => {
  return (
    <Container>
      <TextBlock>
        Тип оборудования: <b>Весы</b>
      </TextBlock>
      <TextBlock>
        Статус: <b>Готов к работе</b>
      </TextBlock>
      <TextBlock>
        Изготовитель: <b>Ohaus</b>
      </TextBlock>
      <TextBlock>
        Модель: <b>AX-123</b>
      </TextBlock>
      <TextBlock>
        Ответственное подразделение (ремонт):{" "}
        <b>Группа обслуживания лабораторного оборудования</b>
      </TextBlock>
      <TextBlock>
        Эксплуатирующее подразделение:{" "}
        <b>Химико-аналитическая лаборатория 2.0</b>
      </TextBlock>
      <TextBlock>
        МОЛ: <b>Иванов Иван Иванович</b>
      </TextBlock>
      <TextBlock>
        Территория: <b>г. Санкт-Петербург (Нойдорф)</b>
      </TextBlock>
      <TextBlock>
        Серийный номер: <b>В715976163</b>
      </TextBlock>
      <TextBlock>
        GUID:
        <b>
          <a href="#index" style={{ color: "#4990E2", textDecoration: "none" }}>
            {" "}
            508b2a71-662e-4983-ae0c-3cb0c1cd21c5
          </a>
        </b>
      </TextBlock>
      <TextBlock>
        Bims ID:
        <b>
          <a href="#index" style={{ color: "#4990E2", textDecoration: "none" }}>
            {" "}
            49db8db1-585f-4b9e-bbf0-8a59698edc8b
          </a>
        </b>
      </TextBlock>
      <TextBlock>
        Tam:
        <b>
          <a href="#index" style={{ color: "#4990E2", textDecoration: "none" }}>
            {" "}
            А-001234
          </a>
        </b>
      </TextBlock>
    </Container>
  );
};
export default DeviceInfo;
