import React from "react";

import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";

export default function SectionCard({
  title,
  image,
  description,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        {
          opacity: pressed ? 0.85 : 1,
          transform: [
            {
              scale: pressed ? 0.98 : 1,
            },
          ],
        },
      ]}
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(0,0,0,0.75)",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 200,
  },

  content: {
    padding: 15,
  },

  title: {
    color: "#FFCE00",
    fontSize: 22,
    fontWeight: "bold",
  },

  description: {
    color: "#FFFFFF",
    marginTop: 8,
    lineHeight: 22,
    fontSize: 15,
  },
});
