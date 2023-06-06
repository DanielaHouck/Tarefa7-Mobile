import React from 'react'
import TextoCentral from '../componentes/TextoCentral'
import { Image, Text, StyleSheet, View } from "react-native";

export default function Tela1() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
            QUANTO VALE UMA BALEIA? 
            </Text>
            <Image style={styles.imagem} source={require('../imagens/baleia1.jpg')} />
            <Text style={styles.texto2}>
            Os oceanos cobrem a maior parte da superfície terrestre: cerca de 71% do planeta Terra é feito de água, de acordo com a Nasa.
            </Text>
            <Image style={styles.imagem} source={require('../imagens/baleia2.jpg')} />
            <Text style={styles.texto2}>
            Entenda a importância dos "Sumidouros naturais de carbono" na preservação do planeta Terra.
            </Text>

        </View>
    );
}  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#000e41",
    },
    texto: {
      fontSize: 15,
      textAlign: "justify",
      margin: 20,
      fontWeight: 'bold',
      color: "#FFF",  
    },
    texto2: {
      fontSize: 14,
      textAlign: "justify",
      margin: 20,
      color: "#FFF",  
    },
    imagem: {
      flex: 1,
      resizeMode: "cover",
      width: 380,
      maxHeight: 200,
      marginTop: 10,
    },
  });