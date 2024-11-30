import React from "react";
import { View, Text, StyleSheet } from "react-native";

const info = {
  date: "2024/11/30",
};

export const Calender = () => {
  const dateParts = info.date.split("/"); // 日付を分割 [年, 月, 日]

  return (
    <View style={styles.circleCalendar}>
      <Text style={styles.circleDay}>{dateParts[2]}</Text>
      <Text style={styles.circleMonth}>{dateParts[1]}月</Text>
      <Text style={styles.circleYear}>{dateParts[0]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circleCalendar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFC107",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  circleDay: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A3624",
  },
  circleMonth: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#8E7755",
  },
  circleYear: {
    fontSize: 12,
    color: "#6D4C41",
  },
});
