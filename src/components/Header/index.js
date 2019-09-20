import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, CurrencyContainer, CurrencyTitle, CurrencyText } from './styles';

export default function Header() {
  return (
    <>
    <Container>
        <Icon name="gg-circle" size={80} color="#FFF" />
        <CurrencyContainer>
            <CurrencyTitle>Saldo atual:</CurrencyTitle>
            <CurrencyText>GP$ 9.889 (≅ R$12,30)</CurrencyText>
        </CurrencyContainer>
    </Container>
    </>
  );
}