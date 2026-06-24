import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./Header";
import SectionCard from "./SectionCard";
import Footer from "./Footer";

import { germanyData } from "./germanyData";

export default function GermanyScreen() {
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
          <ScrollView
            showsVerticalScrollIndicator={
              false
            }
          >
            <Header />

            {germanyData.map(
              (item, index) => (
                <SectionCard
                  key={index}
                  {...item}
                />
              )
            )}

            <Footer />
          </ScrollView>
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
      "rgba(0,0,0,0.45)",
  },

  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

