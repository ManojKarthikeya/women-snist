import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import fonts from "../constants/fonts";

export default function Events() {
	return (
		<SafeAreaView>
			<Text style={{ ...fonts.h1, textAlign: "left", padding : 10 }}>Events</Text>
            <View>

            </View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});
