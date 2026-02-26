import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { PLACEHOLDERTEXT } from "../constants/texts";
import { STYLES } from "../styles/placeholderScreen";

export default function MockupSimple() {
  return (
    <ScrollView style={STYLES.screen}>
      <TouchableOpacity style={STYLES.btn1}>
        <Text style={STYLES.btn1Text}>{PLACEHOLDERTEXT.scanBtn}</Text>
      </TouchableOpacity>

      <View style={STYLES.infoCenter}>
        <Text style={STYLES.title}>{PLACEHOLDERTEXT.title}</Text>
        <Text style={STYLES.desc}>{PLACEHOLDERTEXT.desc}</Text>

        <TouchableOpacity style={STYLES.btn2Outline}>
          <Text style={STYLES.btn2Text}>{PLACEHOLDERTEXT.shareBtn}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
