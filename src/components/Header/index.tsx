import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export function Header() {
    const navigation = useNavigation();
    
    function handleGoBack() {
        navigation.goBack();
    }
    
    return (
        <S.Container>
            <S.BackButton onPress={handleGoBack}>
                <S.BackIcon />
            </S.BackButton>
        </S.Container>
    )
}