import React from "react";
import { FlatList, Text, View } from "react-native";
import data from "./data.js"
import orden from "./Orden.jsx";

const ListaDeOrdenes = () => {
  return (
    <FlatList
      data = {data}
      // ItemSeparatorComponent = {()=> <Text></Text>}
      renderItem={({item}) => (
        item?
        orden(item):
        <Text></Text>
      )}
      style={{backgroundColor:'#F3F3F3'}}
    />
  );
}

export default ListaDeOrdenes;