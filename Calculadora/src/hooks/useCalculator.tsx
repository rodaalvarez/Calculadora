import { useRef, useState } from "react";

enum Operators {
    addition, substraction, multiplication, division
}

export const useCalculator = () =>{
    const [ numero, setNumero ] = useState('0');
    const [ numeroAnterior, setNumeroAnterior ] = useState('0');
    const lastOperation = useRef<Operators>();

    const limpiar  = () =>{
        setNumero('0');
        setNumeroAnterior('0')
    }

    const buildNumber = (textNumber : string) =>{
        if(numero.includes('.') && textNumber === '.') return;

        if(numero.startsWith('0') || numero.startsWith('-0')){
            if( textNumber === '.'){
                setNumero( numero + textNumber);
            }else if( textNumber === '0' && numero.includes('.')){
                setNumero( numero + textNumber);
            }else if(textNumber !== '0' && !numero.includes('.')){
                setNumero(textNumber);
            }else if( textNumber === '0' && !numero.includes('.')){
                setNumero(numero)
            }else{
                setNumero(numero + textNumber);
            }
        }else{
            setNumero(numero + textNumber);
        }

    }

    const positiveNegative = () => {
        if(numero.includes('-')){
            setNumero(numero.replace('-', ''))
        }else{
            setNumero( '-' + numero)
        }
    }

    const deleteNumber = () => {
        let tempNumber = numero.startsWith('-') ? numero.substring(1) : numero;
    
        if (tempNumber.length > 1) {
            setNumero((numero.startsWith('-') ? '-' : '') + tempNumber.slice(0, -1));
        } else {
            setNumero('0');
        }
    }
    
    const changeNum = () => {
        if(numero.endsWith('.')){
            setNumeroAnterior( numero.slice(0, -1) );
        }else {
            setNumeroAnterior( numero );
        }
        setNumero('0');
    }
    
    const btnDivision = () =>{
        changeNum();
        lastOperation.current = Operators.division;
    }
    const btnMultiplication = () =>{
        changeNum();
        lastOperation.current = Operators.multiplication;
    }
    const btnSubtraction = () =>{
        changeNum();
        lastOperation.current = Operators.substraction;
    }
    const btnAddition = () =>{
        changeNum();
        lastOperation.current = Operators.addition;
    }
    
    const calculate = () =>{
        const numberOne = Number(numero);
        const numberTwo = Number( numeroAnterior );
        switch(lastOperation.current){
            case Operators.addition:
                setNumero(`${ numberOne + numberTwo}`)
                break;
            case Operators.substraction:
                setNumero(`${ numberTwo - numberOne}`)
                break;

            case Operators.division:
                setNumero(`${ numberTwo / numberOne}`)
                break;

            case Operators.multiplication:
                setNumero(`${ numberOne * numberTwo}`)
                break;
        }
    }
    return{
        numeroAnterior,
        numero,
        limpiar,
        positiveNegative,
        deleteNumber,
        btnDivision,
        buildNumber,
        btnMultiplication,
        btnSubtraction,
        calculate,
        btnAddition
    }
}
