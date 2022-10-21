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
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import React, { useCallback, useState } from "react";

const ChatScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate("Messages");
  };
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "Thanks! Have a great rest of your day and see you tomorrow",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "You",
      },
    },
    {
      _id: 2,
      text: "Great, I'll make sure its nice and hot for you.",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "User",
        avatar:
          "https://img.taste.com.au/gOpVgvz8/taste/2016/11/classic-chewy-brownie-102727-1.jpeg",
      },
    },
    {
      _id: 3,
      text: "That works for me",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "You",
      },
    },
    {
      _id: 4,
      text: "Sure I can have you pick it up tomorrow at 12pm",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "User",
        avatar:
          "https://img.taste.com.au/gOpVgvz8/taste/2016/11/classic-chewy-brownie-102727-1.jpeg",
      },
    },
    {
      _id: 5,
      text: "Hi can I buy this meal for $5?",
      createdAt: new Date(),
      user: {
        _id: 1,
        name: "You",
      },
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={handleBack}>
          <Ionicons
            name="chevron-back-circle"
            size={45}
            color={lightTheme.background}
          />
        </TouchableOpacity>
        <View style={styles.messageTitleContainer}>
          <Image
            source={{
              uri: "https://img.taste.com.au/gOpVgvz8/taste/2016/11/classic-chewy-brownie-102727-1.jpeg",
            }}
            style={styles.image}
          />
          <Text style={styles.title}>User</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={(messages) => onSend(messages)}
          renderBubble={(props) => {
            return (
              <Bubble
                {...props}
                textStyle={{
                  right: {
                    color: lightTheme.background,
                  },
                  left: {
                    color: lightTheme.background,
                  },
                }}
                wrapperStyle={{
                  left: {
                    backgroundColor: lightTheme.darkPurple,
                  },
                  right: {
                    backgroundColor: lightTheme.maroon,
                  },
                }}
              />
            );
          }}
          user={{
            _id: 1,
          }}
        />
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
  messageTitleContainer: {
    position: "absolute",
    top: "40%",
    display: "flex",
    width: "45%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  image: {
    width: "30%",
    aspectRatio: 1,
    borderRadius: 999,
  },
  title: {
    color: lightTheme.background,
    fontSize: 40,
    fontWeight: "900",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    height: "82%",
    width: "100%",
  },
});

export default ChatScreen;
