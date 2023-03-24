import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Page() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between'}}>
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
        <MaterialCommunityIcons name='dots-vertical' size={27} style={{paddingRight: 15}}/>
			</View>
		</SafeAreaView>
	);
}
