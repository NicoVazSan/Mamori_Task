import { BUTTONSTYLECOLORS } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const STYLES = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 20,
  },

  card: {
    backgroundColor: BUTTONSTYLECOLORS.buttoncardBg,
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 10,
    shadowColor: BUTTONSTYLECOLORS.shadowColor,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  iconCircleBorder: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    borderWidth: 2,
    borderColor: BUTTONSTYLECOLORS.borderColor,
  },

  text: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
    color: BUTTONSTYLECOLORS.textColor,
  },
});
