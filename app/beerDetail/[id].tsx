import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function BeerDetailScreen() {
  const { name, type } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.type}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE", // ベージュ系の背景

    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: 200, height: 200, marginBottom: 16, borderRadius: 8 },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  type: { fontSize: 18, color: "gray" },
});
