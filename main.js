import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

const data = [
  {
    id: "1",
    title: "Berlín",
    description: "Capital de Alemania",
  },
  {
    id: "2",
    title: "Múnich",
    description: "Ciudad de Baviera",
  },
  {
    id: "3",
    title: "Hamburgo",
    description: "Ciudad portuaria de Alemania",
  },
  {
    id: "4",
    title: "Colonia",
    description: "Ciudad famosa por su catedral",
  },
  {
    id: "5",
    title: "Frankfurt",
    description: "Importante centro financiero",
  },
];

export default function Main() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Germany Travel Guide 🇩🇪
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar ciudad..."
        placeholderTextColor="#777"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              {item.title}
            </Text>

            <Text style={styles.description}>
              {item.description}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No se encontraron resultados
          </Text>
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    padding: 20,
  },

  title: {
    color: "#FFCE00",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
  },

  cardTitle: {
    color: "#FFCE00",
    fontSize: 21,
    fontWeight: "bold",
  },

  description: {
    color: "#FFFFFF",
    marginTop: 8,
    fontSize: 15,
  },

  empty: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
  },
});
