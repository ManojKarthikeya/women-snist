import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React from "react";
import fonts from "../constants/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Login() {
	const navigate = useNavigation()
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Welcome back,</Text>
			<Text style={styles.title}>Let's sign you in.</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Email address"
					textContentType="username"
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					textContentType="newPassword"
					secureTextEntry
				/>
				<TouchableOpacity>
					<Text style={styles.forgotPassword}>Forgot Password?</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.bottom}>
				<View style={styles.bottomtext}>
					<Text style={styles.subtext}>Don't have an account?</Text>
					<TouchableOpacity onPress={()=>{navigate.navigate('Register')}}>
						<Text style={styles.register}>Register</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Sign In</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		padding: 25,
		paddingTop: 45,
		justifyContent: "center",
	},
	input: {
		fontFamily: "EBGaramond-SemiBold",
		fontSize: 20,
		margin: 15,
		paddingLeft: 2,
		borderBottomWidth: 0.5,
	},
	title: {
		fontFamily: "Gloock-Regular",
		fontSize: 40,
	},
	subtext: {
		fontFamily: "EBGaramond-SemiBold",
		fontSize: 17,
		color: "grey",
	},
	button: {
		backgroundColor: "black",
		paddingVertical: 8,
	},

	bottom: {
		marginTop: "auto",
		width: "90%",
		alignSelf: "center",
	},

	buttonText: {
		fontFamily: "EBGaramond-SemiBold",
		color: "white",
		textAlign: "center",
		fontSize: 25,
	},

	bottomtext: {
		alignSelf: "center",
		flexDirection: "row",
		marginVertical: 15,
	},

	register: {
		paddingHorizontal: 5,
		fontFamily: "EBGaramond-SemiBold",
		fontSize: 18,
		color: "black",
	},

	inputContainer: {
		marginVertical: 55,
	},

	forgotPassword: {
		fontFamily: "EBGaramond-SemiBold",
		textAlign: "right",
		fontSize: 17,
		marginRight: 10,
	},
});
