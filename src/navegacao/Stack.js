import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import PassoSteck from "../components/PassoSteck";

const stack = createNativeStackNavigator()

export default props => (
    <stack.Navigator initialRouteName='TelaA'
        screenOptions={{ headerShown: true }}>
        <stack.Screen name='TelaA'
            options={{ title: 'Informações Iniciais' }}>
            {props => (
                <PassoSteck {...props} avancar='TelaB'>
                    <TelaA />
                </PassoSteck>
            )}
        </stack.Screen>
        <stack.Screen name='TelaB'>
            {props => (
                <PassoSteck {...props} avancar='TelaC'>
                    <TelaB />
                </PassoSteck>
            )}

        </stack.Screen>
        <stack.Screen name='TelaC' component={TelaC} />
    </stack.Navigator>
)