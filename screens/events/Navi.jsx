import React, { useState } from 'react';
import { Text, View , TouchableOpacity,TextInput,StyleSheet} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Navi(){

    const [selectedValue, setSelectedValue] = useState('option1');    
    return(
        <SafeAreaView>
        <View>
				<Text style={styles.label}>Name</Text>
				<TextInput style={styles.name}></TextInput>
			</View>
			<View style={{ marginTop: 10 }}>
				<Text style={styles.label}>Description</Text>
				<TextInput multiline numberOfLines={4} style={styles.name} />
			</View>
			<View style={{ paddingTop: 10 }}>
            {/* <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="All" value="option1" />
        <Picker.Item label="Students" value="option2" />
        <Picker.Item label="Working Professnals" value="option3" />
      </Picker>
    </View> */}
				<Text style={styles.label}>Picture</Text>
				<TouchableOpacity
					style={{
						marginTop: "auto",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
					// onPress={pickImage}
				>
					<MaterialIcons name="upload-file" size={20} color="black" />
					<Text
						style={{
							fontSize: 20,
							fontFamily: "EBGaramond-SemiBold",
							paddingLeft: 5,
							paddingVertical: 10,
						}}
					>
						Select from gallery
					</Text>
				</TouchableOpacity>
			</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
	name: {
		fontSize: 19,
		paddingLeft: 2,
		borderBottomWidth: 0.5,
		backgroundColor: "transparent",
		marginHorizontal: 25,
		fontFamily: "Gloock-Regular",
		marginVertical: 10,
	},
	label: {
		fontFamily: "EBGaramond-SemiBold",
		fontSize: 18,
		paddingLeft: 20,
		color: "grey",
	},
});