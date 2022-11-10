import React, { useState, useEffect } from "react";
import {
  View,
  Alert,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./src/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeRouter, Route, Routes } from "react-router-native";
import Choose from "./src/components/choose";
import About from "./src/components/About";
import Header from "./src/components/Header";
import AddOption from "./src/components/AddOption";

export default function App() {
  const [currentQuestions, setQuestions] = useState({});
  const [options, setOptions] = useState([]);
  const [texts, setTexts] = useState({});
  const [language, setLanguage] = useState("br");
  const [authenticated, setAuthenticated] = useState(false);

  // organiza as perguntas e opções com Ids para iteração
  function setQuestionsWithId(currQuest) {
    const questions = currQuest.map((q, index) => {
      return {
        id: index,
        question: q,
      };
    });

    setQuestions(questions);
  }

  // carrega os dados da aplicação e inicia os recursos
  async function init() {
    try {
      console.log("init called");
      if (!texts.length) {
        console.log("currentQuestions.length is false");
        setLanguage("br");

        const appContent = require("./content.json");

        const questions = appContent.questions[language];
        setQuestionsWithId(questions);

        setTexts(appContent.texts[language]);

        await AsyncStorage.setItem(
          "questions",
          JSON.stringify(appContent.questions)
        );
        await AsyncStorage.setItem("texts", JSON.stringify(appContent.texts));
      }
      setRandomOptions();
    } catch (error) {
      console.log("init error", error);
    }
  }

  // carrega e atualiza o estado atual da aplicação
  async function loadState() {
    try {
      const quest = await AsyncStorage.getItem("questions");
      const txts = await AsyncStorage.getItem("texts");

      if (language && quest) {
        const questions = JSON.parse(quest)[language];
        const appTexts = JSON.parse(txts)[language];

        setQuestionsWithId(questions);
        setTexts(appTexts);
      }
    } catch (error) {
      console.log("loadState error", error);
    }
  }

  // salva o estado da aplicação e armazena no AsyncStorage
  // as perguntas do objeto manipulado pelo usuario
  async function saveState() {
    try {
      console.log("saveState called");
      const quest = await AsyncStorage.getItem("questions");

      if (language && quest) {
        const questions = JSON.parse(quest);
        questions[language] = currentQuestions.map((item) => item.question);

        await AsyncStorage.setItem("questions", JSON.stringify(questions));
      }
    } catch (error) {
      console.log("saveState error", error);
    }
  }

  // autenticação fake para transição de tela
  async function auth() {
    setAuthenticated(true);
    console.log("Autenticado");
  }

  // adiciona uma nova pergunta ao objeto de perguntas
  function addQuestion(opt1, opt2) {
    if (opt1.length && opt2.length) {
      const newQuest = {
        id: currentQuestions.length,
        question: `${opt1} ${getSplitProp(language)} ${opt2}`,
      };
      setQuestions([...currentQuestions, newQuest]);

      Alert.alert("Adicionado com sucesso. Clique no 'X' para voltar");
    } else Alert.alert(texts.fillOptionsAlert);
  }

  // gera um numero aleatório entre 0 e o tamanho do array de perguntas
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // recupera a propriedade de separação de opções
  const getSplitProp = (lang) => (lang === "en" ? "or" : "ou");
  
  // gera as opções aleatórias para o usuário
  function setRandomOptions() {
    const random = randomInt(0, currentQuestions.length - 1);

    if (currentQuestions[random]) {
      const question = currentQuestions[random].question;

      console.log("setting random opt", question);
      const splitProp = getSplitProp(language);

      setOptions(question.split(splitProp));
    }
  }

  // atualiza o idioma da aplicação
  function changeLanguage() {
    console.log("changeLanguage called");
    const newLang = language === "br" ? "en" : "br";
    setLanguage(newLang);
    loadState();
  }

  // atualiza as opções aleatórias quando uma opção é selecionada
  function onChoose() {
    setRandomOptions();
  }

  useEffect(() => {
    init();
    loadState();
  }, []);

  useEffect(() => {
    loadState();
  }, [language]);

  useEffect(() => {
    setRandomOptions();
    saveState();
  }, [currentQuestions]);

  return !authenticated ? (
    <View style={styles.loginContainer}>
      <Image
        source={require("./src/assets/choose.png")}
        style={styles.blankImg}
      />
      <TouchableOpacity style={styles.loginButton} onPress={auth}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <NativeRouter>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.app}
      >
        <View style={styles.body}>
          <Header changeLanguage={changeLanguage} />
          <Routes>
            <Route
              path="/"
              element={
                <Choose texts={texts} options={options} onChoose={onChoose} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/add"
              element={
                <AddOption texts={texts} onSubmitOptions={addQuestion} />
              }
            />
          </Routes>
        </View>
      </KeyboardAvoidingView>
    </NativeRouter>
  );
}
