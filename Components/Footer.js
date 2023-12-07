import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.banner}>
      <Text style={styles.footerText}>
        Thank you for Viewing my Communication APP!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "bisque",
    padding: 20,
  },
  footerText: {
    color: "darkolivegreen",
    fontSize: 20,
    fontWeight: 400,
  },
});
