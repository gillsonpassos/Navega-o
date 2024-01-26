import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";

const stack = createNativeStackNavigator()

export default props => (
    <stack.Navigator initialRouteName='TelaA'
        screenOptions={{ headerShown: true }}>
        <stack.Screen name='TelaA'
            options={{ title: 'Informações Iniciais' }}
            component={TelaA} />
        <stack.Screen name='TelaB' component={TelaB} />
        <stack.Screen name='TelaC' component={TelaC} />
    </stack.Navigator>
)