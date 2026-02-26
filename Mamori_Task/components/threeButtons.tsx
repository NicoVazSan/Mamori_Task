import { BUTTONCOLORS } from "@/constants/colors";
import { BUTTONICONS } from "@/constants/Icons";
import { BUTTONTEXT } from "@/constants/texts";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { STYLES } from "../styles/threeButtons";

export default function ThreeButtons() {
  const router = useRouter();

  return (
    <View style={STYLES.container}>
      <ActionButton
        icon={BUTTONICONS.findProducts}
        label={BUTTONTEXT.findProducts}
        onPress={() => router.push("/find")}
        bg={BUTTONCOLORS.findProductsButton}
        variant="border"
      />

      <ActionButton
        icon={BUTTONICONS.takePhotos}
        label={BUTTONTEXT.takePhotos}
        onPress={() => router.push("/photos")}
        bg={BUTTONCOLORS.takePhotosButton}
      />

      <ActionButton
        icon={BUTTONICONS.earnTickets}
        label={BUTTONTEXT.earnTickets}
        onPress={() => router.push("/tickets")}
        bg={BUTTONCOLORS.earnTicketsButton}
      />
    </View>
  );
}

type ActionButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  bg?: string;
  variant?: "filled" | "border";
};

function ActionButton({
  icon,
  label,
  onPress,
  bg = BUTTONCOLORS.actionButtonBg,
  variant = "filled",
}: ActionButtonProps) {
  return (
    <TouchableOpacity style={STYLES.card} onPress={onPress}>
      <View
        style={[
          variant === "border" ? STYLES.iconCircleBorder : STYLES.iconCircle,
          variant === "filled" && { backgroundColor: bg },
        ]}
      >
        <Ionicons
          name={icon}
          size={24}
          color={
            variant === "border"
              ? BUTTONCOLORS.actionButtonBlack
              : BUTTONCOLORS.actionButtonWhite
          }
        />
      </View>

      <Text style={STYLES.text}>{label}</Text>
    </TouchableOpacity>
  );
}
