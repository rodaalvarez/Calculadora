import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


interface IBtnProps {
    text?: string;
    color?: string;
    ancho?: boolean;
}

const BtnCalculadora = ({ text, color, ancho = false} : IBtnProps) => {
  return (
    <TouchableOpacity>
        <View style={{
                ...styles.button,
                backgroundColor: color,
                width: ancho ? 180 : 80
            }}
        >
            <Text style={{
                    ...styles.btnText,
                    color: color === '#9B9B9B' ? 'black' : 'white'
                }}
            >
                {text}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default BtnCalculadora

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    btnText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    }
});