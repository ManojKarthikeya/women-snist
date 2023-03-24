import {
	View,
	Text,
	Image,
	useWindowDimensions,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default function Profile() {
	const { width, height } = useWindowDimensions();
	const [vi, setVi] = useState(0);
	const navigate = useNavigation();
	return (
		<React.Fragment>
			<SafeAreaView>
				<Image
					source={require("./../assets/images/stock.jpg")}
					style={{
						width: width * 0.4,
						height: width * 0.4,
						borderRadius: width * 0.2,
						alignSelf: "center",
						marginTop: 25,
					}}
				/>
				<Text
					style={{
						textAlign: "center",
						marginTop: 15,
						fontFamily: "Gloock-Regular",
						fontSize: 25,
					}}
				>
					Manoj Karthikeya
				</Text>
				<Text
					style={{
						textAlign: "center",
						fontFamily: "EBGaramond-Medium",
						fontSize: 18,
						color: "grey",
					}}
				>
					Hyderabad, India
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-evenly",
						backgroundColor: "white",
						paddingVertical: 14,
						marginTop: 10,
					}}
				>
					<TouchableOpacity
						onPress={() => {
							setVi(0);
						}}
					>
						<Text
							style={{
								color: vi == 0 ? "black" : "grey",
								fontFamily: "EBGaramond-SemiBold",
								fontSize: 18,
							}}
						>
							Posts
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setVi(1);
						}}
					>
						<Text
							style={{
								color: vi == 1 ? "black" : "grey",
								fontFamily: "EBGaramond-SemiBold",
								fontSize: 18,
							}}
						>
							Following
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							setVi(2);
						}}
					>
						<Text
							style={{
								color: vi == 2 ? "black" : "grey",
								fontFamily: "EBGaramond-SemiBold",
								fontSize: 18,
							}}
						>
							Edit
						</Text>
					</TouchableOpacity>
				</View>
				{vi == 1 && (
					<ScrollView>
						<View style={styles.headerCont}>
							<Image
								source={require("../assets/images/start.png")}
								style={styles.profileImg}
							/>
							<View style={{ justifyContent: "space-around" }}>
								<Text style={styles.profilename}>
									Manoj Karthikeya
								</Text>
							</View>
							<TouchableOpacity style={styles.time}>
								<AntDesign
									name="close"
									size={24}
									color="grey"
								/>
							</TouchableOpacity>
						</View>
						<View style={styles.headerCont}>
							<Image
								source={require("../assets/images/stock.jpg")}
								style={styles.profileImg}
							/>
							<View style={{ justifyContent: "space-around" }}>
								<Text style={styles.profilename}>
									Gokul Prathin
								</Text>
							</View>
							<TouchableOpacity style={styles.time}>
								<AntDesign
									name="close"
									size={24}
									color="grey"
								/>
							</TouchableOpacity>
						</View>
					</ScrollView>
				)}
			</SafeAreaView>
		</React.Fragment>
	);
}

const styles = StyleSheet.create({
	headerCont: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white",
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	profileImg: {
		width: 35,
		height: 35,
		marginRight: 15,
		borderRadius: 35 / 2,
	},
	profilename: {
		fontFamily: "EBGaramond-Medium",
		fontSize: 20,
	},

	time: {
		fontFamily: "EBGaramond-Medium",
		color: "grey",
		fontSize: 16,
		marginLeft: "auto",
	},
});
