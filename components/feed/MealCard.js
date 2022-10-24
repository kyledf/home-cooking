import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { lightTheme } from "../../themes/themes";

const currencyFormat = (num) => {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const MealCard = ({
  image,
  name,
  totalPrice,
  quantity,
  location,
  navigation,
}) => {
  const handleChat = () => {
    navigation.navigate("ChatScreen");
  };

  return (
    <View style={styles.mealContainer}>
      <Image style={styles.mealImage} source={{ uri: image }}></Image>
      <View style={styles.mealInfo}>
        <Text style={styles.mealName}>{name}</Text>
        <Text style={styles.mealPrice}>
          Price per serving: {currencyFormat(totalPrice / quantity)}
        </Text>
        <Text style={styles.mealLocation}>Pick Up Location: {location}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.messageButton]}
          onPress={handleChat}
        >
          <Text style={[styles.buttonText, styles.messageButtonText]}>
            Message Seller
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.moreInfoButton]}>
          <Text style={[styles.buttonText, styles.moreInfoButtonText]}>
            See More Info
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealContainer: {
    width: "95%",
    height: 400,
    backgroundColor: lightTheme.darkPurple,
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mealImage: {
    width: "90%",
    height: "60%",
    borderRadius: 10,
  },
  mealInfo: {
    width: "90%",
    marginTop: "2%",
  },
  mealName: {
    fontSize: 25,
    fontWeight: "bold",
    color: lightTheme.background,
  },
  mealLocation: {
    fontWeight: "bold",
    fontSize: 15,
    color: lightTheme.background,
  },
  mealPrice: {
    fontWeight: "bold",
    fontSize: 15,
    color: lightTheme.background,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: "2%",
  },
  button: {
    backgroundColor: lightTheme.background,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "2%",
    paddingVertical: "4%",
    width: "45%",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  messageButton: {
    backgroundColor: lightTheme.maroon,
  },
  moreInfoButton: {
    backgroundColor: lightTheme.background,
  },
  messageButtonText: {
    color: lightTheme.background,
  },
  moreInfoButtonText: {
    color: lightTheme.maroon,
  },
});

export default MealCard;
