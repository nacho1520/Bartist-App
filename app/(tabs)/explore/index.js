import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { useRouter } from "expo-router";
import * as Location from "expo-location";
import useFetch from "../../../hooks/useFetch";

import { MapCallout } from "../../../components";
import { COLORS } from "../../../constants";

const Explore = () => {
  const [ location, setLocation ] = useState(null);
  const { data, isLoading, error } = useFetch('pubs');
  const router = useRouter();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status == 'granted') {
        console.log('Permission granted');
      } else {
        console.log('Permission not granted');
        return;
      }
      const loc = await Location.getCurrentPositionAsync();
      setLocation(loc);
    })();
  }, [])

  return (
    <View
      style={{ flex: 1, width: "100%", height: "100%", paddingVertical: 10 }}
    >
      {
        isLoading || location == null ? (
          <ActivityIndicator size="large" color={ COLORS.violet } />
        ) : error ? (
          <Text>Algo salio mal...</Text>
        ) : (
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
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
                  onPress={ () => router.push(`bar-profile/${ item._id }`)}
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
