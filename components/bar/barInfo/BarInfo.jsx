import React from "react";
import { View, Image, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

import styles from "./barinfo.style";
import Rating from "../../common/rating/Rating";
import { icons } from "../../../constants"; 

const BarInfo = ({ name, type, bio, image, latitude, longitude, rating, handleRatingPress }) => {
  return (
    <View>
      <View style={styles.imgContainer}>
        <Image source={{ uri: image }} resizeMode="cover" style={styles.profileImg} />
      </View>
      <View style={styles.profileBody}>
        <View style={styles.barHeader}>
          <View style={styles.titleContainer}>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.profileGenre}>{type}</Text>
          </View>
          <Rating 
            rate={ rating }
            rateIcon={ icons.star }
            unRateIcon={ icons.outlineWhiteStar }
            textLabel={ true }
            handlePress={ handleRatingPress }
          />
        </View>
        <View>
          <Text style={styles.profileBio}>{bio}</Text>
        </View>
      </View>
      {/* <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
          ></Marker>
        </MapView>
      </View> */}
    </View>
  );
};

export default BarInfo;
