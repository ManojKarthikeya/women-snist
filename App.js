import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import GetStarted from "./screens/GetStarted";
import Login from "./screens/Login";
import ProfilePictureUpload from "./screens/ProfilePictureUpload";
import Register from "./screens/Register";
import SignUp from "./screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"Gloock-Regular": require("./assets/fonts/Gloock-Regular.ttf"),
		"EBGaramond-Medium": require("./assets/fonts/EBGaramond-Medium.ttf"),
		"EBGaramond-SemiBold": require("./assets/fonts/EBGaramond-SemiBold.ttf"),
		"EBGaramond-ExtraBold": require("./assets/fonts/EBGaramond-ExtraBold.ttf"),
	});
	if (!fontsLoaded) {
		return (
			<SafeAreaView style={styles.container}>
				<Text>Loading...</Text>
			</SafeAreaView>
		);
	}
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="GetStarted"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="GetStarted" component={GetStarted} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register}/>
				<Stack.Screen name = "ProfilePictureUpload" component={ProfilePictureUpload}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
