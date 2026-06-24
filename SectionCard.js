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
    <Pressable style={styles.card}>
      <Image
        source={{ uri: image }}
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
    backgroundColor:
      "rgba(0,0,0,0.7)",
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
    color: "white",
    marginTop: 8,
    lineHeight: 22,
  },
});
