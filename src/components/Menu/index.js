import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Container, ItemContainer, Item, ItemName } from './styles';

export default function Menu() {
    return(
        <>
            <Container>
                <ItemContainer>
                    <Item>
                        <Icon name="arrow-right" size={28} color="#1A1A1A" />
                        <ItemName>Transferência</ItemName>
                    </Item>
                    <Item>
                        <Icon name="chart-line" size={28} color="#1A1A1A" />
                        <ItemName>Rendimento</ItemName>
                    </Item>
                </ItemContainer>

                <ItemContainer>
                    <Item>
                        <Icon name="clone" size={28} color="#1A1A1A" />
                        <ItemName>Extrato completo</ItemName>
                    </Item>
                    <Item>
                        <Icon name="credit-card" size={28} color="#1A1A1A" />
                        <ItemName>Gaucard</ItemName>
                    </Item>
                </ItemContainer>
            </Container>
        </>
    );
}