import React, { useState } from "react";
import { ScrollView, ActivityIndicator, Text, View, Modal } from "react-native";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";

import { COLORS, icons } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { ProfileImage, Rating, PrimaryBtn, RatingCard, RateModal } from "../../components"; 

const artistId = 'bd708705-5f91-4742-a8a8-d9a1e7a7b1da';

const PubRating = () => {
    const params = useLocalSearchParams();
    const { data, isLoading, error } = useFetch(`/pubs/${ params.id }`);
    const { data: ratingData, isLoading: isLoadingRating, error: errorRating, refetch } = useFetch(`/pubs/${ params.id }/ratings`);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ submitting, setSubmitting ] = useState(false);
    const [ rate, setRate ] = useState({
        title: '',
        comment: '',
        rating: 2
    });

    const createRating = async () => {
        setSubmitting(true);
        const url = `https://bartist-backend.fly.dev/api/v1/pubs/${ params.id }/ratings`;
        const body = {
            rating: rate.rating,
            title: rate.title,
            description: rate.comment,
            requesterId: artistId
        };
        const header = {
            'content-type': 'application/json'
        };
        console.log(body);
        console.log(header);
        try {
            const response = await axios.post(url, body, header);
            console.log(response);
        } catch(e) {
            console.log(e.response.data);
        } finally {
            setSubmitting(false);
            setModalOpen(false);
            refetch();
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={ false } >
            {
                isLoading || isLoadingRating ? (
                    <ActivityIndicator size="large" color={COLORS.violet} />
                ) : error || errorRating ? (
                    <Text>Algo anda mal...</Text>
                ) : (
                    <View style={{ flexDirection: "column", gap: 25, width: "100%", flex: 1, padding: 16 }}>
                        <ProfileImage profileImg={ data.profileImage } />  
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <Text style={{ color: COLORS.whiteColor, fontSize: 36, fontWeight: "bold" }}>{ data.name }</Text>
                            <Rating 
                                rate={ data.rating }
                                rateIcon={ icons.star }
                                unRateIcon={ icons.outlineWhiteStar }
                                textLabel={ false }
                                handlePress={() => {}} 
                            />
                        </View>
                        <View style={{ width: "100%", justifyContent: "center", flexDirection: "row", marginVertical: 10 }}>
                            <View style={{ width: "50%" }}>
                                <PrimaryBtn btnLabel="Calificar" 
                                    handlePress={ () => { setModalOpen(true) } }
                                />
                            </View>
                        </View>
                            {
                                ratingData.map((item) => (
                                    <RatingCard 
                                        title={ item.title }
                                        comment={ item.description }
                                        rating={ item.rating }
                                        key={ item._id }
                                    />
                                ))
                            }
                        <RateModal 
                            rating={ rate }
                            setRating={ setRate }
                            open={ modalOpen } 
                            setOpen={ () => setModalOpen(false) } 
                            handleConfirm={ createRating } 
                            submitting={ submitting }
                        />
                    </View>
                )
            }
        </ScrollView>
        
    );
};

export default PubRating;