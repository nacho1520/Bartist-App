import React, { useState, useEffect } from "react";
import { View, ScrollView, ActivityIndicator, Text  } from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import axios from "axios";

import useFetch from "../../hooks/useFetch";
import { COLORS, icons } from "../../constants";
import { BarInfo, HeaderBtn } from "../../components";

const artistId = 'bd708705-5f91-4742-a8a8-d9a1e7a7b1da';

const BarProfile = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const { data, isLoading, error } = useFetch(`pubs/${ params.id }`);
    const [ like, setLike ] = useState(false);

    useEffect(() => {
        if(data) {
            setLike(data.liked)
        }
    }, [data]);

    const likePub = async () => {
        const url = `https://bartist-backend.fly.dev/api/v1/artists/${artistId}/likes`;
        const body = {
            like: params.id
        };
        const header = {
            'content-type': 'application/json'
        };
        try {
            const response = await axios.post(url, body, header);
            console.log(response);
        } catch (e) {
            console.error('Error liking pub:', e.response ? e.response.data : e.message);
        }
    };
    
    const unlikePub = async () => {
        const url = `https://bartist-backend.fly.dev/api/v1/artists/${artistId}/likes`;
        const body = {
            like: params.id
        };
        const header = {
            'content-type': 'application/json'
        };
        try {
            const response = await axios.delete(url, { data: body, headers: header });
            console.log(response);
        } catch (e) {
            console.error('Error unliking pub:', e.response ? e.response.data : e.message);
        }
    };

    const handleLike = () => {
        setLike((prevLike) => !prevLike);
        if (like === true) {
            console.log('Le saco mg');
            unlikePub();
        } else {
            console.log(like);
            console.log('Le doy mg');
            likePub();
        }
    };
    
    return(
        <ScrollView showsVerticalScrollIndicator={ false }>
            {
                isLoading ? (
                    <View>
                        <ActivityIndicator size="large" color={ COLORS.violet }/>
                    </View>
                ) : error ? (
                    <Text>Algo salio mal...</Text>
                ) : (
                    <>
                        <Stack.Screen 
                            options={{
                                headerStyle: { backgroundColor: COLORS.backgroundColor },
                                headerShadowVisible: false,
                                headerTitle: "",
                                headerLeft: () => (
                                    <HeaderBtn 
                                        iconUrl={ icons.arrowLeft } 
                                        dimension="60%"
                                        handleBtnPress={ () => router.back() } 
                                    />
                                ),
                                headerRight: () => (
                                    <HeaderBtn 
                                        iconUrl={ like ? icons.fullHeart : icons.heart  }
                                        dimension="60%"
                                        handleBtnPress={ handleLike }
                                    />
                                )
                            }}
                        />
                        <BarInfo
                            name={ data.name }
                            type={ data.type }
                            image={ data.profileImage }
                            bio={ data.bio }
                            latitude={ data.latitude }
                            longitude={ data.longitude }
                        />
                    </>
                )
            }
        </ScrollView>
    );
};

export default BarProfile;