import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { StyleSheet, View, FlatList, Button } from "react-native";

import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addTodo = (inputValue) => {
    setTodos([...todos, { id: uuidv4(), value: inputValue }]);
    // setInputValue("");
  };

  const renderItem = (item) => {
    return <TodoItem item={item} onDelete={deleteItem} />;
  };

  const deleteItem = (item) => {
    const newList = todos.filter((todo) => todo.id !== item.id);
    setTodos(newList);
  };

  const activateModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Ajouter un todo" onPress={activateModal} />
      <TodoInput
        addTodo={addTodo}
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {/* <ScrollView>
        {todos.map((todo, index) => {
          return (
            <View key={todo + index} style={styles.todoItem}>
              <Text>{todo}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
