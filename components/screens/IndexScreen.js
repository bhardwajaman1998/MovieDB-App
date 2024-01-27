import React, { useState } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MoviesScreen from "./MoviesScreen";
import SearchResultsScreen from "./SearchResultsScreen";
import TvScreen from "./TvScreen";

const Tab = createMaterialTopTabNavigator();

const IndexScreen = ({navigation}) => {

    return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 10 },
          tabBarStyle: { backgroundColor: 'white' }
        }}
      >
        <Tab.Screen 
          name="Movies" 
          component={MoviesScreen}
        />
        <Tab.Screen 
          name="Search Results" 
          component={SearchResultsScreen} 
        />
        <Tab.Screen 
          name="TV Shows"
          component={TvScreen}
         />
      </Tab.Navigator>
    )
}

export default IndexScreen