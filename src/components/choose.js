import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";

import styles from "../styles";

export default function Choose({ texts, options, onChoose }) {
  // console.log("Choose rendered", texts, options, onChoose);
  return (
    <View style={styles.chooseComponent}>
      <View style={styles.chooseContent}>
        <TouchableHighlight onPress={onChoose}>
          <View style={[styles.chooseButton, {}]}>
            <Text>{options[0]}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onChoose}>
          <View
            style={[
              styles.chooseButton,
              { backgroundColor: "#ab0000" },
            ]}
          >
            <Text>{options[1]}</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.chooseFooter}>
        <Text>{texts.addQuestionSpan}</Text>
        <Link to="/add">
          <View style={styles.chooseAddButton}>
            <Text>{texts.addButton}</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}
