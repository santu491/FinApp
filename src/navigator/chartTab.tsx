import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { Charts } from '../screens/charts/charts';



export const ChartTab = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen component={Charts} name="Chart" />
    </Stack.Navigator>
  );
};
