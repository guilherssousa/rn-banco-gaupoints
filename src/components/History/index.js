import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, Title, BuyContainer, Buy, BuyInfo, BuyTitle, BuyDescription, BuyValue } from './styles';

export default function History() {
    return (
        <Container>
            <Title>Ultimas transações aprovadas</Title>
            <BuyContainer>
                <Buy>
                    <BuyInfo>
                        <BuyTitle>Razer Abyssus 1800 DPI</BuyTitle>
                        <BuyDescription>Pagamento realizado para Felipe Orleans.</BuyDescription>
                        <BuyValue>GP$ 20.000</BuyValue>
                    </BuyInfo>
                    <Icon name="arrow-right" size={28} color="#1A1A1A" />
                </Buy>

                <Buy>
                    <BuyInfo>
                        <BuyTitle>Ingresso Encontro das Lendas 2019</BuyTitle>
                        <BuyDescription>INGRESSO MEIA ENCONTRO DAS LENDAS 2019</BuyDescription>
                        <BuyValue>GP$ 9.000</BuyValue>
                    </BuyInfo>
                    <Icon name="arrow-right" size={28} color="#1A1A1A" />
                </Buy>
            </BuyContainer>
        </Container>
    );
}