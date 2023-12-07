import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image as RNImage,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as Speech from "expo-speech";
import ImagePressHandler from "../ImagePressHandler";

export default function CameraImageList() {
  const ImageList = () => {
    const [images, setimages] = useState([
      require("../Images/Food.png"),
      require("../Images/Phone.png"),
      require("../Images/Watch TV.png"),
      require("../Images/Yes.png"),
      require("../Images/No.png"),
      require("../Images/ChocolateMilk.png"),
      require("../Images/Please.png"),
      require("../Images/Banana.png"),
      require("../Images/carrot.png"),
      require("../Images/ChickenRice.png"),
      require("../Images/Fries.png"),
      require("../Images/Fruit Snacks.png"),
      require("../Images/Juice.png"),
      require("../Images/Play Toys.png"),
      require("../Images/Popcorn.png"),
      require("../Images/Pretzels.png"),
      require("../Images/Ruffles.png"),
      require("../Images/Spaghetti.png"),
      require("../Images/Strawberry milk.png"),
      require("../Images/String Cheese.png"),
      require("../Images/Thank-you.png"),
      require("../Images/Toilet.png"),
      require("../Images/Tortilla chips 2.png"),
      require("../Images/Tortilla chips.png"),
      require("../Images/Wash Hands.png"),
      require("../Images/Water.png"),
    ]);

    const [names, setnames] = useState([
      "Food",
      "Phone",
      "Watch TV",
      "Yes",
      "No",
      "Chocolate Milk",
      "Please",
      "Banana",
      "carrot",
      "Chicken and Rice",
      "Fries",
      "Fruit Snacks",
      "Juice",
      "Play Toys",
      "Popcorn",
      "Pretzels",
      "Ruffles",
      "Spaghetti",
      "Strawberry Milk",
      "String Cheese",
      "Thank you",
      "Toilet",
      "Tortilla Chips",
      "Tortilla Chips",
      "Wash Hands",
      "Water",
    ]);
    const handleImagePress = (index) => {
      console.log(`Image at index ${index} pressed`);
      Speech.speak(names[index]);
    };

    const [hasPermission, setHasPermission] = useState(null);
    const [cameraVisible, setCameraVisible] = useState(false);
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted");
      })();
    }, []);
    const takePicture = async () => {
      if (cameraRef.current) {
        let photo = await cameraRef.current.takePictureAsync();
        setimages([...images, photo.uri]);
        // For simplicity, you can prompt the user to enter a name for the new image
        // and then add it to the names array
        // For example:
        const newName = "New Image"; // Replace this with your logic to get a name from the user
        setnames([...names, newName]);
        //Need to look this part up
        setCameraVisible(false);
      }
    };
    const openCamera = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === "granted") {
        setCameraVisible(true);
      } else {
        alert("Camera permission not granted");
      }
    };
    const renderCamera = () => {
      return (
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constrants.Type.back}
          ref={(ref) => {
            cameraRef.current = ref;
          }}
        >
          <TouchableOpacity
            style={{ flex: 0.1, alignSelf: "flex-end", alignItems: "center" }}
            onPress={takePicture}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              Take Picture
            </Text>
          </TouchableOpacity>
        </Camera>
      );
    };
    return (
      <SafeAreaView style={styles.container}>
        {cameraVisible ? (
          renderCamera()
        ) : (
          <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            data={images}
            renderItem={({ item, index }) => (
              <ImagePressHandler
                imageSource={item} /*use item here to set the image source */
                onPress={() => handleImagePress(index)}
                /*Important to set a key for list items, but its wrong to use indexes as keys, see below... This has no below I am going to look this up. Looks like keys can be complicated the guide I was using said to use the index then to not, that is very confusing.  */
                style={{
                  width: 260,
                  height: 300,
                  borderWidth: 2,
                  borderColor: "Black",
                  resizeMode: "contain",
                  margin: 8,
                }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
          <Text style={{ fontSize: 20, color: "white" }}>Open Camera</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
  },
});
