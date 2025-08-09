import React from "react";
import { View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";
import LottieView from "lottie-react-native"; // Import Lottie

export default function SensorData() {
  const handleSensorDataPress = () => {
    Linking.openURL("https://samrat-temp.web.app/");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={handleSensorDataPress}>
        <LottieView
          source={require("./../assets/AnimationCATA/Data Animation.json")}
          style={styles.image}
          autoPlay
          loop
        />
        <Text style={styles.text}>Sensor Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    alignItems: "center",
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
});
