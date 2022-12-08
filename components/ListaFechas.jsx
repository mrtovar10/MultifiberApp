import React, { useState, useEffect } from "react";
import {View, StyleSheet, FlatList, TouchableWithoutFeedback} from "react-native";
import StyledText from "./Textos";
import fechas from "./rangoFechas";

const ListaFechas = () => {

    function stringF(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    let [active, setActive] = useState(stringF(new Date()))

    function fechaString (date){
        let fecha = new Date(date)
        if(fecha.getDay() === 1) return 'Lun'
        if(fecha.getDay() === 2) return 'Mar'
        if(fecha.getDay() === 3) return 'Mie'
        if(fecha.getDay() === 4) return 'Jue'
        if(fecha.getDay() === 5) return 'Vie'
        if(fecha.getDay() === 6) return 'Sab'
        if(fecha.getDay() === 0) return 'Dom'
    }

    function fechaDia (date){
        let fecha = new Date(date)
        return fecha.getDate()
    }

    return (
        <FlatList
        horizontal = {true}
        data = {fechas}
        // ItemSeparatorComponent = {()=> <Text></Text>}
        renderItem={({item}) => (
            <View style={styles.contendorExterior}>
                <TouchableWithoutFeedback onPress={()=>setActive(stringF(new Date(item)))}>
                    {stringF(new Date(item)) === active?
                        <View style={stringF(new Date(item)) === active?
                            styles.contendorActivo:styles.contendorInterior}>
                            {fechaString(new Date(item)) === 'Dom' || 
                            fechaString(new Date(item)) === 'Sab'?
                            <StyledText listahOpA>{fechaDia(item)}</StyledText>:
                            <StyledText listaHA>{fechaDia(item)}</StyledText>}
                            {fechaString(new Date(item)) === 'Dom' ||
                            fechaString(new Date(item)) === 'Sab'?
                            <StyledText listahOpA>{fechaString(item)}</StyledText>:
                            <StyledText listaHA>{fechaString(item)}</StyledText>}
                        </View>:
                        <View style={stringF(new Date(item)) === active?
                            styles.contendorActivo:styles.contendorInterior}>
                            {fechaString(new Date(item)) === 'Dom' || 
                            fechaString(new Date(item)) === 'Sab'?
                            <StyledText listahOp>{fechaDia(item)}</StyledText>:
                            <StyledText listaH>{fechaDia(item)}</StyledText>}
                            {fechaString(new Date(item)) === 'Dom' ||
                            fechaString(new Date(item)) === 'Sab'?
                            <StyledText listahOp>{fechaString(item)}</StyledText>:
                            <StyledText listaH>{fechaString(item)}</StyledText>}
                        </View>
                    }
                    {/* <View style={stringF(new Date(item)) === active?
                        styles.contendorActivo:styles.contendorInterior}>
                        {fechaString(new Date(item)) === 'Dom' || 
                        fechaString(new Date(item)) === 'Sab'?
                        <StyledText listahOp>{fechaDia(item)}</StyledText>:
                        <StyledText listaH>{fechaDia(item)}</StyledText>}
                        {fechaString(new Date(item)) === 'Dom' ||
                        fechaString(new Date(item)) === 'Sab'?
                        <StyledText listahOp>{fechaString(item)}</StyledText>:
                        <StyledText listaH>{fechaString(item)}</StyledText>}
                    </View> */}
                </TouchableWithoutFeedback>
            </View>
        )}
        contentContainerStyle={{alignItems:'center', paddingTop:40, paddingBottom:20}}
      />
    )
}

const styles = StyleSheet.create({
    contendorExterior: {
        justifyContent:'center',
        alignItems:'center',
        marginLeft:4,
        marginRight:4,
        height:49,
    },
    contendorInterior: {
        alignItems:'center',
        justifyContent:'center',
        width:43,
        height:49,
        borderRadius:4,
        overflow:'hidden'
    },
    contendorActivo: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0057DA',
        width:43,
        height:49,
        borderRadius:4,
        overflow:'hidden'
    },
})

export default ListaFechas;