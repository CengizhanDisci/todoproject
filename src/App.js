import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from "react-native";
import Header from "./components/Header";
import ToDoCard from "./components/ToDoCard";
import SaveCard from "./components/SaveCard";

const App = () => {
  const [list, setList] = useState([
    { text: "Çöp dökülecek", done: false },
    { text: "Oda toplanacak", done: false },
    { text: "Ayakkabı temizlenecek", done: false },
    { text: "Markete gidilecek", done: false },
  ]);

  const [text, setText] = useState("");

  const handleAddTodoPress = () => {
    setList([...list, { text, done: false }]);
    setText("");
  };

  const handleDeleteTodoPress = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleTodoDone = (index) => {
    const newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
          <Text style={styles.count}>{list.length}</Text>
        </View>
        <FlatList
          data={list}
          renderItem={({ item, index }) => (
            <ToDoCard
              text={item.text}
              done={item.done}
              deleteTodo={() => handleDeleteTodoPress(index)}
              todoDone={() => handleTodoDone(index)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
        <SaveCard
          value={text}
          onChangeText={setText}
          onPress={handleAddTodoPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#102027",
  },
  container: {
    flex: 1,
    margin: 10,
    marginTop: 40,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  count: {
    fontSize: 30,
    fontWeight: "700",
    color: "orange",
  },
  listContainer: {
    paddingBottom: 20,
  },
});
