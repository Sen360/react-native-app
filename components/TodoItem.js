import React from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";

const TodoItem = (props) => {
  const { item, onDelete } = props;

  return (
    <TouchableNativeFeedback onPress={() => onDelete(item.item)}>
      <View style={styles.todoItem}>
        <Text>{item.item.value}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "black",
    marginVertical: 10,
  },
});

export default TodoItem;
