import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { useRouter } from "expo-router";
import useFetch from "../../../hooks/useFetch";

import { MapCallout } from "../../../components";
import { COLORS } from "../../../constants";

const Explore = () => {
  const { data, isLoading, error } = useFetch('pubs');
  const router = useRouter();

  return (
    <View
      style={{ flex: 1, width: "100%", height: "100%", paddingVertical: 10 }}
    >
      {
        isLoading ? (
          <ActivityIndicator size="large" color={ COLORS.violet } />
        ) : error ? (
          <Text>Algo salio mal...</Text>
        ) : (
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: -34.622603773402005 - 0.004,
              longitude: -58.429877868296785,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
            {data.map((item) => (
              <Marker
                key={item._id}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
              >
                <Callout 
                  onPress={ () => router.push(`bar-profile/${ bar._id }`)}
                >
                  <MapCallout 
                    name={ item.name } 
                    address={ item.type }
                  />
                </Callout>
          </Marker>
        ))}
        </MapView>
        )
      }
      
    </View>
  );
};

export default Explore;
