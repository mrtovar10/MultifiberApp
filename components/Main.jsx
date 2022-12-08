import React from "react";
import { View, Text, StatusBar } from "react-native";
import Constants from "expo-constants";
import ListaDeOrdenes from "./ListaDeOrdenes";
import AbiertaCerrada from "./AbiertasCerradas";
import ListaFechas from "./ListaFechas";
import TecnicoHeader from "./TecnicoHeader";


const Main = () => {
    StatusBar.setBackgroundColor("rgba(0, 75, 194, 0.82)",false)
    StatusBar.setBarStyle('light-content')
    return (
        <View style={estilos}>
            <TecnicoHeader/>
            <ListaFechas/>
            <AbiertaCerrada/>
            <ListaDeOrdenes/>
        </View>
    )
}

const estilos = {
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'#F3F3F3'
}

export default Main