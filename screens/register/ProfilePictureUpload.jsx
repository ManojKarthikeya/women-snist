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

export default function ProfilePictureUpload({ image, setImage }) {
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
		const permissionResult =
			await ImagePicker.requestCameraPermissionsAsync();
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
				<Text
					style={{
						fontFamily: "EBGaramond-SemiBold",
						textAlign: "center",
						fontSize: 24,
					}}
				>
					Select a profile picture.
				</Text>
				{!image ? (
					<Image
						source={require("./../../assets/images/stock.jpg")}
						style={styles.image}
					/>
				) : (
					<Image source={{ uri: image }} style={styles.image} />
				)}
				<View style={styles.buttonView}>
					<TouchableOpacity
						onPress={pickImage}
						style={styles.appButtonContainer}
					>
						<Text style={styles.buttonText}>Pick an image</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.buttonView}>
					<TouchableOpacity
						onPress={openCamera}
						style={styles.appButtonContainer}
					>
						<Text style={styles.buttonText}>Take a picture</Text>
					</TouchableOpacity>
				</View>
				<View>
					<Text
						style={{
							...styles.buttonText,
							fontSize: 16,
							color: "grey",
						}}
					>
						or choose from defaults
					</Text>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Image
						source={require("./../../assets/images/stock.jpg")}
						style={{
							width: 100,
							height: 100,
							borderRadius: 50,
							marginHorizontal: 20,
							borderColor: "black",
						}}
					/>
					<Image
						source={require("./../../assets/images/start.png")}
						style={{ width: 100, height: 100 }}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	image: {
		width: 250,
		height: 250,
		marginBottom: 30,
		borderRadius: 125,
		alignSelf: "center",
		marginVertical: 30,
	},
	buttonText: {
		fontFamily: "EBGaramond-SemiBold",
		textAlign: "center",
		fontSize: 22,
		marginBottom: 20,
	},
	// buttonView: {
	//   borderColor: "black",
	//   borderWidth: 1,
	//   borderRadius: 4,
	// },
	appButtonContainer: {
		justifyContent: "center",
	},
});
