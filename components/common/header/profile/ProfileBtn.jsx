import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./profilebtn.style";

const ProfileBtn = ({ iconUrl }) => {
    return(
        <TouchableOpacity style={ styles.profileContainer } >
            <Image 
                source={ iconUrl }
                resizeMode="cover"
                style={ styles.profileImg }
            />
        </TouchableOpacity>
    );
    
};

export default ProfileBtn;