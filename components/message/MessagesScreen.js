import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { lightTheme } from "../../themes/themes";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

const MessagesScreen = ({ navigation }) => {
  const messages = [
    {
      id: 1,
      name: "John Smith",
      picture:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574",
      lastMessage: "John: Thanks!",
    },
    {
      id: 2,
      name: "Jane Doe",
      picture: "https://sallysbakingaddiction.com/wp-content/uploads/2016/06/blueberry-pie.jpg",
      lastMessage: "Amy: Hope you enjoyed the pie!",
    },
    {
      id: 3,
      name: "Ethan David",
      picture: "https://img.taste.com.au/gOpVgvz8/taste/2016/11/classic-chewy-brownie-102727-1.jpeg",
      lastMessage: "You: Do you have any brownies left?",
    },
    {
      id: 4,
      name: "Amy Smith",
      picture: "https://www.jessysflavourworld.com/wp-content/uploads/2020/06/pani-puri.jpg",
      lastMessage: "You: Am I able to get 3 for $5?",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons name="menu" size={45} color={lightTheme.background} />
        </TouchableOpacity>
        <Text style={styles.title}>Messages</Text>
      </View>
      <ScrollView
        style={styles.bottomContainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {messages.map((message) => {
          return (
            <TouchableOpacity style={styles.messageContainer} key={message.id}>
              <Image source={{ uri: message.picture }} style={styles.image} />
              <View style={styles.messageInfo}>
              <Text style={styles.messageName}>{message.name}</Text>
              <Text style={styles.messageText}>{message.lastMessage}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
    height: "100%",
    width: "100%",
  },
  messageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "30%",
    width: "90%",
    backgroundColor: lightTheme.darkPurple,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  messageInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  messageName: {
    fontSize: 20,
    fontWeight: "700",
    color: lightTheme.background,
  },
  messageText: {
    fontSize: 13,
    fontWeight: "400",
    color: lightTheme.background,
  },
  image: {
    height: "90%",
    aspectRatio: 1,
    borderRadius: 99,
  },
});

export default MessagesScreen;
