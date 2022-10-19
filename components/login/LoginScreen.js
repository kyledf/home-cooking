import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { lightTheme } from "../../themes/themes";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleLogin = () => {
    navigation.navigate("DrawerNav");
  };

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      style={styles.container}
      contentContainerStyle={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image style={styles.logo} source={require("../../assets/logo.png")} />

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry/>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registerPrompt}>Don't have an account?</Text>
        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.background,
  },
  logo: {
    position: "absolute",
    top: "20%",
    width: "50%",
    height: undefined,
    aspectRatio: 1,
  },
  inputContainer: {
    position: "absolute",
    top: "55%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "70%",
    height: "40%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: lightTheme.lightPurple,
    marginTop: "5%",
    padding: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: "78%",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    borderRadius: 10,
    padding: 13,
  },
  loginButton: {
    backgroundColor: lightTheme.darkPurple,
  },
  registerButton: {
    backgroundColor: lightTheme.maroon,
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
    marginTop: "5%",
  },
});

export default LoginScreen;
