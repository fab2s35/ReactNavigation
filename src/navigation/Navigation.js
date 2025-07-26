import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//import de screens
import HomeScreen from '../screens/HomeScreen';
import SegundaPantalla from '../screens/CardScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return ( 
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Card" component={SegundaPantalla} />
    </Tab.Navigator>
  );
}


export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}