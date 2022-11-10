import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";
import styles from "../styles";

export default function Header({ changeLanguage }) {
  return (
    <View style={styles.topBar}>
      <Link to="/about">
        <View style={{ display: "flex", alignItems: "center", marginLeft: 15 }}>
          <Image
            source={require("../assets/choose.png")}
            style={{ width: 150, resizeMode: "contain" }}
          />
        </View>
      </Link>
      <TouchableOpacity onPress={changeLanguage}>
        <Image
          style={[{ width: 35, marginRight: 15, resizeMode: "contain" }]}
          source={require("../assets/language-icon.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
