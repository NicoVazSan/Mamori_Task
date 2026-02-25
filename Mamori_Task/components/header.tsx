import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { HEADERTEXT } from "../constants/texts";
import { IMAGES } from "@/constants/images";
import { SAFEAREACOLOR} from '../constants/colors';
import { HEADERCOLORS } from "../constants/colors";
import { STYLES } from "../styles/header";

export default function Header() {
  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: SAFEAREACOLOR.safeAreaBackground }}>
        <View style={STYLES.container}>
        
        {/* LEFT SIDE */}
        <View style={STYLES.left}>
            <Image
            source={IMAGES.profileImage}
            style={STYLES.avatar}
            />

            <View>
            <Text style={STYLES.title}>{HEADERTEXT.greeting}</Text>
            <Text style={STYLES.subtitle}>{HEADERTEXT.scans}</Text>
            </View>
        </View>

        {/* RIGHT SIDE */}
        <TouchableOpacity style={STYLES.right}>
            <View style={STYLES.ticketRow}>
                <Ionicons name="ticket-outline" size={18} color={HEADERCOLORS.iconColor} />
                <Text style={STYLES.ticketNumber}>{HEADERTEXT.ticketnumber}</Text>
            </View>

            <Text style={STYLES.viewEntries}>{HEADERTEXT.viewEntries}</Text>
        </TouchableOpacity>

        </View>
    </SafeAreaView>
  );
}
