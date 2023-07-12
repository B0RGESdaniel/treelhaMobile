import * as S from "./styles"

import Logo from '@assets/logo.svg';
import Google from '@assets/google.svg';

export function Login() {
    return (
        <S.Container>
            <S.Content>
                <Logo width={110} height={110} />
                <S.Title>Treelha</S.Title>
            </S.Content>
            <S.GoogleButton>
                <Google  width={20} height={20} />
                <S.ButtonText>Entrar com o Google</S.ButtonText>
            </S.GoogleButton>
        </S.Container>
    )
}