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
import MealCard from "./MealCard";
import { ScrollView } from "react-native-gesture-handler";

const HistoryScreen = ({ navigation }) => {
  const mealHistory = [
    {
      id: 1,
      name: "Chicken and Rice",
      rating: 5,
      totalPrice: 48,
      image:
        "https://www.simplyrecipes.com/thmb/A0clzs4DNOB_XvCRVHDoEWSeBio=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__06__Chicken-Rice-Casserole-LEAD-2-01230ff397ac4b35958e8ffe9857fca6.jpg",
    },
    {
      id: 2,
      name: "Beef and Potatoes",
      rating: 5,
      totalPrice: 5.25,
      image:
        "https://s23209.pcdn.co/wp-content/uploads/2019/02/Sweet-Potato-Beef-StewIMG_8534.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons name="menu" size={45} color={lightTheme.background} />
        </TouchableOpacity>
        <Text style={styles.title}>Meal History</Text>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {mealHistory.map(
          ({ id, image, name, totalPrice, rating }) => {
            return (
              <MealCard
                key={id}
                image={image}
                name={name}
                totalPrice={totalPrice}
                rating={rating}
              />
            );
          }
        )}
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
    height: 150,
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
  scrollContainer: {
    width: "100%",
    height: "100%",
    marginTop: 150,
  },
});

export default HistoryScreen;
