import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import BtnCalculadora from '../components/BtnCalculadora'
import { useCalculator } from '../hooks/useCalculator'

const CalculadoraScreen = () => {
    const { numero, numeroAnterior, limpiar, positiveNegative, deleteNumber, buildNumber, btnSubtraction, btnDivision, btnMultiplication, btnAddition, calculate } = useCalculator();

  return (
    <View style={styles.calculadoraContainer}>
        {
            numeroAnterior !== '0' &&
            (<Text style={styles.resultadoPequeno}>
                {numeroAnterior}
            </Text>)
        }      
      <Text 
        style={styles.resultado}
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >
        {numero}        
      </Text>

      <View style={styles.fila}>
        <BtnCalculadora text='C' color="#9B9B9B" action={limpiar}/>
        <BtnCalculadora text='+/-' color="#9B9B9B" action={positiveNegative}/>
        <BtnCalculadora text='DEL' color="#9B9B9B" action={deleteNumber}/>
        <BtnCalculadora text='/' color="#FF9427" action={btnDivision}/>
        {/* #2D2D2D Y  FF9427*/}
      </View>
      <View style={styles.fila}>
        <BtnCalculadora text='7' color="#9B9B9B" action={buildNumber}/>
        <BtnCalculadora text='8' color="#9B9B9B" action={buildNumber}/>
        <BtnCalculadora text='9' color="#9B9B9B" action={buildNumber}/>
        <BtnCalculadora text='X' color="#FF9427" action={btnMultiplication}/>
        {/* #2D2D2D Y  FF9427*/}
      </View>
      <View style={styles.fila}>
        <BtnCalculadora text='4' color="#9B9B9B" action={buildNumber}/>
        <BtnCalculadora text='5' color="#9B9B9B" action={buildNumber}/>
        <BtnCalculadora text='6' color="#9B9B9B" action={buildNumber}/>
        <BtnCalculadora text='-' color="#FF9427" action={btnSubtraction}/>
        {/* #2D2D2D Y  FF9427*/}
      </View>
      <View style={styles.fila}>
        <BtnCalculadora text='1' color="#9B9B9B" action={buildNumber}/>
        <BtnCalculadora text='2' color="#9B9B9B" action={buildNumber}/>
        <BtnCalculadora text='3' color="#9B9B9B" action={buildNumber}/>
        <BtnCalculadora text='+' color="#FF9427" action={btnAddition}/>
        {/* #2D2D2D Y  FF9427*/}
      </View>
      <View style={styles.fila}>
        <BtnCalculadora text='0' color="#9B9B9B" ancho action={buildNumber}/>
        <BtnCalculadora text='.' color="#9B9B9B" action={buildNumber}/>
        <BtnCalculadora text='=' color="#FF9427" action={calculate}/>
        {/* #2D2D2D Y  FF9427*/}
      </View>
    </View>
  )
}

export default CalculadoraScreen
