import styled from 'styled-components/native';

export const Container = styled.View`
  border-top-width: 3px;
  border-top-color: rgba(0,0,0,0.3);
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
`;

export const BuyContainer = styled.ScrollView.attrs({
    horizontal: false,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
})``;

export const Buy = styled.View`
    justify-content: space-between;
    flex-direction: row;
    padding: 10px 15px;
    align-items: center;
`;

export const BuyInfo = styled.View``;

export const BuyTitle = styled.Text`
    font-weight: bold;
`;

export const BuyDescription = styled.Text`
    font-size: 12px;
    padding-top: 3px;
    color: rgba(0,0,0, 0.5);
`;

export const BuyValue = styled.Text`
    font-size: 12px;
    padding-top: 3px;
    color: rgba(0,0,0, 0.5);
`;

