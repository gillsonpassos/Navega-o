import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Tab = createBottomTabNavigator()
export default props => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ accessibility, color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'TelaA':
                        iconName = accessibility
                            ? 'add'
                            : 'american-football';

                        break;

                    case 'TelaB':
                        iconName = accessibility
                            ? 'add-circle'
                            : 'add-circle-outline';
                        break;

                    case 'TelaC':
                        iconName = accessibility ? 'arrow-redo' : 'arrow-back-circle';

                        break;


                }

                return <Ionicons name={iconName} size={size} color={color} />;

            },

        })}

        tabBarOptions={{
            activeTintColor: "red",
            inactiveTintColor: "blue",
            showLabel: true,
            // labelStyle: { fontSize: 30 }
        }} initialRouteName="TelaB">
        <Tab.Screen name="TelaA" component={TelaA}
            options={{ title: 'Inicial' }} />
        <Tab.Screen name="TelaB" component={TelaB}
            options={{ title: 'Meio' }} />
        <Tab.Screen name="TelaC" component={TelaC}
            options={{ title: 'Final' }} />
    </Tab.Navigator>
)