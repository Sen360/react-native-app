import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const TodoInput = (props) => {
  const { addTodo, modalVisible, closeModal } = props;

  const [inputValue, setInputValue] = useState("");

  const handleOnChangeInput = (enteredValue) => {
    setInputValue(enteredValue);
  };

  const handleAddTodo = () => {
    if (inputValue === "") return;
    addTodo(inputValue);
    setInputValue("");
    closeModal();
  };

  const handleCancelTodo = () => {
    setInputValue("");
    closeModal();
  };

  return (
    <Modal visible={modalVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="todo"
          value={inputValue}
          onChangeText={handleOnChangeInput}
        />
        <View style={styles.buttons}>
          <Button title="Ajouter" color="green" onPress={handleAddTodo} />
          <Button title="Annuler" color="red" onPress={handleCancelTodo} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "50%",
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});

export default TodoInput;
