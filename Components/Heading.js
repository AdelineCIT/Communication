import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Heading() {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>Hello Here is my Communication App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "black",
    padding: 20,
  },
  bannerText: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
  },
});
