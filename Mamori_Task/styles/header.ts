import { StyleSheet } from "react-native";
import { HEADERSTYLECOLORS } from "../constants/colors";

export const STYLES = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingBottom: 15,
    backgroundColor: HEADERSTYLECOLORS.backgroundColor
  },

  left: {
    flexDirection: "row",
    alignItems: "center"
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 12
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: HEADERSTYLECOLORS.titleColor
  },

  subtitle: {
    fontSize: 12,
    color: HEADERSTYLECOLORS.subtitleColor,
    marginTop: 2
  },

  right: {
    alignItems: "flex-end"
  },

  ticketNumber: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "right",
    color: HEADERSTYLECOLORS.ticketNumberColor
  },

  viewEntries: {
    fontSize: 12,
    color: HEADERSTYLECOLORS.viewEntriesColor,
    textAlign: "right"
  },

  ticketRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 5
},
});