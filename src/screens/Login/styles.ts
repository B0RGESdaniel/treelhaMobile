import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.DARK};
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

export const Title = styled.Text`
    font-size: 27px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    margin-top: 5px;
`;

export const Content = styled.View`
    align-items: center;
    justify-content: center;
`;

export const GoogleButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    padding: 12px 40px;
    border-radius: 6px;
`;

export const ButtonText = styled.Text`
    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.OFF_WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
`;
