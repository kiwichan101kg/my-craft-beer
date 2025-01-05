import { View, StyleSheet } from "react-native";
import React, { useRef, useEffect } from "react";
import * as echarts from "echarts/core";
import { RadarChart } from "echarts/charts";
import { TooltipComponent } from "echarts/components";
import { SkiaRenderer, SkiaChart } from "@wuba/react-native-echarts";

// EChartsで使用するモジュールを登録
echarts.use([SkiaRenderer, RadarChart, TooltipComponent]);

const BeerInfo = {
  aroma: 4, // 香り
  body: 3, // ボディ
  bitterness: 5, // 苦味
  acidity: 2, // 酸味
  sweetness: 1, // 甘味
  balance: 4, // バランス
};

export default function Tasting() {
  const skiaRef = useRef<any>(null);

  useEffect(() => {
    const option = {
      tooltip: {
        trigger: "item",
      },
      radar: {
        indicator: [
          { text: "香り", max: 5 },
          { text: "ボディ", max: 5 },
          { text: "苦味", max: 5 },
          { text: "後味", max: 5 },
          { text: "酸味", max: 5 },
          { text: "甘味", max: 5 },
        ],
        shape: "polygon",
        radius: "75%", // チャートを小さめに設定
        axisName: {
          color: "#4A3624", // ラベルの色を濃く設定
          fontSize: 12, // ラベルを小さく
          fontWeight: "bold",
        },
        splitLine: {
          lineStyle: {
            color: "#ddd",
          },
        },
        splitArea: {
          areaStyle: {
            color: ["#fff", "#f7f7f7"], // レーダーグリッドの背景
          },
        },
        axisLine: {
          lineStyle: {
            color: "#ccc",
          },
        },
      },
      series: [
        {
          type: "radar",
          data: [
            {
              value: [
                BeerInfo.aroma,
                BeerInfo.body,
                BeerInfo.bitterness,
                BeerInfo.acidity,
                BeerInfo.sweetness,
                BeerInfo.balance,
              ],
              name: "味の評価",
              areaStyle: {
                color: "rgba(255,165,0,0.5)", // 塗りつぶし色
              },
              lineStyle: {
                color: "#FFA726", // ラインの色
              },
              symbol: "circle",
              symbolSize: 6,
              itemStyle: {
                color: "#FFA726", // 頂点の色
              },
            },
          ],
        },
      ],
    };

    let chart: any;
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, "light", {
        // renderer: "skia",
        width: 300, // チャート幅を小さめに
        height: 300, // チャート高さを小さめに
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, []);

  return (
    <View style={styles.container}>
      <SkiaChart ref={skiaRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    padding: 16,
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
