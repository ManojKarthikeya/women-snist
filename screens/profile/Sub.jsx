import { View, Text } from "react-native";
import React from "react";
import Myposts from "./Myposts";
import Followers from "./Followers";
import Following from "./Following";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default function Sub() {
	return (
		<Tab.Navigator initialRouteName="myposts">
			<Tab.Screen name="myposts" component={Myposts} />
			<Tab.Screen name="followers" component={Followers} />
			<Tab.Screen name="following" component={Following} />
		</Tab.Navigator>
	);
}
