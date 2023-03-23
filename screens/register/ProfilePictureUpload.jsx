import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ProfilePictureUpload() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your media");
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <Text>Profile photo</Text> */}
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={pickImage} style={styles.appButtonContainer}>
            <Text style={styles.buttonText}>Pick an image</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={openCamera} style={styles.appButtonContainer}>
            <Text style={styles.buttonText}>Take a picture</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
    borderRadius: 150,
  },
  buttonText: {
    fontFamily: "EBGaramond-Medium",
  },
  // buttonView: {
  //   borderColor: "black",
  //   borderWidth: 1,
  //   borderRadius: 4,
  // },
  appButtonContainer: {

    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 12
  
  }
});

