import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./showinfo.style";
import { images } from "../../../constants";

const show = {
    name: "Show en Temple",
    bar: "Temple Bar",
    genre: "Rap",
    date: "04/11/2023",
    time: "23",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    direction: "Costa Rica 4677, CABA"
};

const ShowInfo = () => {
    return(
        <View>
            <View style={ styles.imgContainer }>
                <Image 
                    source={ images.temple }
                    resizeMode="cover"
                    style={ styles.showImg }
                />
            </View>
            <View style={ styles.showBody }>
                <View style={ styles.titleContainer }>
                    <Text style={ styles.showName }>{ show.name }</Text>
                    <Text style={ styles.showBar }>{ show.bar }</Text>
                </View>
            </View>
        </View>
    );
};

export default ShowInfo;