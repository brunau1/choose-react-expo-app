import React from "react";
import { Image, Text, View } from "react-native";
import { Link } from "react-router-native";
import styles from "../styles";

export default function About() {
  return (
    <View style={styles.component}>
      <View style={styles.componentHeader}>
        <Text style={styles.h1}>Sobre...</Text>
      </View>
      <View style={[styles.componentContent, { justifyContent: "flex-start" }]}>
        <Image style={[{alignSelf: "center"}]} source={require("../assets/icon.png")} />
        <Text style={[styles.h2, styles.mt2]}>Choose!</Text>
        <Text style={[styles.h3, styles.mt1]}>Versão do app 1.0.0</Text>
        <Text style={styles.mt2}>
          Aplicação exemplo desenvolvida para a disciplina Tópicos Especiais em
          Sistemas de Informação da PUC Minas.
        </Text>
        <Text style={styles.mt2}>
          Consiste em um jogo de perguntas e respostas, onde o usuário escolhe
          entre duas opções clicando em um dos botões disponíveis.
        </Text>
        <Text style={styles.mt2}>Autor: Bruno Otávio</Text>
        <Link to="/" style={[styles.mt2, { width: 100 }]}>
          <View
            style={[styles.danger, { alignItems: "center", borderWidth: 1 }]}
          >
            <Text style={{ padding: 10, fontSize: 15, color: "white" }}>
              Voltar
            </Text>
          </View>
        </Link>
      </View>
    </View>
  );
}
