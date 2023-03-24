import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

export default function Create() {
	const [image, setImage] = useState(null);
	const navigate = useNavigation()

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
		if (!result.assets) {
			setImage(result.assets[0].uri);
			ToastAndroid.show("Image not selected!", ToastAndroid.SHORT);
		} else {
			ToastAndroid.show("Image selected!", ToastAndroid.SHORT);
		}
	};

	return (
		<SafeAreaView style={{flex : 1}}>
			<Text
				style={{
					fontFamily: "Gloock-Regular",
					fontSize: 30,
					padding: 20,
					paddingLeft: 20,
				}}
			>
				Create a community
			</Text>
			<View>
				<Text style={styles.label}>Name</Text>
				<TextInput style={styles.name}></TextInput>
			</View>
			<View style={{ marginTop: 10 }}>
				<Text style={styles.label}>Description</Text>
				<TextInput multiline numberOfLines={4} style={styles.name} />
			</View>
			<View style={{ paddingTop: 10 }}>
				<Text style={styles.label}>Picture</Text>
				<TouchableOpacity
					style={{
						marginTop: "auto",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
					onPress={pickImage}
				>
					<MaterialIcons name="upload-file" size={20} color="black" />
					<Text
						style={{
							fontSize: 20,
							fontFamily: "EBGaramond-SemiBold",
							paddingLeft: 5,
							paddingVertical: 10,
						}}
					>
						Select from gallery
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ paddingTop: 5 }}>
				<Text style={styles.label}>Invite members</Text>
				<View></View>
			</View>
			<TouchableOpacity
				style={{
					marginTop: "auto",
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "black",
					justifyContent: "center",
				}}
				onPress={() => {
					navigate.navigate("comehom");
				}}
			>
				<Ionicons name="add" size={20} color="white" />
				<Text
					style={{
						fontSize: 20,
						fontFamily: "EBGaramond-SemiBold",
						color: "white",
						paddingLeft: 5,
						paddingVertical: 5,
					}}
				>
					Create
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	name: {
		fontSize: 19,
		paddingLeft: 2,
		borderBottomWidth: 0.5,
		backgroundColor: "transparent",
		marginHorizontal: 25,
		fontFamily: "Gloock-Regular",
		marginVertical: 10,
	},
	label: {
		fontFamily: "EBGaramond-SemiBold",
		fontSize: 18,
		paddingLeft: 20,
		color: "grey",
	},
});
