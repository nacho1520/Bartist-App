import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

import styles from "./socialbtn.style";

const SocialBtn = ({ iconUrl, socialMedia }) => {
    return(
        <TouchableOpacity style={ styles.btnContainer }>
            <Image 
                source={ iconUrl }
                resizeMode="cover"
                style= { styles.socialIcon }
            />
            <Text style={ styles.socialMedia }>{ socialMedia }</Text>
        </TouchableOpacity>
    );
};

export default SocialBtn;