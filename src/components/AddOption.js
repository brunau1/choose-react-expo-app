import React from "react";
import { Image, Text, TextInput, TouchableHighlight, View } from "react-native";
import { Link } from "react-router-native";
import styles from "../styles";

export default function AddOption({ texts, onSubmitOptions }) {
  const [option1, setOption1] = React.useState([]);
  const [option2, setOption2] = React.useState([]);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 300,
          marginTop: 20,
          marginBottom: 20,
          padding: 10,
          fontSize: 18,
        }}
      >
        <Text>{texts.addOptionsDesc}</Text>
      </View>
      <View
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <TextInput
          style={[
            styles.addInput,
            { borderColor: "red", backgroundColor: "#c3b0b0" },
          ]}
          placeholder="Option..."
          onChangeText={(opt1) => setOption1(opt1)}
        />
        <TextInput
          style={[
            styles.addInput,
            { borderColor: "#0008ff", backgroundColor: "#afb4d9" },
          ]}
          placeholder="Option..."
          onChangeText={(opt2) => setOption2(opt2)}
        />
      </View>
      <TouchableHighlight
        onPress={() => {
          onSubmitOptions(option1, option2);
        }}
      >
        <View
          style={[
            styles.success,
            {
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              width: 50,
              height: 40,
            },
          ]}
        >
          <Image
            source={require("../assets/confirm-icon.png")}
            style={{ resizeMode: "contain", width: 35, height: 35 }}
          />
        </View>
      </TouchableHighlight>
      <Link to="/">
        <View
          style={[
            styles.danger,
            {
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              width: 50,
              height: 40,
            },
          ]}
        >
          <Text style={{ fontSize: 30 }}>X</Text>
        </View>
      </Link>
    </View>
  );
}
