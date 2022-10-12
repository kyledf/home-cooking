import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { lightTheme } from "../../themes/themes";
import Ionicons from "react-native-vector-icons/Ionicons";

const currencyFormat = (num) => {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const MealCard = ({ image, name, totalPrice, rating }) => {
  return (
    <View style={styles.mealContainer}>
      <Image style={styles.mealImage} source={{ uri: image }}></Image>
      <View style={styles.mealInfo}>
        <Text style={styles.mealName}>{name}</Text>
        <View style={styles.priceAndRating}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={25} color={lightTheme.background} />
            <Text style={styles.mealRating}>{rating}</Text>
          </View>
          <Text style={styles.mealPrice}>{currencyFormat(totalPrice)}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.receiptButton]}>
          <Text style={[styles.buttonText, styles.receiptButtonText]}>
            Receipt
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
  priceAndRating: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  ratingContainer: {
    display: "flex",
    width: "15%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },

  mealRating: {
    fontWeight: "bold",
    fontSize: 25,
    color: lightTheme.background,
  },
  mealPrice: {
    fontWeight: "bold",
    fontSize: 25,
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
  receiptButton: {
    backgroundColor: lightTheme.maroon,
  },
  moreInfoButton: {
    backgroundColor: lightTheme.background,
  },
  receiptButtonText: {
    color: lightTheme.background,
  },
  moreInfoButtonText: {
    color: lightTheme.maroon,
  },
});

export default MealCard;
