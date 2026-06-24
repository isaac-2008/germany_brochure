import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Hero from "./Components/Hero";
import TransitionScreen from "./Components/TransitionScreen";
import GermanyScreen from "./Components/GermanyScreen";

export default function App() {
  const [screen, setScreen] = useState("intro");

  if (screen === "intro") {
    return (
      <SafeAreaProvider>
        <Hero
          onExplore={() =>
            setScreen("transition")
          }
        />
      </SafeAreaProvider>
    );
  }

  if (screen === "transition") {
    return (
      <SafeAreaProvider>
        <TransitionScreen
          onFinish={() =>
            setScreen("content")
          }
        />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <GermanyScreen />
    </SafeAreaProvider>
  );
}
<GermanyScreen
  goHome={() => setScreen("intro")}
/>