import {
	View,
	Text,
	StyleSheet,
	useWindowDimensions,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Community from "./../../components/Community";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
	const { width } = useWindowDimensions();
    const navigate = useNavigation()
	const [vi, setVi] = useState(false);
	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={{
					fontFamily: "Gloock-Regular",
					fontSize: 30,
					padding: 10,
				}}
			>
				Communities
			</Text>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
					backgroundColor: "white",
					paddingVertical: 14,
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
						My Communities
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
						Explore
					</Text>
				</TouchableOpacity>
			</View>
			{!vi ? (
				<ScrollView>
					<Community width={width} />
					<Community width={width} />
				</ScrollView>
			) : (
				<ScrollView>
					<Community width={width} />
					<Community width={width} />
					<Community width={width} />
					<Community width={width} />
					<Community width={width} />
				</ScrollView>
			)}
			<TouchableOpacity
				style={{
					marginTop: "auto",
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "black",
					justifyContent: "center",
				}} onPress={()=>{navigate.navigate('create')}}
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
