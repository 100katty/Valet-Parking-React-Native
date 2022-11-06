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
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

export const AddCardForm = () => {
  const [placas, onChangePlacas] = useState();
  const [modelo, onChangeModelo] = useState();
  const [color, onChangeColor] = useState();

  const progressStepsStyle = {
    activeStepIconBorderColor: "#000103",
    activeLabelColor: "#000103",
    activeStepNumColor: "white",
    activeStepIconColor: "#000103",
    completedStepIconColor: "#000103",
    completedProgressBarColor: "#000103",
    completedCheckColor: "#fff",
  };

  const buttonTextStyle = {
    color: "#686868",
    fontWeight: "bold",
  };
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <ProgressSteps {...progressStepsStyle}>
          <ProgressStep
            label="Informacion del auto"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center", flex: 1 }}>
              <Text>Agregar la Informacion</Text>
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
          </ProgressStep>
          <ProgressStep
            label="Fotografias"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text>Tome al menos una fotografias de auto</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Marcar daños"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text>
                Selecione con su dedo los lugares donde tener daño su auto
              </Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
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
    //alignItems: "center",
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
