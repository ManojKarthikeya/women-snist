import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Verify() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading}>We've sent you an OTP</Text>
			<Text style={styles.subs}>on 9908561617</Text>
			<TextInput
				style={styles.input}
				autoComplete="sms-otp"
				textContentType="oneTimeCode"
			/>
			<TouchableOpacity>
				<Text style={styles.resend}>Resend OTP</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	heading: {
		fontFamily: "Gloock-Regular",
		fontSize: 27,
	},

	input: {
		fontFamily: "EBGaramond-SemiBold",
		fontSize: 20,
		margin: 15,
		paddingLeft: 2,
		borderBottomWidth: 0.5,
		width: "90%",
	},

	subs: {
		fontFamily: "Gloock-Regular",
		color: "grey",
		fontSize: 23,
	},

	resend: {
		fontFamily: "EBGaramond-SemiBold",
		fontSize: 20,
		margin: 15,
	},
});
