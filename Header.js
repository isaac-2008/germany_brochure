import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Germany Travel Guide 🇩🇪
      </Text>

      <Text style={styles.subtitle}>
        Descubre los mejores lugares de Alemania
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#FFCE00",
    fontSize: 15,
    marginTop: 8,
    textAlign: "center",
  },
});
