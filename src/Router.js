import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryPage from './pages/CategoryPage.js';
import MealPage from './pages/MealPage.js';
import DetailPage from './pages/DetailPage.js';
import {color} from 'react-native-reanimated';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={CategoryPage}
          options={{
            title: 'Categories',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'orange', fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="Meals"
          component={MealPage}
          options={{
            title: 'Meals',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'orange', fontWeight: 'bold'},
            headerTintColor: 'orange',
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailPage}
          options={{
            title: 'Details',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'orange', fontWeight: 'bold'},
            headerTintColor: 'orange',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
