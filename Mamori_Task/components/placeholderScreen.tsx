import React from "react";
import {
    Image,
    ImageSourcePropType,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { PLACEHOLDERSCREENCOLORS } from "@/constants/colors";
import { PLACEHOLDERSCREENIMAGES } from "@/constants/images";
import { PLACEHOLDERTEXT } from "../constants/texts";
import { STYLES } from "../styles/placeholderScreen";

export default function PlaceholderScreen() {
  return (
    <View style={STYLES.screen}>
      {/* STATS */}
      <View style={STYLES.row}>
        <StatCard
          value={PLACEHOLDERTEXT.statCard1Number}
          label={PLACEHOLDERTEXT.statCard1Label}
          action={PLACEHOLDERTEXT.statCard1Action}
          color={PLACEHOLDERSCREENCOLORS.statCard1}
        />
        <StatCard
          value={PLACEHOLDERTEXT.statCard2Number}
          label={PLACEHOLDERTEXT.statCard2Label}
          action={PLACEHOLDERTEXT.statCard2Action}
          color={PLACEHOLDERSCREENCOLORS.statCard2}
        />
        <StatCard
          value={PLACEHOLDERTEXT.statCard3Number}
          label={PLACEHOLDERTEXT.statCard3Label}
          action={PLACEHOLDERTEXT.statCard3Action}
          color={PLACEHOLDERSCREENCOLORS.statCard3}
        />
      </View>

      {/* VOUCHERS */}
      <View style={STYLES.row}>
        <VoucherCard
          logo={PLACEHOLDERSCREENIMAGES.logo1}
          amount={PLACEHOLDERTEXT.voucherCardNumber1}
          color={PLACEHOLDERSCREENCOLORS.voucherCard1}
          badgeImage={PLACEHOLDERSCREENIMAGES.medal1}
        />
        <VoucherCard
          logo={PLACEHOLDERSCREENIMAGES.logo2}
          amount={PLACEHOLDERTEXT.voucherCardNumber2}
          color={PLACEHOLDERSCREENCOLORS.voucherCard2}
          badgeImage={PLACEHOLDERSCREENIMAGES.medal2}
        />
        <VoucherCard
          logo={PLACEHOLDERSCREENIMAGES.logo3}
          amount={PLACEHOLDERTEXT.voucherCardNumber3}
          color={PLACEHOLDERSCREENCOLORS.voucherCard3}
          badgeImage={PLACEHOLDERSCREENIMAGES.medal3}
        />
      </View>
      <TouchableOpacity style={STYLES.btn1}>
        <Text style={STYLES.btn1Text}>{PLACEHOLDERTEXT.scanBtn}</Text>
      </TouchableOpacity>

      <View style={STYLES.infoCenter}>
        <Text style={STYLES.title}>{PLACEHOLDERTEXT.title}</Text>
        <Text style={STYLES.desc}>{PLACEHOLDERTEXT.desc}</Text>
      </View>

      <TouchableOpacity style={STYLES.btn2Outline}>
        <Text style={STYLES.btn2Text}>{PLACEHOLDERTEXT.shareBtn}</Text>
      </TouchableOpacity>
    </View>
  );
}

/* STATCARD FUNCTION */

interface StatCardProps {
  value: string;
  label: string;
  action: string;
  color: string;
}

function StatCard({ value, label, action, color }: StatCardProps) {
  return (
    <TouchableOpacity style={STYLES.statCard}>
      <Text style={[STYLES.statValue, { color }]}>{value}</Text>
      <Text style={STYLES.statLabel}>{label}</Text>
      <Text style={STYLES.statAction}>{action}</Text>
    </TouchableOpacity>
  );
}

/* VOUCHERCARD FUNCTION */

interface VoucherCardProps {
  amount: string;
  color: string;
  logo: ImageSourcePropType;
  badgeImage: ImageSourcePropType;
}

export const VoucherCard = ({
  logo,
  amount,
  color,
  badgeImage,
}: VoucherCardProps) => {
  return (
    <View style={STYLES.voucherCard}>
      <Image
        source={badgeImage}
        style={STYLES.badgeImage}
        resizeMode="contain"
      />

      <View style={STYLES.voucherTop}>
        <Image source={logo} resizeMode="contain" />
      </View>

      <View style={[STYLES.voucherBottom, { backgroundColor: color }]}>
        <Text style={STYLES.voucherAmount}>
          {PLACEHOLDERTEXT.voucherCardMoney}
          {amount}
        </Text>
        <Text style={STYLES.voucherSub}>{PLACEHOLDERTEXT.voucherCardText}</Text>
      </View>
    </View>
  );
};
