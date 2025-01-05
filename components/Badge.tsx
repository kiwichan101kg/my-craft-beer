import React from "react";
import { StyleSheet, Text, View } from "react-native";

type BadgeProps = {
  beerStyle: string; // ビアスタイル
};

// ビアスタイルごとの色を定義
const styleColors: { [key: string]: string } = {
  IPA: "#CC6727",
  Stout: "#3B2E2A",
  PaleAle: "#CA986A",
  Lager: "#F9C74F",
  Pilsner: "#DACE7C",
  WheatBeer: "#F4E4B4",
  AmberAle: "#D77A61",
  Saison: "#F48037",
  DoubleIPA: "#BF3E8A",
  Porter: "#4D3E39",
};

// スタイル正規化関数
const normalizeStyleKey = (style: string): string => {
  // 空白を削除して返す
  return style.replace(/\s+/g, "");
};

// バッジコンポーネント
export const Badge = ({ beerStyle }: BadgeProps) => {
  const normalizedStyle = normalizeStyleKey(beerStyle);
  const backgroundColor = styleColors[normalizedStyle] || "#BDBDBD"; // 未定義のスタイルにはグレーを適用

  return (
    <View style={[styles.badge, { backgroundColor }]}>
      <Text style={styles.badgeText}>{beerStyle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
