import { COUNTDOWNCOLORS } from "@/constants/colors";
import { STYLES } from "@/styles/countdown";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import CountDown from "react-native-countdown-component";
import { COUNTDOWNTEXT } from "../constants/texts";

type ApiResponse = {
  nextdraw: string;
};

export default function NextDrawCard() {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const [drawDate, setDrawDate] = useState<Date | null>(null);

  useEffect(() => {
    const fetchDrawDate = async () => {
      try {
        const response = await fetch(
          "https://api.mockfly.dev/mocks/d3ae4488-80ad-41f4-8291-06844dc7fcd5/Timer",
        );

        const data: ApiResponse = await response.json();

        const dateObj = new Date(data.nextdraw);
        const target = dateObj.getTime();
        const now = Date.now();

        const diffSeconds = Math.floor((target - now) / 1000);

        if (diffSeconds <= 0) return;

        setDrawDate(dateObj);
        setSecondsLeft(diffSeconds);
      } catch (err) {
        console.log("Timer error:", err);
      }
    };

    fetchDrawDate();
  }, []);

  if (secondsLeft === null || drawDate === null) return null;

  return (
    <LinearGradient
      colors={[
        COUNTDOWNCOLORS.cardGradientStart,
        COUNTDOWNCOLORS.cardGradientEnd,
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={STYLES.card}
    >
      <View style={STYLES.row}>
        <DateCard date={drawDate} />
        <View style={STYLES.container}>
          <Text style={STYLES.title}>{COUNTDOWNTEXT.title}</Text>
          <CountDown
            key={secondsLeft}
            until={secondsLeft}
            size={20}
            digitStyle={{ backgroundColor: "transparent" }}
            digitTxtStyle={STYLES.digit}
            separatorStyle={STYLES.separator}
            timeLabelStyle={STYLES.label}
            timeToShow={["D", "H", "M", "S"]}
            timeLabels={{
              d: COUNTDOWNTEXT.timeLabelDays,
              h: COUNTDOWNTEXT.timeLabelHours,
              m: COUNTDOWNTEXT.timeLabelMinutes,
              s: COUNTDOWNTEXT.timeLabelSeconds,
            }}
            showSeparator
          />
        </View>
      </View>
    </LinearGradient>
  );
}

function DateCard({ date }: { date: Date }) {
  const day = date.getDate();

  const month = date.toLocaleString("en-US", { month: "long" }).toUpperCase();

  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <View style={STYLES.dateBox}>
      <Text style={STYLES.day}>{day}</Text>
      <Text style={STYLES.month}>{month}</Text>
      <Text style={STYLES.time}>{time}</Text>
    </View>
  );
}
