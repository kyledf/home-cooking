import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { lightTheme } from "../../themes/themes";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
     
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.loginButton]}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registerPrompt}>Don't have an account?</Text>
        <TouchableOpacity style={[styles.button, styles.registerButton]}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
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
  inputContainer: {
    top: "8%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "70%",
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: lightTheme.lightPurple,
    marginTop: 15,
    padding: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: "25%",
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    borderRadius: 10,
    marginTop: 15,
    padding: 13,
  },
  loginButton: {
    backgroundColor: lightTheme.darkPurple,
  },
  registerButton: {
    backgroundColor: lightTheme.maroon,
    marginTop: 5,
  },
  buttonText: {
    color: lightTheme.background,
    fontSize: 20,
    fontWeight: "bold",
  },
  registerPrompt: {
    color: lightTheme.maroon,
    fontWeight: "800",
    fontSize: 16,
    marginTop: 35,
  },
});

export default LoginScreen;
