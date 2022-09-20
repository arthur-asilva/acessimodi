import { StyleSheet } from "react-native";

export const primaryColor = '#74b9ff'
export const secondaryColor = '#0984e3'

const main = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        margin: 0,
        backgroundColor: primaryColor
    },
    contentContainer: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: '5%',
        justifyContent: "space-around"
    },
    contentTitle: {
        fontSize: 26,
        fontWeight: "bold"
    },
    contentDescription: {
        fontSize: 20,
        color: '#a1a1a1'
    },
    contentButton:{
        width: '60%',
        backgroundColor: secondaryColor,
        padding: 12,
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 30,
    },
    contentButtonText:{
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default main