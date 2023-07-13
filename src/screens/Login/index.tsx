import * as S from "./styles"

import { useNavigation } from '@react-navigation/native'

import Logo from '@assets/logo.svg';
import Google from '@assets/google.svg';

export function Login() {
    const navigation = useNavigation();
    
    function handleLogin() {
        navigation.navigate("treelhas");
    }

    return (
        <S.Container>
            <S.Content>
                <Logo width={110} height={110} />
                <S.Title>Treelha</S.Title>
            </S.Content>
            <S.GoogleButton onPress={handleLogin}>
                <Google width={20} height={20} />
                <S.ButtonText>Entrar com o Google</S.ButtonText>
            </S.GoogleButton>
        </S.Container>
    )
}