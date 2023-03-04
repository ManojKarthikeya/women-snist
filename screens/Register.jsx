import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>Register</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},

	view: {
		color: "red",
	},
});
