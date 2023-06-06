import React from 'react'
import TextoCentral from '../componentes/TextoCentral'
import { Image, Text, StyleSheet, View } from "react-native";

export default function Tela3() {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem1} source={require('../imagens/baleia4.jpg')} />
            <Text style={styles.texto}>
            - Estudo publicado em 2010 estimou que oito tipos de baleias, incluindo baleias azuis, jubarte e minke, coletivamente transportam quase 30 mil toneladas de carbono para o mar profundo a cada ano.
            </Text>
            <Image style={styles.imagem2} source={require('../imagens/baleia5.jpg')} />
            <Text style={styles.texto}>
            - Se grandes populações de baleias recuperassem o tamanho que tinham antes da caça comercial, esse sumidouro de carbono aumentaria em 160 mil toneladas por ano.
            </Text>
            
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#060542",
    },
    texto: {
      fontSize: 14,
      textAlign: "justify",
      margin: 20,
      color: "#FFF",  
   
    },
    imagem1: {
      flex: 1,
      resizeMode: "cover",
      width: 350,
      maxHeight: 200,
      borderRadius: 5,
      marginTop: 20,
    },

    imagem2: {
        flex: 1,
        resizeMode: "cover",
        width: 350,
        maxHeight: 200,
        borderRadius: 5,
        marginTop: 20,
      },

  });