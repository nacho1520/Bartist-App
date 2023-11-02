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
                <View style={{ width: "70%", flexDirection: "row", justifyContent: "space-between", "alignItems": "flex-start", marginVertical: 20 }}>
                    <View style={{ flexDirection: "column", gap: 5 }}>
                        <Text style={ styles.infoLabel }>Genero musical:</Text>
                        <Text style={ styles.infoLabel }>Fecha:</Text>
                        <Text style={ styles.infoLabel }>Horario:</Text>
                    </View>
                    <View style={{ flexDirection: "column", gap: 5 }}>
                        <Text style={ styles.info }>{ show.genre }</Text>
                        <Text style={ styles.info }>{ show.date }</Text>
                        <Text style={ styles.info }>{ show.time }</Text>
                    </View>
                </View>
                <View>
                    <Text style={ styles.showDesc }>{ show.description }</Text>
                </View>
            </View>
        </View>
    );
};

export default ShowInfo;