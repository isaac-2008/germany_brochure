import { View, Text } from "react-native";

export default function Footer() {
  return (
    <View
      style={{
        marginVertical: 30,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#FFCE00",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Discover Germany 🇩🇪
      </Text>
    </View>
  );
}