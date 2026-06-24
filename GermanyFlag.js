import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";

export default function GermanyFlag() {
  const wave = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(wave, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(wave, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const rotate = wave.interpolate({
    inputRange: [0, 1],
    outputRange: ["-3deg", "3deg"],
  });

  return (
    <Animated.View
      style={[
        styles.flag,
        {
          transform: [{ rotate }],
        },
      ]}
    >
      <View style={[styles.band, { backgroundColor: "#000" }]} />
      <View style={[styles.band, { backgroundColor: "#DD0000" }]} />
      <View style={[styles.band, { backgroundColor: "#FFCE00" }]} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  flag: {
    width: 260,
    height: 160,
    borderRadius: 15,
    overflow: "hidden",
  },

  band: {
    flex: 1,
  },
});