import { View, Text, StyleSheet, Animated } from "react-native";
import React, { createContext, useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Password from "./register/Password";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Deatils from "./register/Details";
import ProfilePictureUpload from "./register/ProfilePictureUpload";
import Verify from "./register/Verify";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const Stack = createNativeStackNavigator();
export const profileContext = createContext(null);

export default function Register() {
	// console.log(
	// 	axios.post(
	// 		"https://snist-women-app.us-east-1.linodeobjects.com/api/user/create",
	// 		JSON.stringify({
	// 			name: "Manoj Karthikeya",
	// 			email: "manojkarthikeya@gmail.com",
	// 			age: 22,
	// 			location: "Hyderabad, India",
	// 			password: "sadfsdf",
	// 		})
	// 	)
	// );
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (newUser) =>
			axios.post(
				"https://snist-women-app.us-east-1.linodeobjects.com/api/user/create",
				newUser
			),
	});
	const [age, setAge] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [location, setLocation] = useState("");
	const [password, setPassword] = useState("");
	const [image, setImage] = useState(null);

	const createUser = () => {
		mutation.mutate({
			name: name,
			age: age,
			email: email,
			location: location,
			password: "new",
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<profileContext.Provider>
				<Text style={styles.heading}>Register</Text>
				<NavigationContainer independent={true}>
					<Stack.Navigator screenOptions={{ headerShown: false }} >
						<Stack.Screen name="details">
							{(props) => (
								<Deatils
									age={age}
									setAge={setAge}
									name={name}
									setName={setName}
									email={email}
									setEmail={setEmail}
									location={location}
									setLocation={setLocation}
									createUser={createContext}
								/>
							)}
						</Stack.Screen>
						<Stack.Screen name="createpassword">
							{(props) => (
								<Password
									password={password}
									setPassword={setPassword}
								/>
							)}
						</Stack.Screen>
						<Stack.Screen name="uploadphoto">
							{(props) => (
								<ProfilePictureUpload
									image={image}
									setImage={setImage}
								/>
							)}
						</Stack.Screen>
						<Stack.Screen name="otpverify" component={Verify} />
					</Stack.Navigator>
				</NavigationContainer>
			</profileContext.Provider>
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
