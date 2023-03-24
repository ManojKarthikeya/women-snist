import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Post from "../../components/Post";

export default function Page() {
	const [vi, setVi] = useState(false);
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Text
					style={{
						fontFamily: "Gloock-Regular",
						fontSize: 27,
						padding: 20,
						paddingLeft: 20,
					}}
				>
					Coummunity name
				</Text>
				<MaterialCommunityIcons
					name="dots-vertical"
					size={27}
					style={{ paddingRight: 15 }}
				/>
			</View>
			<View>
				<Text
					style={{
						fontFamily: "EBGaramond-SemiBold",
						color: "grey",
						fontSize: 16,
						textAlign: "justify",
						paddingHorizontal: 20,
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Pellentesque aliquet arcu in mi rhoncus, sit amet luctus ex
					pellentesque.
				</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
					backgroundColor: "white",
					paddingVertical: 10,
					marginTop: 10,
					marginBottom: 10,
				}}
			>
				<TouchableOpacity
					onPress={() => {
						setVi(false);
					}}
				>
					<Text
						style={{
							color: vi ? "grey" : "black",
							fontFamily: "EBGaramond-SemiBold",
							fontSize: 18,
						}}
					>
						Activity
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setVi(true);
					}}
				>
					<Text
						style={{
							color: vi ? "black" : "grey",
							fontFamily: "EBGaramond-SemiBold",
							fontSize: 18,
						}}
					>
						Members
					</Text>
				</TouchableOpacity>
			</View>
			{vi ? (
				<Text>Members</Text>
			) : (
				<ScrollView>
					<Post />
					<Post />
					<Post />
				</ScrollView>
			)}
		</SafeAreaView>
	);
}
