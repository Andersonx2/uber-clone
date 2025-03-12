import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import "react-native-get-random-values";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          minLength={2}
          enablePoweredByContainer={false}
          returnKeyType={"search"}
          onPress={(data, datails = null) => {
            dispatch(
              setOrigin(
                {
                  location: datails.geometry.location,
                  description: data.description,
                },
                dispatch(setDestination(null))
              )
            );
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
        <NavFavourites/>

      </View>
    </SafeAreaView>
  );
};
////https://youtu.be/bvn_HYpix6s?t=6729

export default HomeScreen;

const styles = StyleSheet.create({});
