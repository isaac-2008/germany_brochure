import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  View,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");

export default function TransitionScreen({
  onFinish,
}) {
  const blackX = useRef(
    new Animated.Value(-width)
  ).current;

  const redX = useRef(
    new Animated.Value(-width)
  ).current;

  const yellowX = useRef(
    new Animated.Value(-width)
  ).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(blackX, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),

        Animated.timing(redX, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),

        Animated.timing(yellowX, {
          toValue: 0,
          duration: 900,
          useNativeDriver: true,
        }),
      ]),

      Animated.delay(300),

      Animated.sequence([
        Animated.timing(blackX, {
          toValue: width,
          duration: 500,
          useNativeDriver: true,
        }),

        Animated.timing(redX, {
          toValue: width,
          duration: 500,
          useNativeDriver: true,
        }),

        Animated.timing(yellowX, {
          toValue: width,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      onFinish();
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.black,
          {
            transform: [
              { translateX: blackX },
            ],
          },
        ]}
      />

      <Animated.View
        style={[
          styles.red,
          {
            transform: [
              { translateX: redX },
            ],
          },
        ]}
      />

      <Animated.View
        style={[
          styles.yellow,
          {
            transform: [
              { translateX: yellowX },
            ],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  black: {
    flex: 1,
    backgroundColor: "#000000",
  },

  red: {
    flex: 1,
    backgroundColor: "#DD0000",
  },

  yellow: {
    flex: 1,
    backgroundColor: "#FFCE00",
  },
});