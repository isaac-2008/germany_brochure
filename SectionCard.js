import {
  Pressable,
  Text,
  StyleSheet,
  Image,
  View,
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
    width: 280,
    backgroundColor:
      "rgba(0,0,0,0.75)",
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 15,
  },

  image: {
    width: "100%",
    height: 180,
  },

  content: {
    padding: 15,
  },

  title: {
    color: "#FFCE00",
    fontSize: 20,
    fontWeight: "bold",
  },

  description: {
    color: "white",
    marginTop: 8,
    lineHeight: 20,
  },
});