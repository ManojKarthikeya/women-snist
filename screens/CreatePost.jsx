import { View, Text, TextInput, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import {MaterialIcons, Ionicons} from "@expo/vector-icons";

export default function CreatePost() {
	const [selectedLanguage, setSelectedLanguage] = useState();
	const [image, setImage] = useState(null);
	const NavigationContainer = useNavigation();

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
					padding: 10,
				}}
			>
				Create a post
			</Text>
			<View style={{ padding: 20 }}>
				<Text
					style={{
						fontFamily: "EBGaramond-Medium",
						fontSize: 18,
						color: "grey",
					}}
				>
					Caption
				</Text>
				<TextInput
					placeholder="Whats on your mind?"
					multiline
					numberOfLines={3}
					style={{
						fontFamily: "EBGaramond-Medium",
						fontSize: 18,
						color: "black",
					}}
				/>
				<View>
					<Text
						style={{
							fontFamily: "EBGaramond-Medium",
							fontSize: 18,
							color: "grey",
						}}
					>
						Upload to
					</Text>
				</View>
				<Picker
					selectedValue={selectedLanguage}
					onValueChange={(itemValue, itemIndex) =>
						setSelectedLanguage(itemValue)
					}
				>
					<Picker.Item label="My Account" value="My Account" />
					<Picker.Item label="Community 1" value="Community 1" />
					<Picker.Item label="Community 2" value="Community 2" />
					<Picker.Item label="Community 3" value="Community 3" />
				</Picker>
				<Text
					style={{
						fontFamily: "EBGaramond-Medium",
						fontSize: 18,
						color: "grey",
					}}
				>
					Image
				</Text>
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
