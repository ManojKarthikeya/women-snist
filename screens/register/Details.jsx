import {
	View,
	Text,
	StyleSheet,
	TextInput,
	useWindowDimensions,
	TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { profileContext } from "../Register";

export default function Deatils({
	name,
	setName,
	age,
	setAge,
	email,
	setEmail,
	location,
	setLocation,
	createUser
}) {
	const { width, height } = useWindowDimensions();
	const navigation = useNavigation();
	return (
		<SafeAreaView
			style={{ ...styles.container, width: width, maxWidth: width }}
		>
			<Text style={styles.subtext}>Tell us about yourself.</Text>
			<View style={styles.inputcont}>
				<View style={styles.namecont}>
					<TextInput
						style={styles.name}
						placeholder="Name"
						textContentType="name"
						value={name}
						onChangeText={(text) => setName(text)}
					/>
					<TextInput
						style={styles.age}
						placeholder="Age"
						textContentType="telephoneNumber"
						keyboardType="number-pad"
						maxLength={2}
						textAlign="center"
						value={age}
						onChangeText={(text) => setAge(text)}
					/>
				</View>
				<TextInput
					style={styles.input}
					placeholder="Email Address"
					textContentType="username"
					keyboardType="email-address"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<TextInput
					style={styles.input}
					placeholder="Location"
					textContentType="location"
					keyboardType="default"
					value={location}
					onChangeText={(text) => setLocation(text)}
				/>
			</View>
			{name &&
			email &&
			age &&
			email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
			location ? (
				<TouchableOpacity
					style={styles.touch}
					onPress={() => {
						navigation.navigate("createpassword");
						createUser()
					}}
				>
					<Text style={styles.next}>Next</Text>
					<MaterialIcons name="navigate-next" size={25} />
				</TouchableOpacity>
			) : (
				<View
					style={{
						...styles.touch,
						opacity: 0.3,
					}}
				>
					<Text
						style={{
							...styles.next,
							color: "grey",
							textAlign: "right",
						}}
					>
						Next
					</Text>
					<MaterialIcons
						name="navigate-next"
						size={25}
						color="grey"
					/>
				</View>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	input: {
		fontFamily: "EBGaramond-SemiBold",
		fontSize: 20,
		margin: 15,
		paddingLeft: 2,
		borderBottomWidth: 0.8,
		width: "80%",
	},

	namecont: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "80%",
	},

	subtext: {
		fontFamily: "EBGaramond-Medium",
		fontSize: 22,
		color: "grey",
		paddingLeft: 18,
		width: "95%",
	},

	inputline: {
		flexDirection: "row",
		alignItems: "center",
	},

	inputcont: {
		paddingLeft: 15,
		marginTop: 40,
	},

	name: {
		fontFamily: "EBGaramond-SemiBold",
		fontSize: 20,
		margin: 15,
		paddingLeft: 2,
		borderBottomWidth: 0.8,
		width: "75%",
	},

	age: {
		fontFamily: "EBGaramond-SemiBold",
		fontSize: 20,
		margin: 15,
		borderBottomWidth: 0.8,
		alignSelf: "flex-end",
		paddingRight: 0,
		marginRight: 0,
	},

	button: {
		backgroundColor: "black",
		paddingVertical: 8,
	},

	buttonText: {
		fontFamily: "EBGaramond-SemiBold",
		color: "white",
		textAlign: "center",
		fontSize: 25,
	},

	touch: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: "auto",
		padding: 30,
		justifyContent: "flex-end",
	},

	next: {
		fontFamily: "Gloock-Regular",
		fontSize: 36,
	},
});
