import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./barinfo.style";
import Rating from "../../common/rating/Rating";

const BarInfo = ({ name, type, bio, image }) => {
    return(
        <View>
            <View style={ styles.imgContainer }>
                <Image 
                    source={ image }
                    resizeMode="cover"
                    style={ styles.profileImg }
                />
            </View>
            <View style={ styles.profileBody }>
                <View style={ styles.barHeader }>
                    <View style={ styles.titleContainer }>
                        <Text style={ styles.profileName }>{ name }</Text>
                        <Text style={ styles.profileGenre }>{ type }</Text>
                    </View>
                    <Rating />
                </View>
                <View>
                    <Text style={ styles.profileBio }>{ bio }</Text>
                </View>
            </View>
        </View>
    );
};

export default BarInfo;