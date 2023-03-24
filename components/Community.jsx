import {
	View,
	Text,
	StyleSheet,
	Image,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import React from "react";

export default function Community({
	width,
	name = "My Community",
	members = 10,
}) {
	return (
		<TouchableOpacity>
			<View style={{ paddingHorizontal: 10, paddingTop : 10 }}>
				<ImageBackground
					source={require("../assets/images/stock.jpg")}
					style={{
						height: width * 0.5,
						width: width * 0.95,
						alignSelf: "center",
					}}
				>
					<View
						style={{
							flexDirection: "column",
							marginTop: "auto",
							backgroundColor: "white",
							opacity: 0.8,
							paddingVertical: 5,
							paddingLeft: 10,
						}}
					>
						<Text
							style={{
								fontFamily: "Gloock-Regular",
								fontSize: 22,
								paddingLeft: 5,
								paddingTop: 5,
							}}
						>
							{name}
						</Text>
						<Text
							style={{
								fontFamily: "EBGaramond-SemiBold",
								color: "grey",
								fontSize: 18,
							}}
						>
							{members} members
						</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	);
}
