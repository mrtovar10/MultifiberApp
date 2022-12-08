import React from "react";
import {StyleSheet, Text} from "react-native";


const styles = StyleSheet.create(
    {
        default: {
            color:'red',
            fontWeight:'normal',
            fontStyle:'lato'
        },
        nOrden:{
            color:'#172B4D',
            fontWeight:'bold',
            fontStyle:'lato',
            marginRight:'auto',
            fontSize:15
        },
        fecha:{
            color:'#2B80FF',
            fontWeight:'300',
            fontStyle:'lato',
            fontSize:14,
        },
        hora:{    // hora
            color:'#353535',
            fontWeight:'300',
            fontStyle:'lato',
            paddingLeft:9,
            fontSize:14,
        },
        address:{
            color:'#353535',
            fontWeight:'300',
            fontStyle:'lato',
            fontSize:12,
            lineHeight:22
        },
        listaH:{
            color:'#353535',
            fontWeight:'500',
            fontStyle:'lato',
            fontSize:14,
        },
        listahOp:{
            color:'#353535',
            fontWeight:'500',
            fontStyle:'lato',
            fontSize:14,
            opacity:0.52,
        },
        listaHA:{
            color:'#FFFFFF',
            fontWeight:'500',
            fontStyle:'lato',
            fontSize:14,
        },
        listahOpA:{
            color:'#FFFFFF',
            fontWeight:'500',
            fontStyle:'lato',
            fontSize:14,
            opacity:0.52,
        },
        id:{
            color:'#00000099',
            fontWeight:'500',
            fontStyle:'lato',
            fontSize:12,
            paddingBottom:3
        },
        servicio:{
            color:'#172B4D',
            fontWeight:'500',
            fontStyle:'lato',
            paddingLeft:9,
            fontSize:13,
        },
        abiertasCerradas:{
            color:'#2B80FF',
            fontWeight:'500',
            fontStyle:'lato',
            fontSize:15,
        },
        abiertasCerradasOp:{
            color:'#2B80FF',
            fontWeight:'500',
            fontStyle:'lato',
            fontSize:15,
            opacity:0.6,
        }
    }
)

export default function StyledText ({children,nOrden,fecha,hora,
    id,address,servicio,abiertasCerradas,abiertasCerradasOp,
    listaH,listahOp,listaHA, listahOpA,
    style,...restOfProps}) {
    const array = [
        styles.default,
        nOrden && styles.nOrden,
        fecha && styles.fecha,
        hora && styles.hora,
        id && styles.id,
        address && styles.address,
        servicio && styles.servicio,
        abiertasCerradas && styles.abiertasCerradas,
        abiertasCerradasOp && styles.abiertasCerradasOp,
        listaH && styles.listaH,
        listahOp && styles.listahOp,
        listaHA && styles.listaHA,
        listahOpA && styles.listahOpA,
        style
    ]
    return (
        <Text style={array} {...restOfProps}>
            {children}
        </Text>
    )
}