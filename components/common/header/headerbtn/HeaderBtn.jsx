import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./headerbtn.style";

const HeaderBtn = ({ iconUrl, dimension }) => {
    return(
        <TouchableOpacity style={ styles.btnContainer } >
            <Image 
                source={ iconUrl }
                resizeMode="cover"
                style={ styles.btnImage(dimension) }
            />
        </TouchableOpacity>
    );
    
};

export default HeaderBtn;