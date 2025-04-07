import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { Icon, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { use } from "react";
import { useSelector } from "react-redux";
import { selectTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-x-10",
    title: "UberX",
    mutiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-11",
    title: "Uber Comfort",
    mutiplier: 1.4,
    image: "https://links.papareact.com/5w8",
  },

  {
    id: "uber-lux-12",
    title: "Uber Lux",
    mutiplier: 2.0,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCards = () => {
  const navigation = useNavigation();
  const [selected, setSelectd] = useState(null);
  const TravelTimeinmformation = useSelector(selectTimeInformation);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Selecione  a sua Corrida {/*  {#TravelTimeinmformation.distance.text}#} */}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, mutiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelectd(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />

            <View style={tw`-ml-4`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>
                {TravelTimeinmformation?.duration.text} tempo para viagem
              </Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(
                (TravelTimeinmformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  mutiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-900`}>
        <TouchableOpacity
          style={tw`bg-black py-3 m-2 ${!selected && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Escolher {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCards;

const styles = StyleSheet.create({});
