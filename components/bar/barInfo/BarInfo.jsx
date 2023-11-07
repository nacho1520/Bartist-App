import React from "react";
import { View, Image, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./barinfo.style";
import { images, icons } from "../../../constants";
import Rating from "../../common/rating/Rating";

const BarInfo = () => {
  return (
    <View>
      <View style={styles.imgContainer}>
        <Image
          source={images.temple}
          resizeMode="cover"
          style={styles.profileImg}
        />
      </View>
      <View style={styles.profileBody}>
        <View style={styles.barHeader}>
          <View style={styles.titleContainer}>
            <Text style={styles.profileName}>Temple</Text>
            <Text style={styles.profileGenre}>Bar</Text>
          </View>
          <Rating />
        </View>
        <View>
          <Text style={styles.profileBio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.{" "}
          </Text>
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
