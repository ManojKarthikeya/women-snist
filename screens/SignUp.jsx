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

export default function SignUp() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require("../assets/images/start.png")}
			/>
			<Text style={{ ...fonts.h1, paddingVertical: 10 }}>
				Enterprise team collaboration.
			</Text>
			<Text style={fonts.subtext}>
				Bring together your files, your tools, projects and people.
				Including a new mobile and desktop application.
			</Text>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.register}>
					<Text style={{...styles.buttonText, color: 'white'}}>Register</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.login}>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
			</View>
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

	scrollConainer: {
		flex: 1,
		width: "100%",
	},
	buttonContainer: {
		marginTop: "auto",
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
	},

	buttonText: {
		fontFamily: "EBGaramond-SemiBold",
		textAlign: "center",
		fontSize: 25,
	},

	image: {
		marginTop: 30,
		marginBottom: 20,
		width: "90%",
		height: "40%",
	},

	register: {
		backgroundColor: "black",
		flex: 1,
		paddingVertical: 8,
	},

	login: {
		flex: 1,
		paddingVertical: 8,
	},
});
