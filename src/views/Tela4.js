import React from 'react'
import TextoCentral from '../componentes/TextoCentral'
import { Image, Text, StyleSheet, View } from "react-native";

export default function Tela4() {
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={require('../imagens/baleia6.jpg')} />
            <Text style={styles.texto}>
            Enquanto estão vivas, as baleias podem fazer ainda mais, graças ao seu excremento. As grandes baleias se alimentam de pequenos organismos marinhos como plâncton e krill nas profundezas do oceano antes de emergir para respirar, e fazer suas necessidades - que liberam uma enorme quantidade de nutrientes, incluindo nitrogênio, fósforo e ferro, na água. 
            </Text>
            <Image style={styles.imagem2} source={require('../imagens/Plancton.jpg')} />
            <Text style={styles.texto}>
            Os chamados poo-namis estimulam o crescimento do fitoplâncton - algas marinhas que retiram carbono do ar através da fotossíntese.
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
      maxHeight: 180,
      borderRadius: 5,
      marginTop: 20,
    },
    imagem2: {
        flex: 1,
        resizeMode: "cover",
        width: 350,
        maxHeight: 120,
        borderRadius: 5,
        marginTop: 20,
      },

  });