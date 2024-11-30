import React, { useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, View, Text } from "react-native";
import { BeerCard } from "@/components/BeerCard";

const beerData = [
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
            <Text style={styles.subtitle}>お気に入り</Text>
          </View>
        }
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
