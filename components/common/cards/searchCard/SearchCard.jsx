import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

import styles from "./searchcard.style";

const SearchCard = ({ name, direction, image, distance }) => {
    return(
        <TouchableOpacity style={ styles.card }>
            <View style={ styles.imgContainer }>
                <Image 
                    source={ image }
                    resizeMode="cover"
                    style={ styles.searchImg }
                />
            </View>
            <View style={ styles.infoContainer }>
                <Text style={ styles.title }>{ name }</Text>
                <Text style={ styles.info }>{ direction }</Text>
                <Text style={ styles.info }>{ distance }</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SearchCard;