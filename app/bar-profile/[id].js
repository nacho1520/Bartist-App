import React from "react";
import { View, ScrollView, ActivityIndicator, Text  } from "react-native";
import { useLocalSearchParams } from "expo-router";

import useFetch from "../../hooks/useFetch";
import { COLORS, icons } from "../../constants";
import { BarInfo } from "../../components";

const BarProfile = () => {
    const params = useLocalSearchParams();
    const { data, isLoading, error } = useFetch(`pubs/${ params.id }`);
    
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
                    <BarInfo
                        name={ data.name }
                        type={ data.type }
                        image={ data.profileImage }
                        bio={ data.bio }
                        latitude={ data.latitude }
                        longitude={ data.longitude }
                    />
                )
            }
        </ScrollView>
    );
};

export default BarProfile;