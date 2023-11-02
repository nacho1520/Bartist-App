import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./profileinfo.style";
import { images, icons } from "../../../constants";
import SocialBtn from "../socialbtn/SocialBtn";
import PrimaryBtn from "../../common/buttons/primarybtn/PrimaryBtn";

const artist = {
    name: "Peso Pluma",
    genres: "Trap latino, regueton",
    bio: "Hassan Emilio Kabande Laija, conocido como Peso Pluma, es un cantante y compositor mexicano, que se caracteriza en los géneros de corridos tumbados, reguetón y trap latino.​​Su fama internacional comenzó en 2022, después de colaborar con cantantes como Luis R Conriquez, Natanael Cano y Eslabón Armado.",

};

const ProfileInfo = () => {
    return(
        <View>
            <View style={ styles.imgContainer }>
                <Image 
                    source={ images.profile }
                    resizeMode="cover"
                    style={ styles.profileImg }
                />
            </View>
            <View style={ styles.profileBody }>
                <View style={ styles.titleContainer }>
                    <Text style={ styles.profileName }>{ artist.name }</Text>
                    <Text style={ styles.profileGenre }>{ artist.genres }</Text>
                </View>
                <View>
                    <Text style={ styles.profileBio }>{ artist.bio }</Text>
                </View>
                <View style={{ marginTop: 15, flexDirection: "column", gap: 15 }}>
                    <SocialBtn iconUrl={ icons.instagram } socialMedia="Instagram" />
                    <SocialBtn iconUrl={ icons.twitter } socialMedia="Twitter" />
                </View>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                    <View style={{ width: "50%" }}>
                        <PrimaryBtn btnLabel="Editar" />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProfileInfo;