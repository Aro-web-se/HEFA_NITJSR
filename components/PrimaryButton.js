import {View, Text, StyleSheet, Pressable } from "react-native"
import React from "react"
import { colors } from "./styles"

function PrimaryButton({ children, onPressed }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPressed}
        android_ripple={{ colors: "blue"  }}
      >
        <Text style={styles.buttontext}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    borderRadius: 20,
    backgroundColor: "#DC143C",
    paddingVertical: 30,
    paddingHorizontal: 100,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.7,
  },
  buttontext: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.6,
  },
});
