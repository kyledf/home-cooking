import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { lightTheme } from "../../themes/themes";
import Ionicons from "react-native-vector-icons/Ionicons";

const currencyFormat = (num) => {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const mealInfo = [
  {
    id: 1,
    name: "Chicken and Rice",
    description: "Chicken and Rice with a side of vegetables",
    location: "15 Margaret Street",
    quantity: 24,
    totalPrice: 48,
    image:
      "https://www.simplyrecipes.com/thmb/A0clzs4DNOB_XvCRVHDoEWSeBio=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__06__Chicken-Rice-Casserole-LEAD-2-01230ff397ac4b35958e8ffe9857fca6.jpg",
  },
  {
    id: 2,
    name: "Beef and Potatoes",
    description: "Beef and Potatoes with a side of vegetables",
    location: "23 Badger Road",
    quantity: 1,
    totalPrice: 5.25,
    image:
      "https://s23209.pcdn.co/wp-content/uploads/2019/02/Sweet-Potato-Beef-StewIMG_8534.jpg",
  },
  {
    id: 3,
    name: "Lamb and Rice",
    description: "Lamb and Rice with a side of vegetables",
    location: "9 Lamda Ave",
    quantity: 5,
    totalPrice: 15,
    image:
      "https://static.onecms.io/wp-content/uploads/sites/44/2018/08/11/5655893.jpg",
  },
];

const FeedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons name="menu" size={45} color={lightTheme.background} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {mealInfo.map((meal) => (
          <View style={styles.mealContainer} key={meal.id}>
            <Image
              style={styles.mealImage}
              source={{ uri: meal.image }}
            ></Image>
            <View style={styles.mealInfo}>
              <Text style={styles.mealName}>{meal.name}</Text>
              <Text style={styles.mealPrice}>
                Price per serving:{" "}
                {currencyFormat(meal.totalPrice / meal.quantity)}
              </Text>
              <Text style={styles.mealLocation}>
                Pick Up Location: {meal.location}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.messageButton]}>
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
        ))}
      </ScrollView>
    </View>
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
  scrollContainer: {
    top: "18%",
    width: "100%",
  },
  mealContainer: {
    width: "95%",
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

export default FeedScreen;
