import { PLACEHOLDERSCREENSTYLECOLORS } from "@/constants/colors";
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

  /* STAT CARD STYLES*/
  statCard: {
    width: "31%",
    backgroundColor: PLACEHOLDERSCREENSTYLECOLORS.statCardBg,
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    elevation: 2,
    shadowOpacity: 0.1,
  },

  statValue: { fontSize: 24, fontWeight: "bold" },
  statLabel: {
    fontSize: 11,
    color: PLACEHOLDERSCREENSTYLECOLORS.statCardText,
    textAlign: "center",
    marginVertical: 4,
  },
  statAction: {
    fontSize: 11,
    color: PLACEHOLDERSCREENSTYLECOLORS.statCardAction,
    fontWeight: "600",
  },

  /*VOUCHERS STYLES*/
  voucherCard: {
    width: "31%",
    borderRadius: 15,
    backgroundColor: PLACEHOLDERSCREENSTYLECOLORS.voucherCardBg,
    overflow: "visible",
    elevation: 5,
    shadowColor: PLACEHOLDERSCREENSTYLECOLORS.voucherCardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 15,
  },

  badgeImage: {
    width: 40,
    height: 40,
    position: "absolute",
    top: -20,
    alignSelf: "center",
    zIndex: 10,
  },

  voucherTop: {
    height: 70,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  voucherBottom: {
    paddingVertical: 5,
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  voucherAmount: {
    color: PLACEHOLDERSCREENSTYLECOLORS.voucherText,
    fontSize: 28,
    fontWeight: "bold",
  },

  voucherSub: {
    color: PLACEHOLDERSCREENSTYLECOLORS.voucherText,
    fontSize: 16,
    fontWeight: "600",
  },

  /*SCAN AND WIN BUTTON STYLES*/

  btn1: {
    backgroundColor: PLACEHOLDERSCREENSTYLECOLORS.btn1Bg,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },

  btn1Text: {
    color: PLACEHOLDERSCREENSTYLECOLORS.btn1Text,
    fontSize: 18,
    fontWeight: "bold",
  },

  /*SHARE TEXT STYLES*/

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
    color: PLACEHOLDERSCREENSTYLECOLORS.descText,
    marginBottom: 20,
  },

  /*SHARE BUTTON STYLES*/

  btn2Outline: {
    borderWidth: 2,
    borderColor: PLACEHOLDERSCREENSTYLECOLORS.btn2Outline,
    padding: 12,
    borderRadius: 30,
    alignItems: "center",
  },

  btn2Text: {
    color: PLACEHOLDERSCREENSTYLECOLORS.btn2Text,
    fontWeight: "bold",
  },
});
