import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Verify from "./register/Verify";
import Home from "./communities/Home";
import Create from "./communities/Create";
import Page from "./communities/Page";

const Stack = createNativeStackNavigator();

export default function Communities() {
	return (
		<Stack.Navigator initialRouteName="comehom" screenOptions={{headerShown : false}}>
			<Stack.Screen name='comehom' component={Home}/>
			<Stack.Screen name='create' component={Create} />
			<Stack.Screen name='page' component={Page} />
		</Stack.Navigator>
	);
}
