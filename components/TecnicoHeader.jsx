import React from "react";
import {View, Image, Text, StyleSheet, TextInput} from 'react-native';


const TecnicoHeader = () => {

    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorMenu}>
                <Image style={styles.imgtecnic} source={require('../assets/tecnico.png')}/>
                <Image style={styles.imgMenu} source={require('../assets/menu.png')}/>
            </View>
            <View style={styles.contenedorImgRedonda}>
                <View style={styles.contenedorTexto}>
                    <Text style={styles.textoUno}>Bienvenido a Brújula</Text>
                    <Text style={styles.textoDos}>Visualiza tus ordenes de servicio del día</Text>
                </View>
                <Image style={styles.imgTec} source={require('../assets/TecnicoFoto.jpg')}/>
            </View>
            <View style={styles.contenedorSb}>
                <Image style={styles.imgLupa} source={require('../assets/lupa.png')}/>
                <TextInput style={styles.searchBar} placeholder="Realizar busqueda"/>
            </View>
        </View>
    )
}

export default TecnicoHeader;

const styles = StyleSheet.create(
    {
        contenedorMenu:{
            paddingTop:15,
            flexDirection:'row',
            justifyContent:'flex-end',
            alignItems:'center',
        },
        contenedor: {
            backgroundColor:'rgba(0, 75, 194, 0.82)',
        },
        contenedorSb: {
            backgroundColor:'#FFFFFF',
            flexDirection:'row',
            alignItems:'center',
            margin:20,
            marginLeft:33,
            marginRight:33,
            borderRadius:4,
            overflow:'hidden'
        },
        searchBar:{
            flex:1
        },
        contenedorTexto: {
            width:200,
        },
        contenedorImgRedonda:{
            paddingTop:15,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingLeft:33,
        },
        imgtecnic:{
            marginRight:10,
        },
        imgMenu:{
            width:18,
            height:12,
            marginRight:30,
        },
        imgTec:{
            width:67,
            height:67,
            marginRight:50,
            borderRadius:67/2,
            
        },
        imgLupa:{
            width:15,
            height:15,
            marginRight:15,
            marginLeft:15,
        },
        textoUno:{
            color:'#F4F6F8',
            fontWeight:'500',
            fontStyle:'lato',
            fontSize:16,
            paddingBottom:7,
        },
        textoDos:{
            color:'#F4F6F8',
            fontWeight:'500',
            fontStyle:'lato',
            fontSize:18,
            lineHeight:35,
        },
    }
)