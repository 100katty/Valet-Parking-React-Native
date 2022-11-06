//import liraries
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { HelloCard } from "../components/HelloCard";
import { ItemCar } from "../components/ItemCar";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "WLU-98-68",
    marca: "KIA",
    color: "Rojo",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "NAA-78-63",
    marca: "Suzuki",
    color: "Negro",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "AOO-80-12",
    marca: "Honda",
    color: "Gris",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72155",
    title: "AOO-80-12",
    marca: "Honda",
    color: "Gris",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72889",
    title: "AOO-80-12",
    marca: "Honda",
    color: "Gris",
  },
];

// create a component
export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardTop}>
        <Text style={styles.nameText}>¡Hola!, Catalina</Text>
      </View>
      <View style={styles.cardMid}>
        <HelloCard />
      </View>
      <View style={styles.cardList}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <ItemCar title={item.title} marca={item.marca} color={item.color} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  cardTop: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 10,
  },
  cardMid: {
    flex: 3,
    marginBottom: 10,
    borderRadius: 10,
  },
  cardList: {
    flex: 7,
    borderRadius: 10,
  },
  nameText: {
    fontSize: 30,
  },
});
