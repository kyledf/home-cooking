import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { lightTheme } from "../../themes/themes";

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      style={styles.container}
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
});

export default DrawerContent;
