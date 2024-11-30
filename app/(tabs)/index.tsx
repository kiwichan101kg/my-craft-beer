import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
  View,
  Image,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { BeerCard } from "@/components/BeerCard";

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
      <FlatList
        data={filteredData}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Image
              source={require("../../assets/images/logo.png")} // ロゴ画像のパス
              style={styles.logo}
            />
            <View style={styles.searchContainer}>
              <MaterialIcons name="search" size={24} color="#888" />
              <TextInput
                style={styles.searchBar}
                placeholder="検索（銘柄・種類で絞り込み）"
                value={search}
                onChangeText={handleSearch}
              />
            </View>
            <Text style={styles.subtitle}>最近飲んだ</Text>
          </View>
        }
        renderItem={BeerCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.columnWrapper}
        ListFooterComponent={
          <View style={styles.footer}>
            {/* クラフトビールとは */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>クラフトビールとは</Text>
              <Text style={styles.sectionContent}>
                クラフトビールは小規模なブルワリーによって生産され、独自の風味や品質を追求したビールです。一般的に大量生産されるビールとは異なり、個性的な味わいが楽しめます。
              </Text>
            </View>
            {/* クラフトビールの種類 */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>クラフトビールの種類</Text>
              <Text style={styles.sectionContent}>
                クラフトビールにはIPA、スタウト、ペールエール、ウィートビールなど多くの種類があります。それぞれ独自の特徴と風味があり、飲むシーンや好みに合わせて選べます。
              </Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: "contain",
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 100,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
    color: "#333",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4A3624",
    alignSelf: "flex-start",
    marginTop: 18,
  },
  list: {
    paddingBottom: 16,
    paddingHorizontal: 8,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A3624",
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
});
