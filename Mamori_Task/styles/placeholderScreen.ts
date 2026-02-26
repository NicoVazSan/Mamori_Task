import { PLACEHOLDERSTYLECOLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const STYLES = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  btn1: {
    backgroundColor: PLACEHOLDERSTYLECOLORS.btn1Bg,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 30,
  },

  btn1Text: {
    color: PLACEHOLDERSTYLECOLORS.btn1Text,
    fontSize: 18,
    fontWeight: "bold",
  },

  infoCenter: {
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  desc: {
    textAlign: "center",
    color: PLACEHOLDERSTYLECOLORS.descText,
    marginBottom: 20,
  },

  btn2Outline: {
    borderWidth: 2,
    borderColor: PLACEHOLDERSTYLECOLORS.btn2Outline,
    padding: 12,
    borderRadius: 30,
  },
  btn2Text: {
    color: PLACEHOLDERSTYLECOLORS.btn2Text,
    fontWeight: "bold",
  },
});
