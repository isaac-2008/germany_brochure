import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Discover Germany 🇩🇪
      </Text>

      <Text style={styles.subtext}>
        Travel • Explore • Enjoy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    alignItems: "center",
  },

  text: {
    color: "#FFCE00",
    fontWeight: "bold",
    fontSize: 18,
  },

  subtext: {
    color: "#FFFFFF",
    fontSize: 13,
    marginTop: 5,
  },
});
