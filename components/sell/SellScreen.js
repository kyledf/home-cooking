import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { lightTheme } from "../../themes/themes";
import Ionicons from "react-native-vector-icons/Ionicons";

const SellScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons name="menu" size={45} color={lightTheme.background} />
        </TouchableOpacity>
        <Text style={styles.title}>Sell a Meal</Text>
      </View>
      <TouchableOpacity style={styles.imageButton}>
        <Ionicons name="images" size={"50%"} color={lightTheme.maroon} />
        <Text style={styles.buttonText}>Add Image</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Title"/>
        <TextInput style={styles.input} placeholder="Description" />
        <TextInput style={styles.input} placeholder="Quantity"/>
        <TextInput style={styles.input} placeholder="Price"/>
        <TextInput style={styles.input} placeholder="Location"/>
      </View>
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Post Your Meal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightTheme.background,
  },
  topContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    height: "18%",
    width: "100%",
    backgroundColor: lightTheme.darkPurple,
  },
  menuButton: {
    position: "absolute",
    left: "5%",
  },
  title: {
    position: "absolute",
    left: "25%",
    top: "40%",
    textAlign: "center",
    color: lightTheme.background,
    fontSize: 40,
    fontWeight: "900",
  },
  imageButton: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    top: "20%",
    height: "20%",
    width: "80%",
    padding: "10%",
    flexDirection: "row",
    backgroundColor: lightTheme.lightPurple,
    borderColor: lightTheme.maroon,
    borderWidth: 4,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: lightTheme.background,
  },
  inputContainer: {
    marginTop: "70%",
    width: "80%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: "20%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: lightTheme.lightPurple,
    marginTop: "5%",
    padding: 10,
    backgroundColor: "white",
  },
  postButton: {
    marginTop: "15%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: lightTheme.maroon,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  postButtonText: {
    fontSize: 18,
    color: lightTheme.background,
    fontWeight: "bold",
  },

});

export default SellScreen;
