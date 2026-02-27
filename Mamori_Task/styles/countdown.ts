import { StyleSheet } from "react-native";
import { COUNTDOWNSTYLECOLORS } from "../constants/colors";

export const STYLES = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 12,
    marginHorizontal: 15,
    elevation: 5,
    shadowColor: COUNTDOWNSTYLECOLORS.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "800",
    color: COUNTDOWNSTYLECOLORS.titleColor,
    marginLeft: 15,
  },

  /* DATE BOX */
  dateBox: {
    backgroundColor: COUNTDOWNSTYLECOLORS.dateBoxBgColor,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    minWidth: 70,
  },

  day: {
    fontSize: 40,
    fontWeight: "900",
    color: COUNTDOWNSTYLECOLORS.dateBoxTextColor,
    lineHeight: 45,
  },

  month: {
    fontSize: 12,
    fontWeight: "800",
    color: COUNTDOWNSTYLECOLORS.dateBoxTextColor,
    marginTop: -5,
  },

  time: {
    fontSize: 18,
    fontWeight: "900",
    color: COUNTDOWNSTYLECOLORS.dateBoxTextColor,
  },

  /* COUNTDOWN */
  digit: {
    color: COUNTDOWNSTYLECOLORS.digitColor,
    fontWeight: "900",
    fontSize: 44,
  },

  separator: {
    color: COUNTDOWNSTYLECOLORS.separatorColor,
    fontSize: 36,
    fontWeight: "900",
    marginTop: -10,
  },

  label: {
    color: COUNTDOWNSTYLECOLORS.labelColor,
    fontSize: 12,
    fontWeight: "800",
    marginTop: -10,
  },
});
