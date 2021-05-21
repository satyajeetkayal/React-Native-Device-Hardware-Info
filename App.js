import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FirstScreen from "./components/FirstScreen";
import { BreadProvider } from "material-bread";

export default function App() {
  return (
    <BreadProvider>
      <View style={styles.container}>
        <FirstScreen />
        <StatusBar style="auto" />
      </View>
    </BreadProvider>
  );
}
