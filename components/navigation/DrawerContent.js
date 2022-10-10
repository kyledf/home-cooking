import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { lightTheme } from "../../themes/themes";
import { useNavigation } from "@react-navigation/native";

const DrawerContent = (props) => {
  const navigation = useNavigation();

  const handleLogOut = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
    <DrawerContentScrollView
      scrollEnabled={false}
      {...props}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => props.navigation.closeDrawer()}
        >
          <Ionicons name="close" size={45} color={lightTheme.background} />
        </TouchableOpacity>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
        <Text style={styles.title}>Home{"\n"}Meals</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    <View style={styles.footer}>
        <TouchableOpacity style={styles.signOutButton} onPress={handleLogOut}>
          <Ionicons name="log-out" size={25} color={lightTheme.background} />
          <Text style={styles.footerText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.darkPurple,
  },
  header: {
    height: "30%",
  },
  closeButton: {
    position: "absolute",
    left: "5%",
  },
  title: {
    position: "absolute",
    bottom: "5%",
    color: lightTheme.background,
    left: "15%",
    fontSize: 35,
    width: "55%",
    textAlign: "right",
    fontWeight: "900",
  },
  logo: {
    position: "absolute",
    right: 10,
    width: 100,
    height: undefined,
    aspectRatio: 1,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "10%",
    backgroundColor: lightTheme.lightPurple,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5%",
  },
  signOutButton: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    color: lightTheme.background,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default DrawerContent;
