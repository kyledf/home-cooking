import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { lightTheme } from "../../themes/themes";
import Ionicons from "react-native-vector-icons/Ionicons";

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons name="menu" size={45} color={lightTheme.background} />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.settingsButton}>
        <Text style={styles.settingsTitle}>Privacy</Text>
        <Text style={styles.settingsDesc}>Manage the data you're sharing with us.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButton}>
        <Text style={styles.settingsTitle}>Security</Text>
        <Text style={styles.settingsDesc}>Set up 2nd Factor Authentication and more.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButton}>
        <Text style={styles.settingsTitle}>Report an Issue</Text>
        <Text style={styles.settingsDesc}>Got a problem? Let us know.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButton}>
        <Text style={styles.settingsTitle}>Contact Us</Text>
        <Text style={styles.settingsDesc}>How are we doing? Send us your feedback.</Text>
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
    top: "40%",
    textAlign: "center",
    color: lightTheme.background,
    fontSize: 40,
    fontWeight: "900",
  },
  bottomContainer: {
    position: "absolute",
    top: "18%",
    height: "80%",
    width: "100%",
  },
  settingsButton: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    borderTopColor: lightTheme.maroon,
    borderTopWidth: 1,
    borderBottomColor: lightTheme.maroon,
    borderBottomWidth: 1,
    marginTop: "5%",
    padding: 20,
  },
  settingsTitle: {
    fontSize: 30,
    fontWeight: "600",
    color: lightTheme.maroon,
  },
  settingsDesc: {
    fontSize: 15,
    color: lightTheme.maroon,
    paddingTop: 10,
  },
});

export default SettingsScreen;
