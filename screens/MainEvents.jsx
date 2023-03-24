import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Events from "./events/Events";
import Navi from "./events/Navi";


const Stack = createNativeStackNavigator();

export default function MainEvents() {
	return (
		<Stack.Navigator initialRouteName="Events" screenOptions={{headerShown : false}}>
			<Stack.Screen name='Events' component={Events}/>
			<Stack.Screen name='Navi' component={Navi}/>
		</Stack.Navigator>
	);
}