import React from "react";
import { View, Text, Image } from "react-native";

import { images } from "../../../constants";
import  styles from "./mapcallout.style";

const MapCallout = ({ name, address, image }) => {
    return(
        <View style={ styles.container }>
            <View style={ styles.infoContainer }>
                <Text>{ name }</Text>
                <Text>{ address }</Text>
            </View>
        </View>
    );
};

export default MapCallout;