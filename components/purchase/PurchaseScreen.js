import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { lightTheme } from "../../themes/themes";
import Ionicons from "react-native-vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const PurchaseScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate("Feed");
  };

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
        <TouchableOpacity style={styles.menuButton} onPress={handleBack}>
          <Ionicons
            name="chevron-back-circle"
            size={45}
            color={lightTheme.background}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Purchase</Text>
      </View>

      <View style={styles.mealInfo}>
        <Image
          source={{
            uri: "https://img.taste.com.au/gOpVgvz8/taste/2016/11/classic-chewy-brownie-102727-1.jpeg",
          }}
          style={styles.image}
        />
        <View style={styles.innerMealInfo}>
          <Text style={styles.mealText}>Brownie</Text>
          <Text style={styles.mealText}>$5.00 per serving</Text>
          <Text style={styles.mealText}>Pick-Up: 1A Real St</Text>
          <Text style={styles.mealText}>Seller: Ethan David</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.innerInputContainer}>
          <TextInput style={styles.innerInput} placeholder="Quantity" />
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerText}>Pick-Up Date and Time</Text>
            <RNDateTimePicker
              mode={"datetime"}
              value={new Date()}
              style={styles.dateTimePicker}
            />
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
        />
        <TextInput style={styles.input} placeholder="Name on Card" />
        <TextInput
          style={styles.input}
          placeholder="Expiration Date"
          keyboardType="date"
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Buy Now</Text>
      </TouchableOpacity>
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
    top: "40%",
    textAlign: "center",
    color: lightTheme.background,
    fontSize: 40,
    fontWeight: "900",
  },
  mealInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: "20%",
    width: "80%",
    height: "20%",
  },
  innerMealInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: "5%",
    width: "50%",
    height: "100%",
  },
  mealText: {
    color: lightTheme.darkPurple,
    fontWeight: "700",
  },
  image: {
    height: "80%",
    aspectRatio: 4 / 3,
    flexDirection: "row",
    backgroundColor: lightTheme.lightPurple,
    borderColor: lightTheme.maroon,
    borderWidth: 4,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: lightTheme.background,
  },
  inputContainer: {
    marginTop: "75%",
    width: "80%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  innerInputContainer: {
    width: "100%",
    height: "18%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  input: {
    width: "100%",
    height: "18%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: lightTheme.lightPurple,
    marginTop: "5%",
    padding: 10,
    backgroundColor: "white",
  },
  innerInput: {
    height: "100%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: lightTheme.lightPurple,
    padding: 10,
    backgroundColor: "white",
  },
  pickerContainer: {
    width: "65%",
    height: "100%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: lightTheme.lightPurple,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pickerText: {
    fontSize: 11,
    color: "lightgrey",
  },
  dateTimePicker: {
    width: "95%",
    height: "65%",
    justifyContent: "center",
    alignItems: "center",
  },
  postButton: {
    marginTop: "15%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: lightTheme.maroon,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  postButtonText: {
    fontSize: 18,
    color: lightTheme.background,
    fontWeight: "bold",
  },
});

export default PurchaseScreen;
