import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Animated,
} from "react-native";
import React from "react";
import fonts from "../constants/fonts";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function GetStarted() {
	const navigate = useNavigation();
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require("../assets/images/start0.png")}
			/>
			<Text style={{ ...fonts.h1, paddingVertical: 10 }}>
				For all and only Women.
			</Text>
			<Text style={fonts.subtext}>
				Join a community of women and share your thoughts, ideas and
				inspirations. Indulge in events and community sharing.
			</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigate.navigate("SignUp");
				}}
			>
				<Text style={styles.buttonText}>Get started</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		padding: 35,
		backgroundColor: colors.primary,
	},

	button: {
		marginTop: "auto",
		width: "90%",
		backgroundColor: "black",
		paddingVertical: 8,
	},

	buttonText: {
		fontFamily: "EBGaramond-SemiBold",
		color: "white",
		textAlign: "center",
		fontSize: 25,
	},

	image: {
		marginTop: 30,
		marginBottom: 20,
		width: "90%",
		height: "40%",
	},
});
