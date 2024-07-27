import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ToDoCard.style";
const ToDoCard = ({ text, done, deleteTodo, todoDone }) => {
  return (
    <View style={[styles.todoCard, done && styles.doneCard]}>
    <Text style={[styles.todoText, done && styles.doneText]}>{text}</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={deleteTodo} style={styles.actionButton}>
        <Text style={styles.buttonText}>Sil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={todoDone} style={styles.actionButton}>
        <Text style={styles.buttonText}>Bitti</Text>
      </TouchableOpacity>
    </View>
  </View>
);
};
export default ToDoCard;
