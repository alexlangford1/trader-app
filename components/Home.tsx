import React from "react"

import { StyleSheet, Button, Text, View } from "react-native"

import { createStackNavigator, createAppContainer } from "react-navigation"

const Home = (props) => {
    const { navigate } = props.navigation
    return (
        <View style={styles.container}>
            <Text>alex's profile</Text>
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
    }

})