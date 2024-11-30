import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";

type BeerCardProps = {
  id: string;
  name: string;
  type: string;
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
  console.log(`../assets/images/${item.image}`);
  const imageSource =
    imageMap[item.image as keyof typeof imageMap] || imageMap["default.jpg"];

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.type}>{item.type}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%", // 横幅を画面の50%未満に設定（隙間を作る）
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    padding: 10,
    elevation: 3, // Androidのシャドウ
    shadowColor: "#000", // iOSのシャドウ
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A3624", // 濃い茶色
    textAlign: "center",
  },
  type: {
    fontSize: 14,
    color: "#8E7755", // サブテキスト用の薄い茶色
    marginTop: 4,
    backgroundColor: "#FFD44F", // 黄色のバッチ
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: "hidden",
    textAlign: "center",
  },
});
