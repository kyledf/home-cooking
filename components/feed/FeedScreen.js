import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { lightTheme } from "../../themes/themes";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import MealCard from "./MealCard";

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
  const [searchQuery, setSearchQuery] = useState("");

  const filterBySearch = () => {
    return mealInfo.filter((meal) => {
      return meal.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons name="menu" size={45} color={lightTheme.background} />
        </TouchableOpacity>
        <Searchbar
          placeholder="Search Meal"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
          style={styles.searchBar}
        />
      </View>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {filterBySearch().map(
          ({ id, image, name, description, totalPrice, quantity, location }) => (
            <MealCard
              key={id}
              image={image}
              name={name}
              description={description}
              totalPrice={totalPrice}
              quantity={quantity}
              location={location}
              navigation={navigation}
            />
          )
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
  searchBar: {
    position: "absolute",
    left: "20%",
    width: "75%",
    height: "30%",
    borderRadius: 25,
    backgroundColor: lightTheme.background,
    marginTop: 50,
  },
  scrollContainer: {
    width: "100%",
    height: "100%",
    marginTop: 150,
  },
});

export default FeedScreen;
