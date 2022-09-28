import React, { useState, useEffect } from "react"
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { Camera, CameraType } from "expo-camera"
import main from "../Styles"
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"

export default function AddPicture({ route }){
    const location = route.params
    const navigation = useNavigation()

    const [type, setType] = useState(CameraType.back)
    const [permission, requestPermission] = Camera.useCameraPermissions()
    const [camera, setCamera] = useState(null)
    const [image, setImage] = useState(null)
    const [loadingImage, setLoadingImage] = useState(null)
    

    useEffect(() => {
        (async() => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync()
            requestPermission(cameraStatus.status === "granted")
        })()
    }, [])

    useEffect(() => {
        console.log(image)
    }, [image])

    function toggleCameraType() {
        setType((current) => (
            current === CameraType.back ? CameraType.front : CameraType.back
        ));
    }

    const takePicture = async() => {
        if(camera){
            setLoadingImage(true)
            const data = await camera.takePictureAsync()
            setImage(data.uri)
        }
    }

    return(
        <View style={localStyle.container}>
            { image === null &&
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Camera autoFocus={false} ref={ref => setCamera(ref)} ratio={"1:1"} style={localStyle.camera} type={type} />
                    { loadingImage === null &&
                        <View style={localStyle.buttonContainer}>
                            <TouchableOpacity
                                style={localStyle.button}
                                onPress={toggleCameraType}>
                                <Ionicons name="camera-reverse-outline" size={40} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={localStyle.button}
                                onPress={takePicture}>
                                <Ionicons name="md-camera-outline" size={40} color="white" />
                            </TouchableOpacity>
                        </View>
                    }
                    { loadingImage &&
                        <View style={localStyle.buttonContainer}>
                            <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>Carregando...</Text>
                        </View>
                    }
                </View>
            }
            { image &&
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Image style={localStyle.image} source={{uri: image}} />
                    <View style={localStyle.confirmImage}>
                        <View style={localStyle.buttonContainer}>
                            <TouchableOpacity
                                style={main.contentButton}
                                onPress={() => { navigation.navigate('AddComments',{ location: location, image: image }) }}>
                                <Text style={main.contentButtonText}>CONTINUAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }
        </View>
    )
}

const localStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    camera: {
        width: '100%',
        height: Dimensions.get('screen').width + 50
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        position: "absolute",
        width: '100%',
        height: 100,
        bottom: 0,
        justifyContent: "space-around",
        alignItems: 'center'
    },
    confirmImage:{
        position: "absolute",
        width: '100%',
        height: 100,
        bottom: 0,
        justifyContent: "space-around",
        alignItems: 'center'
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginBottom: 25
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    image: {
        width: '100%',
        height: Dimensions.get('screen').width + 50
    }
})