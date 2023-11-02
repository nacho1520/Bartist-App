import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import styles from "./menubar.style";
import { icons } from "../../../constants";

const MenuBar = ({ homeNavigation, searchNavigation, globeNavigation }) => {
    return(
        <View style={ styles.container }>
            <TouchableOpacity style={ styles.btnBox } onPress={homeNavigation}>
                <Image 
                    source={ icons.home }
                    style={ styles.btnImage }
                    resizeMode="cover"
                />
            </TouchableOpacity>
            <TouchableOpacity style={ styles.btnBox } onPress={searchNavigation}>
                <Image 
                    source={ icons.search }
                    style={ styles.btnImage }
                    resizeMode="cover"
                />
            </TouchableOpacity>
            <TouchableOpacity style={ styles.btnBox } onPress={globeNavigation}>
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

