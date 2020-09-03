import React from "react";
import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Description,
  Bold,
  Avatar
} from "./styles";
import avatar from "../../../assets/avatar.png";
export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />

          <Description>
            <Bold>Voce pagou tal pessoa</Bold>
          </Description>
        </CardHeader>
      </Card>
    </Container>
  );
}
