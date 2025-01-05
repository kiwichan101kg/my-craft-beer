import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

type FormValues = {
  name: string;
  brewery: string;
  style: string;
  alcohol: string;
  location: string;
  purchasePlace: string;
  date: string;
  memo: string;
  characteristics: {
    aroma: number;
    body: number;
    bitterness: number;
    acidity: number;
    sweetness: number;
  };
  pairings: [];
};

export default function HomeScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      brewery: "",
      style: "",
      alcohol: "",
      location: "",
      purchasePlace: "",
      date: "",
      memo: "",
      characteristics: {
        aroma: 0,
        body: 0,
        bitterness: 0,
        acidity: 0,
        sweetness: 0,
      },
      pairings: [], // 初期値を空の配列に設定
    },
  });

  const [showPicker, setShowPicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = (data: FormValues) => {
    console.log("送信", data);
  };

  const characteristicsArr = [
    { key: "aroma", label: "香り" },
    { key: "body", label: "ボディ" },
    { key: "bitterness", label: "苦味" },
    { key: "acidity", label: "酸味" },
    { key: "sweetness", label: "甘味" },
  ] as Array<{ key: keyof FormValues["characteristics"]; label: string }>;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "pairings",
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.sectionTitle}>ビールの情報</Text>

        <Controller
          control={control}
          name="name"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                銘柄 <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input, errors.name && styles.inputError]}
                placeholder="銘柄"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors.name && (
                <Text style={styles.errorText}>必須項目です</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="brewery"
          rules={{
            required: false,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>醸造所（ブルワリー）</Text>
              <TextInput
                style={styles.input}
                placeholder="醸造所（ブルワリー）"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />

        <Controller
          control={control}
          name="style"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>スタイル</Text>

              <TouchableOpacity
                style={styles.dateInput}
                onPress={() => setShowPicker(true)}
              >
                <Text style={styles.dateText}>
                  {value || "スタイルを選択してください"}
                </Text>
              </TouchableOpacity>

              {showPicker && (
                <Picker
                  selectedValue={value}
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  onValueChange={(value) => {
                    onChange(value); // フォームの状態を更新
                    setShowPicker(false); // ピッカーを閉じる
                  }}
                >
                  <Picker.Item label="選択してください" value="" />
                  <Picker.Item label="IPA" value="IPA" />
                  <Picker.Item label="Stout" value="Stout" />
                  <Picker.Item label="PaleAle" value="PaleAle" />
                  <Picker.Item label="Lager" value="Lager" />
                  <Picker.Item label="Pilsner" value="Pilsner" />
                  <Picker.Item label="WheatBeer" value="WheatBeer" />
                  <Picker.Item label="AmberAle" value="AmberAle" />
                  <Picker.Item label="Saison" value="Saison" />
                  <Picker.Item label="DoubleIPA" value="DoubleIPA" />
                  <Picker.Item label="Porter" value="Porter" />
                </Picker>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="alcohol"
          rules={{
            required: false,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>アルコール度数</Text>
              <View style={styles.alcoholInputContainer}>
                <TextInput
                  style={styles.alcoholInput}
                  placeholder="0"
                  keyboardType="numeric"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                <Text style={styles.alcoholUnit}>%</Text>
              </View>
            </View>
          )}
        />

        <Text style={styles.sectionTitle}>特徴</Text>

        <View style={styles.inputContainer}>
          {characteristicsArr.map(({ key, label }) => (
            <Controller
              key={key}
              control={control}
              name={`characteristics.${key}`} // ネストされたフィールド名
              render={({ field: { onChange, value } }) => (
                <View style={styles.ratingContainer}>
                  <Text style={styles.label}>{label || ""}</Text>
                  <View style={styles.starsContainer}>
                    {[1, 2, 3, 4, 5].map((starValue) => (
                      <TouchableOpacity
                        key={starValue}
                        onPress={() => onChange(starValue)}
                      >
                        <FontAwesome
                          name={
                            Number(value || 0) >= starValue ? "star" : "star-o"
                          }
                          size={28} // アイコンのサイズ
                          color="#FFA726" // アイコンの色
                          style={styles.starIcon}
                        />
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
            />
          ))}
        </View>

        <Controller
          control={control}
          name="date"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>飲んだ日付 (YYYY-MM-DD)</Text>
              <TouchableOpacity
                style={styles.dateInput}
                onPress={() => setShowDatePicker(true)}
              >
                <Text style={styles.dateText}>
                  {value || "日付を選択してください"}
                </Text>
              </TouchableOpacity>

              {showDatePicker && (
                <DateTimePicker
                  value={value ? new Date(value) : new Date()}
                  mode="date"
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  onChange={(event, selectedDate) => {
                    setShowDatePicker(false);

                    if (selectedDate) {
                      const formattedDate = selectedDate
                        .toISOString()
                        .split("T")[0];
                      onChange(formattedDate);
                    }
                  }}
                />
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="location"
          rules={{
            required: false,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>飲んだ場所</Text>
              <TextInput
                style={styles.input}
                placeholder="飲んだ場所"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />

        <Controller
          control={control}
          name="purchasePlace"
          rules={{
            required: false,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>購入場所</Text>
              <TextInput
                style={styles.input}
                placeholder="購入場所"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
        />

        <Text style={styles.sectionTitle}>ペアリングした料理</Text>
        {fields.map((field, index) => (
          <View key={field.id} style={styles.inputContainer}>
            <Controller
              control={control}
              name={`pairings.${index}.name`}
              render={({ field: { onChange, value } }) => (
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.mealInput}
                    placeholder={`料理 ${index + 1}`}
                    value={value}
                    onChangeText={onChange}
                  />
                  <TouchableOpacity
                    style={styles.iconWrapper}
                    onPress={() => remove(index)}
                  >
                    <MaterialIcons name="close" size={20} color="#666" />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        ))}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => append({ name: "" })}
        >
          <Text style={styles.addButtonText}>+ 料理を追加</Text>
        </TouchableOpacity>

        <Controller
          control={control}
          name="memo"
          rules={{
            required: false,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Text style={styles.sectionTitle}>MEMO</Text>
              <TextInput
                style={styles.textarea}
                placeholder="感想を書いてください"
                multiline
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="登録"
            onPress={handleSubmit(onSubmit)}
            color="#FFA726"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FEFEFE",
  },
  container: {
    flex: 1,
    backgroundColor: "#FEFEFE",
  },
  content: {
    padding: 16,
    paddingBottom: 80,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A3624",
    marginVertical: 12,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#4A3624",
    marginBottom: 4,
  },
  required: {
    color: "#E53935",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  inputError: {
    borderColor: "#E53935",
    backgroundColor: "#FFEBEE",
  },
  errorText: {
    marginTop: 4,
    fontSize: 14,
    color: "#E53935",
    fontWeight: "bold",
  },
  dateInput: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#DDD",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 16,
    color: "#666",
  },
  picker: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderColor: "#DDD",
    marginTop: 4,
    marginBottom: 12,
    height: 200,
  },
  pickerItem: {
    fontSize: 16,
    color: "#333",
  },
  textarea: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#DDD",
    height: 100,
  },
  addButton: {
    backgroundColor: "#FFA726",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  alcoholInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 12,
  },
  alcoholInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 12,
    marginRight: 4,
  },
  alcoholUnit: {
    fontSize: 16,
    color: "#666",
    fontWeight: "bold",
  },
  ratingContainer: {
    marginBottom: 16,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    marginRight: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  iconWrapper: {
    padding: 4,
  },
  mealInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 8,
  },
});
