import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./barcard.style";

const BarCard = ({ title, subTitle, imageUrl }) => {
    return(
        <TouchableOpacity>
            <Image 
                source={ imageUrl }
                style={{ width: 114, height: 118, borderRadius: 12 }}
            />
            <Text style={ styles.title } >{ title }</Text>
            <Text style={ styles.subTitle }>{ subTitle }</Text>
        </TouchableOpacity>
    );
    
};

export default BarCard;