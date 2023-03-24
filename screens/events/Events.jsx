import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import fonts from "../../constants/fonts";
import { useNavigation } from "@react-navigation/native";

export default function Events() {
	const navigate = useNavigation()
	return (
		<SafeAreaView>
			<Text style={{ ...fonts.h1, textAlign: "left", padding : 10 }}>Events</Text>
            <View>

            </View>
			<TouchableOpacity
				style={{
					marginTop: "auto",
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "black",
					justifyContent: "center",
				}}
				onPress={() => {
					navigate.navigate("Navi");
				}}
			>
				<Ionicons name="add" size={20} color="white" />
				<Text
					style={{
						fontSize: 20,
						fontFamily: "EBGaramond-SemiBold",
						color: "white",
						paddingLeft: 5,
						paddingVertical: 5,
					}}
				>
					Create
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});
