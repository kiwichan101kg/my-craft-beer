import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Badge } from "../Badge";

type BeerInfoProps = {
  name: string;
  brewery: string;
  beerStyle: string;
  alcohol: string;
};

export const BeerInfo = (props: BeerInfoProps) => {
  return (
    <>
      {/* Beer Info Section */}
      <Image
        source={require("../../assets/images/sample1.jpg")}
        style={styles.image}
      />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.brewery}>{props.brewery}</Text>

      <View style={styles.badgeContainer}>
        {/* <View style={[styles.badge, { backgroundColor: "#FDB813" }]}>
          <Text style={styles.badgeText}>{props.beerStyle}</Text>
        </View> */}
        <Badge beerStyle={props.beerStyle} />

        <View style={[styles.badge, { backgroundColor: "#4A3624" }]}>
          <Text style={styles.badgeText}>{props.alcohol}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#FEFEFE",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  brewery: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
  },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 24,
    gap: 10,
  },
  badge: {
    alignSelf: "flex-start",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff", // テキストは常に白色
  },
});
