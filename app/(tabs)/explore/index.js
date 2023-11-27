import React from "react";
import { View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { useRouter } from "expo-router";

import { MapCallout } from "../../../components";
import { images } from "../../../constants";

const bares = [
  {
    id: 1,
    name: "Temple",
    latitude: -34.622603773402 - 0.003,
    longitude: -58.429877868296785,
  },
  {
    id: 2,
    name: "rabieta",
    latitude: -34.6232666 + 0.001,
    longitude: -58.4301666 + 0.004,
  },
  {
    id: 3,
    name: "La birra bar",
    latitude: -34.6232666 + 0.01,
    longitude: -58.4301666,
  },
  {
    id: 4,
    name: "Baum",
    latitude: -34.6232666 + 0.001,
    longitude: -58.4301666 - 0.01,
  },
];

const Explore = () => {
  const router = useRouter();

  return (
    <View
      style={{ flex: 1, width: "100%", height: "100%", paddingVertical: 10 }}
    >
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -34.622603773402005 - 0.004,
          longitude: -58.429877868296785,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {bares.map((bar) => (
          <Marker
            key={bar.id}
            coordinate={{
              latitude: bar.latitude,
              longitude: bar.longitude,
            }}
          >
            <Callout 
              onPress={ () => router.push(`bar-profile/${ bar.id }`)}
            >
              <MapCallout 
                name={ bar.name } 
                address="Bahia Blanca 115" 
                image={ images.temple } 
              />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Explore;
