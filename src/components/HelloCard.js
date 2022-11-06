import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import { AddCardForm } from "./AddCardForm";

export const HelloCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Image
        style={styles.imageCard}
        source={require("../../assets/auto.png")}
      />
      <View
        style={{
          flex: 1,
          alignSelf: "flex-end",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ fontSize: 40, color: "#fff" }}>+</Text>
        </TouchableOpacity>
      </View>

      {/*Modal*/}

      <View style={styles.centeredView}>
        <Modal
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{ flex: 6 }}>
            <AddCardForm setModalVisible={setModalVisible} />
          </View>

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Pressable
              style={styles.buttonX}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  imageCard: {
    width: 300,
    height: 200,
  },
  imageItem: {
    width: 150,
    height: 100,
    marginTop: -35,
    marginLeft: -10,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#000103",
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -60,
    //marginLeft: -30,
  },
  buttonX: {
    backgroundColor: "#000103",
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    //alignItems: "center",
    //marginTop: -60,
    //marginLeft: -30,
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
