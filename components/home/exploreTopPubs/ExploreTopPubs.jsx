import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import useFetch from "../../../hooks/useFetch";
import BarCard from "../../common/cards/barCard/BarCard";
import styles from "./exploretoppubs.style";
import { COLORS } from "../../../constants";

const ExploreTopPubs = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch('pubs/topPubs');

    return(
        <View style={{ marginTop: 10 }}>
            <View>
                <Text style={ styles.title } >Top bares</Text>
            </View>
            <View style={ styles.listContainer } >
                {
                    isLoading ? (
                        <View>
                            <ActivityIndicator size="large" color={ COLORS.violet } />
                        </View>
                    ) : error ? (
                        <Text>Algo salio mal...</Text>
                    ) : (
                        <FlatList 
                            data={ data }
                            renderItem={ ({ item }) => (
                                <BarCard 
                                    title={ item.name }
                                    subTitle={ item.type }
                                    imageUrl={ item.profileImage }
                                    handleNavigation={ () => router.push(`/bar-profile/${ item._id }`) }
                                />
                            )}
                            keyExtractor={ item => item?._id }
                            contentContainerStyle={{ columnGap: 16 }}
                            horizontal
                            showsHorizontalScrollIndicator={ false }
                        />
                    )
                }
            </View>
        </View>
    );
};

export default ExploreTopPubs;