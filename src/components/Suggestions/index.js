import React from "react";
import { Container, Option, Img, Label } from "./styled";
import img1 from "../../../assets/01.png";
import img2 from "../../../assets/02.png";
import img3 from "../../../assets/03.png";
import img4 from "../../../assets/04.png";
import img5 from "../../../assets/05.png";
import img6 from "../../../assets/06.png";
import img7 from "../../../assets/07.png";

const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: "Doacaoes"
  },

  {
    key: String(Math.random()),
    img: img2,
    label: "Uber"
  },
  {
    key: String(Math.random()),
    img: img3,
    label: "Carros"
  },
  {
    key: String(Math.random()),
    img: img4,
    label: "Sky"
  },
  {
    key: String(Math.random()),
    img: img5,
    label: "Doacaoes"
  },
  {
    key: String(Math.random()),
    img: img6,
    label: "Doacaoes"
  },
  {
    key: String(Math.random()),
    img: img7,
    label: "Doacaoes"
  }
];

export default function Suggestion() {
  return (
    <Container>
      {items.map(item => (
        <Option key={item.key}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
}
