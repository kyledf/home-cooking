import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { lightTheme } from "../../themes/themes";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ProfileScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [email, setEmail] = useState("john.smith@gmail.com");
  const [phone, setPhone] = useState("0211234567");
  const [password, setPassword] = useState("password");

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
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons name="menu" size={45} color={lightTheme.background} />
        </TouchableOpacity>
        <Text style={styles.title}>My Profile</Text>
      </View>
      <TouchableOpacity style={styles.imageButton}>
        <Ionicons
          name="person-circle"
          size={"150%"}
          color="darkgrey"
        />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChange={(value) => setFirstName(value)}
        />
        <Text style={styles.inputLabel}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChange={(value) => setLastName(value)}
        />
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          secureTextEntry = {false}
          onChange={(value) => setEmail(value)}
        />
        <Text style={styles.inputLabel}>Phone</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          keyboardType="phone-pad"
          secureTextEntry = {false}
          onChange={(value) => setPhone(value)}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChange={(value) => setPassword(value)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.updateButton]}>
          <Text style={styles.buttonText}>Update Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.deleteButton]}>
          <Text style={styles.buttonText}>Delete Account</Text>
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
    position: "absolute",
    top: "20%",
  },
  buttonText: {
    fontSize: 30,
    color: lightTheme.background,
  },
  inputContainer: {
    position: "absolute",
    top: "45%",
    width: "80%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 10,
    color: lightTheme.darkPurple,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: "2%",
    marginLeft: "2%",
  },

  input: {
    width: "100%",
    height: "18%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: lightTheme.lightPurple,
    padding: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: "5%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  updateButton: {
    backgroundColor: lightTheme.lightPurple,
  },
  deleteButton: {
    backgroundColor: lightTheme.maroon,
  },
  buttonText: {
    fontSize: 18,
    color: lightTheme.background,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
