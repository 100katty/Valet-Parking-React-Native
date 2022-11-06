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
import { Entypo } from "@expo/vector-icons";
import { EditCardForm } from "./EditCardForm";

export const ItemCar = ({ title, marca, color }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.item}>
      <View>
        <Image
          style={styles.imageItem}
          source={require("../../assets/auto.png")}
        />
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.placa}>{title}</Text>
        <View style={styles.rowcard}>
          <Text style={styles.marca}>{marca}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.edittButon}
        onPress={() => setModalVisible(true)}
      >
        <Entypo name="edit" size={24} color="black" />
      </TouchableOpacity>

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
            <EditCardForm setModalVisible={setModalVisible} />
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

  imageItem: {
    width: 150,
    height: 100,
    marginTop: -35,
    marginLeft: -10,
    marginRight: 10,
  },

  item: {
    backgroundColor: "#E5E8E8",
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  placa: {
    fontSize: 23,
  },
  marca: {
    fontSize: 15,
  },

  rowcard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  edittButon: {
    backgroundColor: "#F4F6F6",
    borderRadius: 100,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
