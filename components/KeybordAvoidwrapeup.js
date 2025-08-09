// components/KeyboardAvidWrap.js
import { SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, StatusBar } from "react-native";

const KeyboardAvidWrap = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9fafb" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default KeyboardAvidWrap;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // ensures children take full space
  },
});
