import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import styles from "./menubar.style";
import { icons } from "../../../constants";

const MenuBar = () => {
    return(
        <View style={ styles.container }>
            <TouchableOpacity style={ styles.btnBox }>
                <Image 
                    source={ icons.home }
                    style={ styles.btnImage }
                    resizeMode="cover"
                />
            </TouchableOpacity>
            <TouchableOpacity style={ styles.btnBox }>
                <Image 
                    source={ icons.search }
                    style={ styles.btnImage }
                    resizeMode="cover"
                />
            </TouchableOpacity>
            <TouchableOpacity style={ styles.btnBox }>
                <Image 
                    source={ icons.globe }
                    style={ styles.btnImage }
                    resizeMode="cover"
                />
            </TouchableOpacity>
        </View>
    );
};

export default MenuBar;

