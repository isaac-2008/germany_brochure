import React, { useMemo, useState } from "react";

import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  FlatList,
  Text,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./Header";
import SectionCard from "./SectionCard";
import Footer from "./Footer";

import { germanyData } from "./germanyData";

export default function GermanyScreen({ goHome }) {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    if (searchText === "") {
      return germanyData;
    }

    return germanyData.filter((item) => {
      const title = item.title
        ? item.title.toLowerCase()
        : "";

      const description = item.description
        ? item.description.toLowerCase()
        : "";

      return (
        title.includes(searchText) ||
        description.includes(searchText)
      );
    });
  }, [search]);

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a",
      }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>

          <FlatList
            data={filteredData}
            keyExtractor={(item, index) =>
              item.id
                ? item.id.toString()
                : index.toString()
            }
            showsVerticalScrollIndicator={false}

            ListHeaderComponent={
              <>
                <Header />

                <View style={styles.searchContainer}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar en Alemania..."
                    placeholderTextColor="#888"
                    value={search}
                    onChangeText={setSearch}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>

                {search.length > 0 && (
                  <Text style={styles.resultText}>
                    {filteredData.length} resultado
                    {filteredData.length !== 1 ? "s" : ""}
                  </Text>
                )}
              </>
            }

            renderItem={({ item }) => (
              <SectionCard
                title={item.title}
                image={item.image}
                description={item.description}
              />
            )}

            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyTitle}>
                  No encontramos resultados
                </Text>

                <Text style={styles.emptyText}>
                  Intenta buscar otro lugar, ciudad o atracción.
                </Text>
              </View>
            }

            ListFooterComponent={
              <Footer />
            }

            contentContainerStyle={
              styles.listContent
            }
          />

        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  listContent: {
    paddingBottom: 20,
  },

  searchContainer: {
    marginBottom: 12,
  },

  searchInput: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#222222",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 4,
  },

  resultText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 12,
    marginLeft: 5,
  },

  emptyContainer: {
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    marginTop: 20,
  },

  emptyTitle: {
    color: "#FFCE00",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  emptyText: {
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },
});
