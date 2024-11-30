import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BeerInfo = {
  memo: "フルーツの酸味が強く、暑い日にぴったりのサワーエール。ビールが苦手な人でも楽しめそうな爽やかさが特徴です。",
};

export const Impression = () => {
  return (
    <View style={styles.section}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoHeaderText}>Memo</Text>
      </View>
      <Text style={styles.infoItem}>{BeerInfo.memo}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
    marginTop: 24,
    padding: 16,
    backgroundColor: "#FFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    borderTopWidth: 4,
    borderTopColor: "#FFA726",
  },
  memoHeader: {
    position: "absolute",
    top: -12,
    left: 0,
    right: 0,
    backgroundColor: "#FFA726",
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  memoHeaderText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  infoItem: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    marginTop: 16,
  },
});
