import React from "react";
import FeedScreen from "../feed/FeedScreen";
import ProfileScreen from "../profile/ProfileScreen";
import DrawerContent from "./DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { lightTheme } from "../../themes/themes";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      useLegacyImplementation={true}
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: lightTheme.darkPurple,
          width: "100%",
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
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="ios-person" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
