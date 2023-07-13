import styled from "styled-components/native";

import { CaretLeft } from 'phosphor-react-native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 15px;
    background-color: transparent;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    color: theme.COLORS.LIGHT_GREEN,
    size: 28,
}))``;