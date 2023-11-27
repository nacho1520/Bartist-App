import React from "react";
import { View, Text } from "react-native";

import  styles from "./mapcallout.style";

const MapCallout = ({ name, address }) => {
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