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
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="chevron-back-circle" size={"30"} color={lightTheme.darkPurple}/>
      </TouchableOpacity>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" />
        <TextInput style={styles.input} placeholder="Confirm Password" />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.buttonText}>Create Account</Text>
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
  backButton: {
    position: "absolute",
    top: "8%",
    left: "5%",
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
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: lightTheme.lightPurple,
    marginTop: 15,
    padding: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: "95%",
  },
  createButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 10,
    marginTop: 15,
    padding: 13,
    backgroundColor: lightTheme.maroon,
  },
  buttonText: {
    color: lightTheme.background,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
