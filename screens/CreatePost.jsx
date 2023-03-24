import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreatePost() {
	return (
		<SafeAreaView>
			<Text
				style={{
					fontFamily: "Gloock-Regular",
					fontSize: 30,
					padding: 10,
				}}
			>
				Create a post
			</Text>
			<Text style={{ fontSize: "EBGaramond-Medium" }}>Caption</Text>
			<TextInput
				placeholder="Whats on your mind?"
				multiline
				numberOfLines={3}
			/>
			<View>
				<Text>Upload to</Text>
			</View>
		</SafeAreaView>
	);
}
