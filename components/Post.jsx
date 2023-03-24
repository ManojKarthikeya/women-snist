import {
	View,
	Text,
	StyleSheet,
	Image,
	useWindowDimensions,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo, MaterialCommunityIcons, EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Post() {
	const { width } = useWindowDimensions();
	return (
		<View style={styles.container}>
			<View style={styles.headerCont}>
				<Image
					source={require("../assets/images/start.png")}
					style={styles.profileImg}
				/>
				<View style={{ justifyContent: "space-around" }}>
					<Text style={styles.profilename}>Manoj Karthikeya</Text>
					<Text style={styles.time}>10 mintues ago</Text>
				</View>
			</View>
			<Image
				source={require("../assets/images/start.png")}
				style={{
					...styles.postContent,
					width: width * 0.9,
					height: width * 0.9,
				}}
			/>
			<View style={styles.btnhgold}>
				<TouchableOpacity>
					<EvilIcons name="like" size={40} style={styles.bthn} />
				</TouchableOpacity>
				<TouchableOpacity>
					<EvilIcons name="comment" size={40} style={styles.bthn} />
				</TouchableOpacity>
				<TouchableOpacity>
					<EvilIcons
						name="share-apple"
						size={40}
						style={styles.bthn}
					/>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					paddingVertical: 8,
					paddingLeft: 10,
				}}
			>
				<Text
					style={{ fontFamily: "EBGaramond-SemiBold", fontSize: 16 }}
				>
					181 Likes
				</Text>
				<Entypo name="dot-single" size={24} color="black" />
				<Text
					style={{ fontFamily: "EBGaramond-SemiBold", fontSize: 16 }}
				>
					14 Comments
				</Text>
			</View>
			<Text style={{ ...styles.time, textAlign: "justify" }}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Pellentesque aliquet arcu in mi rhoncus, sit amet luctus ex
				pellentesque. Duis ipsum orci, fringilla a urna non, feugiat
				congue diam.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10 ,
		padding: 15,
		backgroundColor: 'white'
	},
	headerCont: {
		flexDirection: "row",
		alignItems: "center",
	},
	profileImg: {
		width: 60,
		height: 60,
		marginRight: 18,
	},
	profilename: {
		fontFamily: "EBGaramond-SemiBold",
		fontSize: 22,
	},
	time: {
		fontFamily: "EBGaramond-Medium",
		color: "grey",
		fontSize: 16,
	},

	postContent: {
		alignSelf: "center",
		marginVertical: 15,
	},
	btnhgold: {
		flexDirection: "row",
		alignItems: "center",
	},
	bthn: {
		marginHorizontal: 4,
	},
});
