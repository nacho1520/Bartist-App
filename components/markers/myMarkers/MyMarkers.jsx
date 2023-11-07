import React from "react";
import { View, Text } from "react-native";

import styles from "./myMarkers.style";

const MyMarkers = () => {
    return(
        <View style={{ marginBottom: 10 }}>
            <View style={ styles.container } >
                <Text style={ styles.welcomeMessage }>Mis marcadores</Text>
            </View>
        </View>
    );
};

export default MyMarkers;