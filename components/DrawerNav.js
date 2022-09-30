import React from "react";
import FeedScreen from "./feed/FeedScreen";
import ProfileScreen from "./profile/ProfileScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { lightTheme } from "../themes/themes";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      initialRouteName="Feed"
      screenOptions={{
        drawerStyle: {
          backgroundColor: lightTheme.darkPurple,
          width: "80%",
        },
        drawerActiveTintColor: lightTheme.background,
        drawerInactiveTintColor: lightTheme.background,
        drawerActiveBackgroundColor: lightTheme.maroon,
        drawerLabelStyle: {
          fontSize: 25,
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ size }) => (
            <Ionicons name="grid" size={size} color={lightTheme.background} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ size }) => (
            <Ionicons name="person" size={size} color={lightTheme.background} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
