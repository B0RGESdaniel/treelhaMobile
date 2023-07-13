import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '@screens/Login';
import { Treelhas } from '@screens/Treelhas';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
             name="login"
             component={Login}
            />
            <Screen
             name="treelhas"
             component={Treelhas}
            />
        </Navigator>
    )
}