import React from 'react'
import { Wrapper, Header,  Container, BalanceContainer, BalanceTitle, Balance } from './styled'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Suggestion from '../../components/Suggestions'
import Activities from '../../components/Activities'
export default function Home(){
  return <Wrapper>
    <Container>
    <Header>
    <MaterialCommunityIcons name="qrcode-scan" size={28} color="#10c86e" />
    <BalanceContainer>
    <BalanceTitle>Meu Saldo</BalanceTitle>
    <Balance>R$ 128,00</Balance>
    </BalanceContainer>

    <MaterialCommunityIcons name="cart" size={28} color="#10c86e" />
  </Header>
  <Suggestion />
  <Activities />
</Container>
  </Wrapper>
}
