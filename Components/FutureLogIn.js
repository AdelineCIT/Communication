import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FutureLogIn() {
  return (
    <View style={styles.banner}>
      <Text style={styles.logInText}>
        This is a placeholder for login component
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "orange",
    padding: 20,
  },
  logInText: {
    textAlign: "center",
    fontWeight: 600,
    fontStyles: "italic",
  },
});
