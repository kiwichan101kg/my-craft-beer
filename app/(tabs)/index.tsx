import { BeerCard } from "@/components/BeerCard";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
  View,
} from "react-native";

const beerData = [
  {
    id: "1",
    name: "Hop Explosion",
    type: "IPA",
    image: "sample1.jpg",
  },
  {
    id: "2",
    name: "Dark Matter",
    type: "Stout",
    image: "sample2.jpg",
  },
  {
    id: "3",
    name: "Golden Ale",
    type: "Pale Ale",
    image: "sample3.jpg",
  },
  {
    id: "4",
    name: "Citrus Bliss",
    type: "Wheat Beer",
    image: "sample4.jpg",
  },
  {
    id: "5",
    name: "Amber Sunset",
    type: "Amber Ale",
    image: "sample5.jpg",
  },
];

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(beerData);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = beerData.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.type.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="検索（銘柄・種類で絞り込み）"
          value={search}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={BeerCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE", // ベージュ系の背景
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    padding: 16, // 検索バーの周りに余白を追加
    marginBottom: 24, // 下に余白を追加
  },
  searchBar: {
    backgroundColor: "#FFF", // 検索バーの背景
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 24,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  list: {
    paddingBottom: 16,
    paddingHorizontal: 8, // リスト全体に左右の余白
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16, // 各カードの縦間隔
  },
});
