import {
	View,
	Text,
	StyleSheet,
	Touchable,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Post from "../components/Post";

export default function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Text style={styles.h1}>AppName</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<TouchableOpacity style={styles.iconbutton}>
						<MaterialIcons name="notifications" size={30} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.iconbutton}>
						<MaterialIcons name="explore" size={30} />
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView>
				<Post />
				<Post />
				<Post />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	h1: {
		fontFamily: "Gloock-Regular",
		fontSize: 30,
		paddingLeft: 20,
		paddingVertical: 10,
	},

	subtext: {
		fontFamily: "EBGaramond-Medium",
		fontSize: 22,
		textAlign: "center",
		color: "grey",
	},
	iconbutton: {
		marginRight: 17,
	},
});
