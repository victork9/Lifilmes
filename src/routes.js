import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './pages/Details';
import Tabs from './tabsNavigations';



const Stack = createStackNavigator();

export default function Routes() {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Tabs">
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}