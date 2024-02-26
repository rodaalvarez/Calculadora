import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


interface IBtnProps {
    text: string;
    color: string;
}

const BtnCalculadora = ({ text, color } : IBtnProps) => {
  return (
    <View style={{
            ...styles.button,
            backgroundColor: color,
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