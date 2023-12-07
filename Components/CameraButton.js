import React, { useState, useEffect, useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

const CameraButton = ({ onPictureTaken }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      onPictureTaken(photo.uri); // Pass the captured image URI to the parent component
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
        type={Camera.Constants.Type.back}
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

  if (cameraVisible) {
    return renderCamera();
  } else {
    // You can render a button or any other UI to open the camera
    return (
      <TouchableOpacity onPress={openCamera}>
        <Text>Open Camera</Text>
      </TouchableOpacity>
    );
  }
};

export default CameraButton;
