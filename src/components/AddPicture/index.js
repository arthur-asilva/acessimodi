import React from "react"
import { Text } from "react-native"
import { View } from "react-native-animatable"

export default function AddPicture({ route }){
    const location = route.params
    return(
        <View>
            <Text>{location.latitude}</Text>
            <Text>{location.longitude}</Text>
        </View>
    )
}