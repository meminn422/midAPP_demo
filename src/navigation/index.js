import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';

import ListScreen from '../screens/ListScreen';
import TownScreen from '../screens/TownScreen';
import LightScreen from '../screens/LightScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#E99443",
                tabBarInactiveTintColor: "#D9D9D9",
                tabBarStyle: {
                    backgroundColor: "#8D8884",
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontWeight: '800',
                    fontSize: 12,
                },
            }}>
            <Tab.Screen
                name="Light"
                component={LightScreen}
                options={({ navigation }) => ({
                    title: "LIGHT",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="star-four-points" color={color} size={35} />
                    ),
                })} />

            <Tab.Screen
                name="Home"
                component={TownScreen}
                options={({ navigation }) => ({
                    title: "HOME",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="lighthouse" color={color} size={35} />
                    )
                })} />

            <Tab.Screen
                name="List"
                component={ListScreen}
                options={({ navigation }) => ({
                    title: "LIST",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="format-list-checkbox" color={color} size={35} />
                    ),
                })} />
        </Tab.Navigator>
    );
}

export default Navigation;
