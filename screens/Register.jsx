import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>Register</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        justifyContent : 'center',
        alignItems : 'center'
    }
})