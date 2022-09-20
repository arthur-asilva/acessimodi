import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable"
import main from "../Styles"

export default function Welcome() {
  return (
    <View style={main.container}>
        <View style={style.logoContainer}>
          <Animatable.Image animation="flipInY" source={require("../../../assets/welcome-logo.png")} resizeMode="contain" style={{width: '100%'}} />
        </View>
        <Animatable.View animation="fadeInUp" style={main.contentContainer}>
          <Text style={main.contentTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
          <Text style={main.contentDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </Text>
          <TouchableOpacity style={main.contentButton}>
            <Text style={main.contentButtonText}>ACESSAR</Text>
          </TouchableOpacity>
        </Animatable.View>
    </View>
  );
}

const style = StyleSheet.create({
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})