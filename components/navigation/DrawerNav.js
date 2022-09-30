import React from "react";
import FeedScreen from "../feed/FeedScreen";
import ProfileScreen from "../profile/ProfileScreen";
import HistoryScreen from "../history/HistoryScreen";
import MessagesScreen from "../message/MessagesScreen";
import SellScreen from "../sell/SellScreen";
import SettingsScreen from "../settings/SettingsScreen";
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
          textAlign: "right",
          fontSize: 30,
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="grid" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sell"
        component={SellScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="cart" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="History"
        component={HistoryScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="time" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbubbles" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person" size={30} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings" size={30} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
