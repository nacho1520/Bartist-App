import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import styles from "./rating.style";
import { icons } from "../../../constants";

const Rating = ({ rate }) => {
    return(
        <TouchableOpacity style={ styles.ratingContainer }>
            <View style={ styles.starContainer }>
                <Image 
                    source={ icons.star }
                    resizeMode="cover"
                    style={ styles.starIcon }
                />
                <Image 
                    source={ icons.star }
                    resizeMode="cover"
                    style={ styles.starIcon }
                />
                <Image 
                    source={ icons.star }
                    resizeMode="cover"
                    style={ styles.starIcon }
                />
                <Image 
                    source={ icons.star }
                    resizeMode="cover"
                    style={ styles.starIcon }
                />
                <Image 
                    source={ icons.star }
                    resizeMode="cover"
                    style={ styles.starIcon }
                />
            </View>
            <Text style={ styles.rateLabel }>Ver comentarios</Text>
        </TouchableOpacity>
    );
};

export default Rating;