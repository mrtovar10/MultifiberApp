import React, { useState } from "react";
import StyledText from "./Textos";
import {StyleSheet, Image, View, TouchableWithoutFeedback} from "react-native"


const AbiertaCerrada = () => {
    let [abiertas, setAbiertas] = useState(true)

    function onPressButton () {
        setAbiertas(!abiertas)
    }
    return (
        <View style={style.contenedor}>
        <TouchableWithoutFeedback onPress={onPressButton}>
            <View style={{alignItems:'center', paddingRight:15}}>
                {abiertas?<StyledText abiertasCerradas>Abiertas</StyledText>:
                <StyledText abiertasCerradasOp>Abiertas</StyledText>}
                {abiertas? <Image style={style.barra}
                 source={require('../assets/barraAzul.png')}/>:null}
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onPressButton}>
            <View style={{alignItems:'center'}}>
                {!abiertas?<StyledText abiertasCerradas>Cerradas</StyledText>:
                <StyledText abiertasCerradasOp>Cerradas</StyledText>}
                {!abiertas? <Image style={style.barra}
                source={require('../assets/barraAzul.png')}/>:null}
            </View>
        </TouchableWithoutFeedback>
        </View>
    )
}

const style = StyleSheet.create({
    contenedor: {
        flexDirection:'row',
        paddingBottom:15,
        paddingTop:15,
        backgroundColor:'#F3F3F3',
        marginLeft:34,
        marginRight:34,
        borderRadius:4,
        overflow:'hidden'
    },
    barra:{
        width:30,
        height:3,
    }
})

export default AbiertaCerrada