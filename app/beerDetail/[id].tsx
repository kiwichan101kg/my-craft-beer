import { Impression } from "@/components/beerDetail/ Impression";
import { BeerInfo } from "@/components/beerDetail/BeerInfo";
import { Calender } from "@/components/beerDetail/Calender";
import { Pairing } from "@/components/beerDetail/Pairing";
import Tasting from "@/components/beerDetail/Tasting";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// TODO：APIで
const info = {
  location: "Craft Festival 2024",
  purchasePlace: "Local Liquor Store",
  date: "2024/11/30",
};

const beerInfoProps = {
  name: "Hop Explosion",
  brewery: "Great Hops Brewery",
  beerStyle: "IPA",
  alcohol: "7.5%",
};

export default function BeerDetailScreen() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Beer Info Section */}
        <BeerInfo {...beerInfoProps} />

        {/* Tasting Section */}
        <Tasting />

        {/* Record Section */}
        <View style={styles.recordContainer}>
          {/* Calendar Date */}
          <View style={styles.center}>
            <Calender />
          </View>

          {/* Location and Purchase Place */}
          <View style={styles.row}>
            <View style={styles.recordItem}>
              <Text style={styles.recordLabel}>飲んだ場所</Text>
              <Text style={styles.recordValue}>{info.location}</Text>
            </View>
            <View style={styles.recordItem}>
              <Text style={styles.recordLabel}>購入場所</Text>
              <Text style={styles.recordValue}>{info.purchasePlace}</Text>
            </View>
          </View>
        </View>

        <Pairing />

        <Impression />
      </ScrollView>

      {/* Fixed Favorite Button */}
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => {
          setIsFavorite((prev) => !prev);
        }}
        activeOpacity={0.7}
      >
        <MaterialIcons
          name={isFavorite ? "favorite" : "favorite-border"}
          size={28}
          color={isFavorite ? "#FF6347" : "#FFA726"} // 塗りつぶしまたは枠付きアイコン
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
  },
  scrollContainer: {
    padding: 16,
  },
  recordContainer: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    marginBottom: 24,
  },
  center: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row", // 横並び
    justifyContent: "space-between", // 均等配置
    marginTop: 16,
  },
  recordItem: {
    width: "48%", // 横幅を50%未満に設定
    alignItems: "flex-start",
  },
  recordLabel: {
    fontSize: 14,
    color: "#8E7755",
    marginBottom: 4,
  },
  recordValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A3624",
  },
  favoriteButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
});
