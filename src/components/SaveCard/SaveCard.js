import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./SaveCard.style";

export default SaveCard = ({ value, onChangeText, onPress }) => {
  return (
    <View style={styles.saveCardContainer}>
    <TextInput
      style={styles.saveInput}
      value={value}
      onChangeText={onChangeText}
      placeholder="Yeni görev..."
      placeholderTextColor="#ECEFF1"
    />
    <TouchableOpacity style={styles.saveButton} onPress={onPress}>
      <Text style={styles.saveButtonText}>Ekle</Text>
    </TouchableOpacity>
  </View>
);
};