import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  app: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#202124",
  },
  loginContainer: {
    flex: 1,
    backgroundColor: "#202124",
    alignItems: "center",
    justifyContent: "center",
  },
  blankImg: {
    width: "80%",
    height: 300,
    resizeMode: "contain",
  },
  loginButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "red",
    padding: 15,
    width: 200,
  },
  loginButtonText: {
    textAlign: "center",
    fontSize: 20,
  },
  body: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#202124",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chooseComponent: {
    color: "white",
    display: "flex",
    backgroundColor: "#202124",
    alignItems: "center",
    justifyContent: "center",
  },
  chooseFooter: {
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chooseContent: {
    marginTop: 20,
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "space-between",
  },
  chooseAddButton: {
    marginTop: 10,
    backgroundColor: "#548e47",
    padding: 10,
  },
  chooseButton: {
    width: 250,
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
  },
  addInput: {
    width: 300,
    padding: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#dce5e8",
    fontSize: 16,
    marginBottom: 10,
  },
  topBar: {
    height: 100,
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-start",
  },
  topBarLogo: {
    alignSelf: "center",
    justifySelf: "center",
    width: "30%",
    margin: "auto",
    marginTop: 15,
  },

  topBarDiv: {
    width: "4%",
    position: "absolute",
    right: "1%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "center",
    alignSelf: "center",
    border: "1px solid white",
    padding: "5px",
    borderRadius: "5px",
  },

  conteudo: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  appName: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: 12,
  },
  badge: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    padding: 5,
    minWidth: 20,
    textAlign: "center",
    marginRight: 12,
    fontSize: 16,
    fontWeight: "bold",
  },

  component: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    margin: 18,
  },
  componentHeader: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  componentContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },

  // títulos
  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 18,
    fontWeight: "bold",
  },

  // Listas
  list: {
    borderColor: "#dce5e8",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    flex: 1,
  },
  li: {
    padding: 5,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  liText: {
    fontSize: 18,
    margin: 10,
    flex: 1,
  },
  liSeparator: {
    height: 1,
    backgroundColor: "#CED0CE",
  },

  // Formulário
  field: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 16,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#dce5e8",
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: "white",
  },

  // botões
  button: {
    height: 30,
    padding: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: 2,
    marginLeft: 2,
  },

  buttonImg: {
    height: 15,
    width: 15,
    resizeMode: "stretch",
  },

  // cores
  active: {
    color: "#fff",
    backgroundColor: "#3b78ac",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2a679b",
  },
  primary: {
    color: "#fff",
    backgroundColor: "#3b78ac",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2a679b",
  },
  secondary: {
    color: "#000",
    backgroundColor: "#cddfeb",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#bcceda",
  },
  success: {
    color: "#fff",
    backgroundColor: "#2a9d8f",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#198c7e",
  },
  warning: {
    color: "#000",
    backgroundColor: "#ffd166",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#eec055",
  },
  danger: {
    color: "#fff",
    backgroundColor: "#ef233c",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#de122b",
  },
  light: {
    color: "#000",
    backgroundColor: "#edf6f9",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#dce5e8",
  },
  dark: {
    color: "#fff",
    backgroundColor: "#1d3a4e",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0c293d",
  },

  // espaçamentos
  mt1: {
    marginTop: 12,
  },
  mt2: {
    marginTop: 24,
  },
  mt3: {
    marginTop: 36,
  },
  mt4: {
    marginTop: 48,
  },

  // imagem para quando não houver dados
  blank: {
    flex: 1,
    opacity: 0.25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
