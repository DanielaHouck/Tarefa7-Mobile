import React from 'react'
import TextoCentral from '../componentes/TextoCentral'
import { Image, Text, StyleSheet, View } from "react-native";

export default function Tela5() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
            No total, foi estimado que cada um desses gigantes gentis vale cerca de 2 milhões de dólares ao longo de sua vida. E a população global de grandes baleias? Possivelmente, um ativo de um trilhão de dólares para a humanidade.
            </Text>
            <Image style={styles.imagem} source={require('../imagens/baleia7.jpg')} />
            <Text style={styles.texto}>
            No entanto, são apenas alguns por cento dos 40 bilhões de toneladas de dióxido de carbono que a humanidade lança no ar a cada ano. E mesmo com esforços agressivos de conservação global, pode levar décadas até que as grandes baleias retornem ao número anterior às caças, supondo que isso seja possível, considerando o quanto degradamos os oceanos.
            </Text>

            <Text style={styles.texto}>
            Ajude a preservar o meio ambiente
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