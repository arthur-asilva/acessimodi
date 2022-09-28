import React from "react"
import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import main from "../Styles"

export default function AddComments({ route }){
    const params = route.params

    console.log(params)

    return(
        <View>
            <Text>Add comments</Text>
        </View>
    )
}