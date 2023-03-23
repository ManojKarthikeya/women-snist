import {
	View,
	Text,
	StyleSheet,
	TextInput,
	useWindowDimensions,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function Password() {
	const { width, height } = useWindowDimensions();
	const navigate = useNavigation()
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [show, setShow] = useState(false);
	return (
		<SafeAreaView
			style={{ ...styles.container, width: width, maxWidth: width }}
		>
			<Text style={styles.subtext}>This'll be our little secret.</Text>
			<View>
				<TextInput
					style={{ ...styles.input, marginTop: 50 }}
					placeholder="Password"
					textContentType="newPassword"
					secureTextEntry
					value={password}
					onChangeText={(text) => setPassword(text)}
					maxLength={16}
				/>
				<TextInput
					style={styles.input}
					placeholder="Confirm Password"
					textContentType="newPassword"
					secureTextEntry
					value={confirm}
					onChangeText={(text) => setConfirm(text)}
					onFocus={() => {
						setShow(true);
					}}
				/>
			</View>
			<View style={styles.conditions}>
				{password.length > 7 ? (
					<View style={styles.checkline}>
						<MaterialIcons name="check" color="grey" size={22} />
						<Text style={styles.condition}>
							Contains {password.length} characters
						</Text>
					</View>
				) : (
					<View style={styles.checkline}>
						<MaterialIcons name="error" color="grey" size={22} />
						<Text style={styles.condition}>
							Should contain atleast 8 characters
						</Text>
					</View>
				)}
				{password !== password.toLowerCase() ? (
					<View style={styles.checkline}>
						<MaterialIcons name="check" color="grey" size={22} />
						<Text style={styles.condition}>
							Contains an uppercase letter
						</Text>
					</View>
				) : (
					<View style={styles.checkline}>
						<MaterialIcons name="error" color="grey" size={22} />
						<Text style={styles.condition}>
							Should contain an uppercase letter
						</Text>
					</View>
				)}
				{password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) ? (
					<View style={styles.checkline}>
						<MaterialIcons name="check" color="grey" size={22} />
						<Text style={styles.condition}>
							Contains a special character
						</Text>
					</View>
				) : (
					<View style={styles.checkline}>
						<MaterialIcons name="error" color="grey" size={22} />
						<Text style={styles.condition}>
							Should contain a special character
						</Text>
					</View>
				)}

				{show ? (
					password === confirm ? (
						<View style={styles.checkline}>
							<MaterialIcons
								name="check"
								color="grey"
								size={22}
							/>
							<Text style={styles.condition}>
								Matches with confirmation
							</Text>
						</View>
					) : (
						<View style={styles.checkline}>
							<MaterialIcons
								name="error"
								color="grey"
								size={22}
							/>
							<Text style={styles.condition}>
								Does not match with confirmation
							</Text>
						</View>
					)
				) : null}
			</View>
			<View style={{ flexDirection: "row", marginTop : 'auto', justifyContent: 'space-between', paddingLeft : 30 }}>
				<TouchableOpacity style={{ flexDirection: "row", alignItems: 'center'}} onPress={()=>{navigate.goBack()}}>
					<MaterialIcons name="arrow-back-ios" size={25} color='grey' />
					<Text style={{...styles.next, color:'grey'}}>Back</Text>
				</TouchableOpacity>
				{show &&
				password.length > 7 &&
				password === confirm &&
				password.toLowerCase() !== password &&
				password.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) ? (
					<TouchableOpacity style={styles.touch} onPress={()=>{navigate.navigate('uploadphoto')}}>
						<Text style={styles.next}>Next</Text>
						<MaterialIcons name="navigate-next" size={25} />
					</TouchableOpacity>
				) : (
					<View
						style={{
							...styles.touch,
							opacity: 0.3,
						}}
					>
						<Text
							style={{
								...styles.next,
								color: "grey",
								textAlign: "right",
							}}
						>
							Next
						</Text>
						<MaterialIcons
							name="navigate-next"
							size={25}
							color="grey"
						/>
					</View>
				)}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	next: {
		fontFamily: "Gloock-Regular",
		fontSize: 36,
	},

	input: {
		fontFamily: "EBGaramond-SemiBold",
		fontSize: 20,
		margin: 15,
		paddingLeft: 2,
		borderBottomWidth: 0.5,
		width: "90%",
	},

	namecont: {
		flexDirection: "row",
	},

	checkline: {
		flexDirection: "row",
		alignItems: "center",
	},

	subtext: {
		fontFamily: "EBGaramond-Medium",
		fontSize: 22,
		color: "grey",
		paddingLeft: 18,
		width: "95%",
	},

	condition: {
		fontFamily: "EBGaramond-Medium",
		fontSize: 20,
		color: "grey",
		paddingLeft: 5,
	},

	conditions: {
		paddingLeft: 30,
		paddingTop: 10,
	},

	touch: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: "auto",
		padding: 30,
	},
});
