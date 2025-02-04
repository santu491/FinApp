import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from '../screens/home/home';

export const HomeTab = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
