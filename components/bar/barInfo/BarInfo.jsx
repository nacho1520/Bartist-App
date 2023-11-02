import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./barinfo.style";
import { images } from "../../../constants";
import Rating from "../../common/rating/Rating";

const BarInfo = () => {
    return(
        <View>
            <View style={ styles.imgContainer }>
                <Image 
                    source={ images.temple }
                    resizeMode="cover"
                    style={ styles.profileImg }
                />
            </View>
            <View style={ styles.profileBody }>
                <View style={ styles.barHeader }>
                    <View style={ styles.titleContainer }>
                        <Text style={ styles.profileName }>Temple</Text>
                        <Text style={ styles.profileGenre }>Bar</Text>
                    </View>
                    <Rating />
                </View>
                <View>
                    <Text style={ styles.profileBio }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
                </View>
            </View>
        </View>
    );
};

export default BarInfo;