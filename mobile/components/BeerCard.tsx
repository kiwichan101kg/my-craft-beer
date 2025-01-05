import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, Image, View, Platform } from "react-native";
import { Badge } from "./Badge";

type BeerCardProps = {
  id: string;
  name: string;
  beerStyle: string;
  image: string;
};

// 静的画像を事前にインポートしてマッピング
const imageMap = {
  "sample1.jpg": require("../assets/images/sample1.jpg"),
  "sample2.jpg": require("../assets/images/sample2.jpg"),
  "sample3.jpg": require("../assets/images/sample3.jpg"),
  "sample4.jpg": require("../assets/images/sample4.jpg"),
  "sample5.jpg": require("../assets/images/sample5.jpg"),
  "default.jpg": require("../assets/images/default.jpg"), // デフォルト画像
};

export const BeerCard = ({ item }: { item: BeerCardProps }) => {
  const imageSource =
    imageMap[item.image as keyof typeof imageMap] || imageMap["default.jpg"];

  return (
    <View style={styles.card}>
      <View style={styles.linkWrapper}>
        <Link
          href={{
            pathname: "/beerDetail/[id]",
            params: {
              id: item.id, // 動的パスセグメント
              name: item.name,
              beerStyle: item.beerStyle,
              image: item.image,
            },
          }}
          style={styles.link}
        >
          <Image source={imageSource} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.name}>{item.name}</Text>
            <Badge beerStyle={item.beerStyle} />
          </View>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  linkWrapper: {
    flex: 1,
    borderRadius: 12,
    overflow: Platform.OS === "ios" ? "hidden" : "visible",
  },
  link: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    textAlign: "left",
  },
  typeBadge: {
    alignSelf: "flex-start",
    backgroundColor: Colors.light.primary,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  typeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
});
