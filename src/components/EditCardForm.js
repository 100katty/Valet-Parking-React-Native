import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  Pressable,
} from "react-native";

export const EditCardForm = () => {
  const [placas, onChangePlacas] = useState();
  const [modelo, onChangeModelo] = useState();
  const [color, onChangeColor] = useState();
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text>Actualice la información que considera necesaria</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePlacas}
          value={placas}
          placeholder="Placas"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeModelo}
          value={modelo}
          placeholder="Marca"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeColor}
          value={color}
          placeholder="Color"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    marginTop: 15,
    height: 60,
    //borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#EAEDED",
  },
  textInfo: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 28,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 5,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
  },
  buttonModal: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
