import { Tabs } from 'expo-router';
import React from 'react';

import { Ionicons } from "@expo/vector-icons";
import { BOTTOMTABCOLORS} from '../../constants/colors';
import { BOTTOMTABTEXT } from '../../constants/texts';
import { BOTTOMTABICONS } from '../../constants/Icons';

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="scanwin" // Scan & Win seleccionado por defecto
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: BOTTOMTABCOLORS.bottomTabActiveText,
        tabBarInactiveTintColor: BOTTOMTABCOLORS.bottomTabInactiveText,
        tabBarStyle: { backgroundColor: BOTTOMTABCOLORS.bottomTabBackground, height: 72 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: BOTTOMTABTEXT.home,
          tabBarLabel: BOTTOMTABTEXT.home,
          tabBarIcon: ({ color, size }) => (
            <Ionicons 
            name={BOTTOMTABICONS.home} 
            color={color} 
            size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="products"
        options={{
          title: BOTTOMTABTEXT.products,
          tabBarLabel: BOTTOMTABTEXT.products,
          tabBarIcon: ({ color, size }) => (
            <Ionicons 
            name={BOTTOMTABICONS.products} 
            color={color} 
            size={size} 
            />
          ),
        }}
      />

      <Tabs.Screen
        name="lists"
        options={{
          title: BOTTOMTABTEXT.lists,
          tabBarLabel: BOTTOMTABTEXT.lists,
          tabBarIcon: ({ color, size }) => (
            <Ionicons 
            name={BOTTOMTABICONS.lists} 
            color={color} 
            size={size} 
            />
          ),
        }}
      />

      <Tabs.Screen
        name="scanwin"
        options={{
          title: BOTTOMTABTEXT.scanwin,
          tabBarLabel: BOTTOMTABTEXT.scanwin,
          tabBarIcon: ({ color, size }) => (
            <Ionicons 
            name={BOTTOMTABICONS.scanwin} 
            color={color} 
            size={size} 
            />
          ),
        }}
      />

     <Tabs.Screen
        name="profile"
        options={{
          title: BOTTOMTABTEXT.profile,
          tabBarLabel: BOTTOMTABTEXT.profile,
          tabBarIcon: ({ color, size }) => (
            <Ionicons 
            name={BOTTOMTABICONS.profile} 
            color={color} 
            size={size} 
            />
          ),
        }}
      />

    </Tabs>
  );
}