import React from "react";
import { View, Image, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./barinfo.style";
import { images } from "../../../constants";
import Rating from "../../common/rating/Rating";

const BarInfo = ({ name, type, bio, image }) => {
  return (
    <View>
      <View style={styles.imgContainer}>
        <Image source={image} resizeMode="cover" style={styles.profileImg} />
      </View>
      <View style={styles.profileBody}>
        <View style={styles.barHeader}>
          <View style={styles.titleContainer}>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.profileGenre}>{type}</Text>
          </View>
          <Rating />
        </View>
        <View>
          <Text style={styles.profileBio}>{bio}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -34.622603773402005 - 0.004,
            longitude: -58.429877868296785,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: -34.622603773402 - 0.003,
              longitude: -58.429877868296785,
            }}
          ></Marker>
        </MapView>
      </View>
    </View>
  );
};

export default BarInfo;
