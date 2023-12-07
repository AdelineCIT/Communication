import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Dedication() {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>Dedicated to LeeLoo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "blue",
    padding: 20,
  },
  bannerText: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
  },
});
