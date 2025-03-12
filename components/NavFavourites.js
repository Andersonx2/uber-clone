import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";

const data = [
  {
    id: "123",
    icon: "home",
    location: "home",
    destination: "Code Street,london, UK",
  },
  {
    id: "456",
    title: "briefcase",
    location: "work",
    destination: "London Eye, London, UK"
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item: {location,destination,icon}})=>(
        <TouchableOpacity>
          {/* <Icon
          style={tw`mr-4 rounded-full, bg-gray-300`}
          name={icon}
          type="ionicon"
          color="white"
          sinze={18}
          /> */}
        </TouchableOpacity>
      )}
    
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
