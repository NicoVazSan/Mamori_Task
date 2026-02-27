import NextDrawCard from "@/components/countdown";
import PlaceholderScreen from "@/components/placeholderScreen";
import ThreeButtons from "@/components/threeButtons";
import { STYLES } from "@/styles/scanwin";
import { ScrollView, View } from "react-native";
import Header from "../../components/header";

export default function ScanWin() {
  return (
    <ScrollView>
      <View style={STYLES.container}>
        <Header />
        <ThreeButtons />
        <NextDrawCard />
        <PlaceholderScreen />
      </View>
    </ScrollView>
  );
}
