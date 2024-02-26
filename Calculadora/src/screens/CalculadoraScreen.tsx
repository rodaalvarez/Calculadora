import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import BtnCalculadora from '../components/BtnCalculadora'

const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1500.00</Text>
      <Text style={styles.resultado}>1500.00</Text>

      <View style={styles.fila}>
        <BtnCalculadora text='C' color="#9B9B9B"/>
        <BtnCalculadora text='+/-' color="#9B9B9B"/>
        <BtnCalculadora text='%' color="#9B9B9B"/>
        <BtnCalculadora text='/' color="#FF9427"/>
        {/* #2D2D2D Y  FF9427*/}
      </View>
      <View style={styles.fila}>
        <BtnCalculadora text='7' color="#9B9B9B"/>
        <BtnCalculadora text='8' color="#9B9B9B"/>
        <BtnCalculadora text='9' color="#9B9B9B"/>
        <BtnCalculadora text='X' color="#FF9427"/>
        {/* #2D2D2D Y  FF9427*/}
      </View>
      <View style={styles.fila}>
        <BtnCalculadora text='4' color="#9B9B9B"/>
        <BtnCalculadora text='5' color="#9B9B9B"/>
        <BtnCalculadora text='6' color="#9B9B9B"/>
        <BtnCalculadora text='-' color="#FF9427"/>
        {/* #2D2D2D Y  FF9427*/}
      </View>
      <View style={styles.fila}>
        <BtnCalculadora text='1' color="#9B9B9B"/>
        <BtnCalculadora text='2' color="#9B9B9B"/>
        <BtnCalculadora text='3' color="#9B9B9B"/>
        <BtnCalculadora text='+' color="#FF9427"/>
        {/* #2D2D2D Y  FF9427*/}
      </View>
      <View style={styles.fila}>
        <BtnCalculadora text='0' color="#9B9B9B" ancho/>
        <BtnCalculadora text='.' color="#9B9B9B"/>
        <BtnCalculadora text='=' color="#FF9427"/>
        {/* #2D2D2D Y  FF9427*/}
      </View>
    </View>
  )
}

export default CalculadoraScreen
