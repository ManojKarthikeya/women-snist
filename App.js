import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Communities from "./screens/Communities";
import GetStarted from "./screens/GetStarted";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Register from "./screens/Register";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SignUp from "./screens/SignUp";
import Verify from "./screens/register/Verify";
import MainEvents from "./screens/MainEvents";
import CreatePost from "./screens/CreatePost";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
	const [user, setUser] = useState(true);
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
	if (user) {
		return (
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={{
						headerShown: false,
						tabBarActiveTintColor: "black",
						tabBarShowLabel: false,
						tabBarStyle: { height: 60 },
					}}
				>
					<Tab.Screen
						name="home"
						component={Home}
						options={{
							tabBarIcon: ({ color }) => (
								<MaterialIcons
									name="home"
									color={color}
									size={26}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="communities"
						component={Communities}
						options={{
							tabBarIcon: ({ color }) => (
								<MaterialIcons
									name="groups"
									color={color}
									size={26}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="createpost"
						component={CreatePost}
						options={{
							tabBarIcon: ({ color }) => (
								<MaterialIcons
									name="add-circle"
									color={color}
									size={26}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="events"
						component={MainEvents}
						options={{
							tabBarIcon: ({ color }) => (
								<MaterialIcons
									name="event-available"
									color={color}
									size={26}
								/>
							),
						}}
					/>
					<Tab.Screen
						name="profile"
						component={Profile}
						options={{
							tabBarIcon: ({ color }) => (
								<MaterialIcons
									name="account-circle"
									color={color}
									size={26}
								/>
							),
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
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
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Verify" component={Verify} />
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



