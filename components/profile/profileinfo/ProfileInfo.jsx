import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";

import styles from "./profileinfo.style";
import { COLORS, icons } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import SocialBtn from "../socialbtn/SocialBtn";
import PrimaryBtn from "../../common/buttons/primarybtn/PrimaryBtn";

const artistId = 'bd708705-5f91-4742-a8a8-d9a1e7a7b1da';

const ProfileInfo = ({}) => {
    const { data, isLoading, error } = useFetch(`artists/${ artistId }`);
    
    return(
        <View>
            {
                isLoading ? (
                    <View>
                        <ActivityIndicator size="large" color={ COLORS.violet }/>
                    </View>
                ) : error ? (
                    <Text>Algo salio mal...</Text>
                ) : (
                    <>
                        <View style={ styles.imgContainer }>
                            <Image 
                                source={{ uri: data.profileImage }}
                                resizeMode="cover"
                                style={ styles.profileImg }
                            />
                        </View>
                        <View style={ styles.profileBody }>
                            <View style={ styles.titleContainer }>
                                <Text style={ styles.profileName }>{ data.name }</Text>
                                <Text style={ styles.profileGenre }>{ data.genres }</Text>
                            </View>
                            <View>
                                <Text style={ styles.profileBio }>{ data.bio }</Text>
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
                    </>
                )
            }
        </View>
    );
};

export default ProfileInfo;