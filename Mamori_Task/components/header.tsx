import { HEADERIMAGES } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HEADERCOLORS, SAFEAREACOLOR } from "../constants/colors";
import { HEADERTEXT } from "../constants/texts";
import { STYLES } from "../styles/header";

export default function Header() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ backgroundColor: SAFEAREACOLOR.safeAreaBg }}
    >
      <View style={STYLES.container}>
        {/* LEFT SIDE */}
        <View style={STYLES.left}>
          <Image source={HEADERIMAGES.profileImage} style={STYLES.avatar} />

          <View>
            <Text style={STYLES.title}>{HEADERTEXT.greeting}</Text>
            <Text style={STYLES.subtitle}>{HEADERTEXT.scans}</Text>
          </View>
        </View>

        {/* RIGHT SIDE */}
        <TouchableOpacity style={STYLES.right}>
          <View style={STYLES.ticketRow}>
            <Ionicons
              name="ticket-outline"
              size={18}
              color={HEADERCOLORS.iconColor}
            />
            <Text style={STYLES.ticketNumber}>{HEADERTEXT.ticketnumber}</Text>
          </View>

          <Text style={STYLES.viewEntries}>{HEADERTEXT.viewEntries}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
