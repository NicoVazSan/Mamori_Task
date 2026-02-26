import NextDrawCard from "@/components/countdown";
import ThreeButtons from "@/components/threeButtons";
import { STYLES } from "@/styles/scanwin";
import { View } from "react-native";
import Header from "../../components/header";
import MockupSimple from "../../components/placeholderScreen";

export default function ScanWin() {
  return (
    <View style={STYLES.container}>
      <Header />
      <ThreeButtons />
      <NextDrawCard />
      <MockupSimple />
    </View>
  );
}
