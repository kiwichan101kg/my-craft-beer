import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const BeerInfo = {
  pairingPhoto: "https://via.placeholder.com/300",
  pairingItems: ["Spicy Wings", "Nachos", "Grilled Sausages"],
};

export const Pairing = () => {
  return (
    <View style={styles.container}>
      {/* Photo Section */}
      <Image
        source={require("../../assets/images/oyster.jpg")}
        style={styles.image}
      />
      {/* List Section */}
      <Text style={styles.sectionTitle}>ペアリングした料理</Text>
      <View style={styles.listContainer}>
        {BeerInfo.pairingItems.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            • {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    padding: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A3624",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  listContainer: {
    width: "100%", // リストの幅を全体に広げる
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    paddingTop: 12,
  },
  listItem: {
    fontSize: 16,
    color: "#4A3624",
    marginBottom: 8,
    textAlign: "left", // 左揃え
  },
});
