import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {

    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedmarkers(["origin", "destination"],{
        edgePadding:{top:50, right:50,bottom:50, left:50}
    });
  
}, [origin, destination]);

  return (
    <View style={tw`flex-1`}>
      {" "}
      {/* Garante que o container ocupa toda a tela */}
      <View style={{ flex: 1 }}>
        {" "}
        {/* Define um tamanho para o mapa */}
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          madType="mutedStardart"
          initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {origin && destination && (
            <MapViewDirections
              origin={origin.description}
              destination={destination.description}
              apikey={GOOGLE_MAPS_API_KEY}
              stonkeWidth={40}
              strokeColor="black"
            />
          )}
          ,
          {origin?.location && (
            <Marker
              coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
              }}
              title="Origin"
              description={origin.description}
              identifier="origin"
            />
          )}
          {destination?.location && (
            <Marker
              coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
              }}
              title="Origin"
              description={destination.description}
              identifier="origin"
            />
          )}
        </MapView>
      </View>
    </View>
  );
};

export default Map;
