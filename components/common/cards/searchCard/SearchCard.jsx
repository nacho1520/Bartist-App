import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

import styles from "./searchcard.style";

const SearchCard = ({ name, direction, image, handlePress}) => {
    return(
        <TouchableOpacity style={ styles.card } onPress={ handlePress }>
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
            </View>
        </TouchableOpacity>
    );
};

export default SearchCard;