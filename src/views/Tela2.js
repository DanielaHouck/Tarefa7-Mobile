import React from 'react'
import TextoCentral from '../componentes/TextoCentral'
import { Image, Text, StyleSheet, View } from "react-native";

export default function Tela2() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
            Sem as baleias, grande parte dos ciclos ecológicos do oceano estariam em colapso.
            </Text>

            <Image style={styles.imagem} source={require('../imagens/baleia3.jpg')} />

            <Text style={styles.texto}>
            - As grandes baleias, incluindo as que se alimentam por filtração e os cachalotes, ajudam a absorver o carbono. Elas armazenam toneladas de CO2 em seus corpos e agem como gigantes árvores aquáticas.
            </Text>

            <Text style={styles.texto}>
            - Após a morte, suas carcaças se depositam no assoalho oceânico, levando consigo o carbono, acumulado nas partes moles e ossos de seu corpo. A carne serve de alimento para diversas espécies e a carcaça pode ser utilizada como abrigo para outros animais, aumentando assim a produtividade local.
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
    imagem: {
      flex: 1,
      resizeMode: "cover",
      width: 350,
      maxHeight: 200,
      borderRadius: 5,
      marginTop: 20,
    },
  });