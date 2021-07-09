import React from 'react';
import Login from '@/Containers/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@/Containers';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
