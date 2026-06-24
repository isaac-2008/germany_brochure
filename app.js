import {
  FlatList,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionCard from "../components/SectionCard";

import { germanyData } from "../data/germanyData";

export default function GermanyScreen({
  goHome,
}) {
  const renderSection = ({ item }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        {item.icon} {item.section}
      </Text>

      <FlatList
        horizontal
        data={item.items}
        keyExtractor={(item, index) =>
          index.toString()
        }
        renderItem={({ item }) => (
          <SectionCard {...item} />
        )}
        showsHorizontalScrollIndicator={
          false
        }
      />
    </View>
  );

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a",
      }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView
          style={styles.container}
        >
          <FlatList
            data={germanyData}
            keyExtractor={(item, index) =>
              index.toString()
            }
            renderItem={renderSection}
            ListHeaderComponent={<Header />}
            ListFooterComponent={
              <>
                <Pressable
                  style={styles.homeButton}
                  onPress={goHome}
                >
                  <Text
                    style={styles.homeText}
                  >
                    ← Back Home
                  </Text>
                </Pressable>

                <Footer />
              </>
            }
            showsVerticalScrollIndicator={
              false
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
    backgroundColor:
      "rgba(0,0,0,0.4)",
  },

  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

  section: {
    marginBottom: 25,
  },

  sectionTitle: {
    color: "#FFCE00",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  homeButton: {
    backgroundColor: "#FFCE00",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 20,
  },

  homeText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});