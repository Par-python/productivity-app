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
          backgroundColor: '#F2F2F2',
          paddingBottom: 0, 
        },
        tabBarLabelStyle: {
          height: 0, // Remove label space
        },
        tabBarItemStyle: {
          paddingVertical: 0, // Remove vertical padding
          margin: 0, // Remove margin
        }
      }}>
      <Tabs.Screen 
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color={color} />,
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
