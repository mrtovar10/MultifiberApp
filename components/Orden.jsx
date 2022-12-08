import React from "react";
import {Text, View, StyleSheet, Image } from "react-native";
import StyledText from "./Textos";

const orden = (props)=> {
    return (
        <View style={styles.contenedor}>
            <View style={styles.head}>
                <StyledText nOrden>{props.nroOrden}</StyledText>
                <StyledText fecha>{props.fecha}</StyledText>
                <StyledText hora>{props.hora}</StyledText>
            </View>
            <View style={styles.body}>
                <StyledText id>{`Id del cliente - ${props.idCliente}`}</StyledText>
                <View style={{width:175}}>
                    <StyledText address>{props.direccion}</StyledText>
                </View>
            </View>
            <View style={styles.foot}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image style={styles.punto} source={
                        props.tipoServicio === 'Visita Técnica con servicio'?
                        require('../assets/PAmarillo.png'):
                        require('../assets/PNaranja.png')
                        }/>
                </View>
                <StyledText servicio>{props.tipoServicio}</StyledText>
            </View>
        </View>
    )
}

export default orden

const styles = StyleSheet.create(
    {
        contenedor: {
            padding:20,
            paddingBottom:15,
            paddingTop:15,
            backgroundColor:'#FFFFFF',
            marginLeft:34,
            marginRight:34,
            marginTop:14,
            borderRadius:4,
            overflow:'hidden'
        },
        conServicioPunto:{
            color:'#F5C43C',
            fontWeight:'normal',
            fontStyle:'lato',
            fontSize:10,
        },
        head:{
            flexDirection:'row',
            justifyContent:'flex-end',
        },
        body:{
            marginTop:15,
            marginBottom:15,
        },
        foot:{
            flexDirection:'row',
        },
        punto:{
            height:10,
            width:10,
        }
    }
)