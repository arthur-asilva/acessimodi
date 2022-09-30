import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard } from "react-native";
import * as Animatable from "react-native-animatable"
import main, { primaryColor, secondaryColor } from "../Styles"
import MapView, { Marker } from 'react-native-maps'
// import { useNavigation } from "@react-navigation/native"

export default function AddComments({ route }){
    const location = route.params.location
    const image = String(route.params.image)
    const [keyboard, setKeyboard] = useState(false)

    useEffect(() => {
        const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboard(true)
        })
        const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboard(false)
        })
        return () => {
            keyboardDidShow.remove()
            keyboardDidHide.remove()
        }
    }, [])

    return(
        <View behavior="padding" style={main.container}>
            <Text></Text>
            <Animatable.View animation="fadeInUp" delay={600} style={main.contentContainer}>
                { keyboard === false &&
                    <View>
                        <Animatable.Image style={style.image} animation="flipInY" source={{uri: `data:image/jpeg;base64,${image}`}} />
                        <MapView style={style.map}
                            initialRegion={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                                latitudeDelta: 0.00005,
                                longitudeDelta: 0.0005}}>
                            <Marker coordinate={location}></Marker>
                        </MapView>
                    </View>
                }
                <View>
                    <Text style={{fontSize: 20}}>Adicionar observação ou ponto de referência</Text>
                    <TextInput autoFocus={false} multiline={true} style={style.contentInput}></TextInput>
                </View>
                <TouchableOpacity style={main.contentButton} onPress={ () => navigation.navigate('Welcome')}>
                    <Text style={main.contentButtonText}>ENVIAR</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        position: "absolute",
        width: 100,
        height: 100,
        zIndex: 2,
        top: -10,
        right: 10,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: secondaryColor
    },
    contentInput: {
        borderBottomWidth: 2,
        borderBottomColor: primaryColor,
        fontSize: 20,
        height: 200
    },
    contentHeader: {
        fontSize: 24
    },
    map: {
        width: '100%',
        height: 200,
        marginTop: -20
    }
})