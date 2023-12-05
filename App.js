import React from "react";
import { StyleSheet, View } from "react-native";
import ImageList from "./Components/ImageList";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageList></ImageList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
