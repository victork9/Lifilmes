import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, } from '@expo/vector-icons';
import HomeScreen from './pagesTabs/Home'
import Category from './pagesTabs/CategoryList'
import Search from './pagesTabs/Search'


const Tab = createBottomTabNavigator();

export default function App() {
    return (

        <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'md-home'
                    } else if (route.name === 'Pesquisa') {
                        iconName = 'md-search';
                    }
                    else if (route.name === 'Categoria') {
                        iconName = 'md-list';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                tabStyle: {
                    backgroundColor: "#252525"

                },
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',

            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Pesquisa" component={Search} />
            <Tab.Screen name="Categoria" component={Category} />
        </Tab.Navigator>

    );
}