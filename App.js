import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import ImageList from "./Components/ImageList";
import CameraButton from "./Components/CameraButton";
import Heading from "./Components/Heading";
import Footer from "./Components/Footer";
import FutureLogIn from "./Components/FutureLogIn";
import Dedication from "./Components/Dedication";

export default function App() {
  const [images, setImages] = useState([]);
  const handlePictureTaken = (imageURI) => {
    setImages([...images, imageURI]); //adds captured to list
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Heading></Heading>
        <FutureLogIn></FutureLogIn>
      </View>
      <View>
        <CameraButton onPictureTaken={handlePictureTaken} />
        <ImageList images={images} />
        {/* <ImageList></ImageList> */}
      </View>
      <View>
        <Dedication></Dedication>
      </View>
      <View>
        <Footer></Footer>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    backgroundColor: "gray",
    padding: 20,
  },
  bannerText: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
  },
});
