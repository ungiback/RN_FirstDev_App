import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import My from './navigatepage/My';
import Variety from './navigatepage/Variety';
import Exchange from './navigatepage/Exchang';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
    const tabIcon = ({ name, focused, color }) => {
        return <AntDesign name={name} size={focused ? 23 : 20} color={color} />
    }
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: theme.iconColorTrue,
                    tabBarInactiveTintColor: theme.iconColorFalse,
                    tabBarStyle: { backgroundColor: theme.tabBarbackgound }
                }}>
                    <Tab.Screen name="Variety" component={Variety}
                        options={{
                            tabBarIcon: props => tabIcon({ ...props, name: "profile", color: props.focused ? theme.iconColorTrue : theme.iconColorFalse })
                        }} />
                    <Tab.Screen name="Exchange" component={Exchange}
                        options={{
                            tabBarIcon: props => tabIcon({ ...props, name: "down-square-o", color: props.focused ? theme.iconColorTrue : theme.iconColorFalse })
                        }} />
                    <Tab.Screen name="My" component={My}
                        options={{
                            tabBarIcon: props => tabIcon({ ...props, name: "idcard", color: props.focused ? theme.iconColorTrue : theme.iconColorFalse })
                        }} />
                </Tab.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    )
}

export default App;