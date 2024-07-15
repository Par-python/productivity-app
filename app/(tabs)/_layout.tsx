import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default () => {

  return (
    <Tabs
      screenOptions={{
        // headerShown: false,
        tabBarStyle: {
          height: 55,
          backgroundColor: 'white',
          shadowColor: 'white',
          paddingBottom: 0, 
          borderTopWidth: 1
        },
        tabBarLabelStyle: {
          height: 0, 
        },
        tabBarItemStyle: {
          paddingVertical: 0, 
          margin: 0, 
        },
        headerShadowVisible: false
      }}>
      <Tabs.Screen 
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={22} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="mail"
        options={{
          title: "Mail",
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="mail" size={24} color={color} />,
        }} 
      />
    </Tabs>
  );
};
