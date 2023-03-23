import { View, Text, StyleSheet, Animated } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Password from "./register/Password";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Deatils from "./register/Details";
import ProfilePictureUpload from "./register/ProfilePictureUpload";
import Verify from "./register/Verify";


const Stack = createNativeStackNavigator();

export default function Register() {
	return (	
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading}>Register</Text>
			<NavigationContainer independent={true}>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="details" component={Deatils} />
					<Stack.Screen name="createpassword" component={Password} />
					<Stack.Screen name="uploadphoto" component={ProfilePictureUpload} />
					<Stack.Screen name="otpverify" component={Verify} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	heading: {
		fontFamily: "Gloock-Regular",
		fontSize: 36,
		paddingLeft: 18,
		paddingTop: 10,
	},
});
