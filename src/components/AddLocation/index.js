import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid, Platform } from "react-native"
import main from "../Styles"
import * as Animatable from "react-native-animatable"
import { useNavigation } from "@react-navigation/native"
import Geolocation from "@react-native-community/geolocation"
import MapView, { Marker } from 'react-native-maps'

export default function AddLocation(){

    const navigation = useNavigation()

    const [location, setLocation] = useState(null);

    const callLocation = () => {
      if(Platform.OS === 'ios') { getLocation() } 
      else {
        const requestLocationPermission = async () => {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Permissão de Acesso à localização",
              message: "Este aplicativo precisa acessar sua localização.", 
              buttonNeutral: "Pergunte depois", 
              buttonNegative: "Cancelar", buttonPositive: "OK"
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getLocation()
          } 
          else { alert('Permissão de Localização negada') }
        }
        requestLocationPermission();
      }
    }

    const getLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => { setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude}) },
        (error) => alert(error.message),
        { enableHighAccuracy: true }
      );
    }

    useEffect(() => {
      callLocation()
    }, [])

    useEffect(() => {
      console.log(location)
    }, [location])

    return(
        <View style={main.container}>
            <Animatable.Text animation="fadeInLeft" style={main.containerHeader}>
            {'\t\t'}Caso não seja sua posição exata, arraste o marcador vermelho no mapa para corrigir.
            </Animatable.Text>
            <Animatable.View animation="fadeInUp" delay={600} style={main.contentContainer}>
                
                <View>
                  { location && (
                    <MapView style={localStyle.map}
                      initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.00005,
                        longitudeDelta: 0.0005}}>
                      <Marker coordinate={location} draggable onDragEnd={(e) => {
                          setLocation(e.nativeEvent.coordinate)
                        }}></Marker>
                    </MapView>
                  )} 
                </View>

                <TouchableOpacity style={main.contentButton} onPress={() => { navigation.navigate('AddPicture', location) }}>
                    <Text style={main.contentButtonText}>CONFIRMAR POSIÇÃO</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const localStyle = StyleSheet.create({
  map: {
    width: '100%',
    height: '90%'
  }
})