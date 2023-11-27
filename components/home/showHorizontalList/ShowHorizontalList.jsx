import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import { COLORS } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import ShowCard from "../../common/cards/showCard/ShowCard";
import styles from "./showhorizontallist.style";

const ShowHorizontalList = ({ title, query }) => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch(query);

    return(
        <View style={{ marginTop: 10 }}>
            <View>
                <Text style={ styles.title } >{ title }</Text>
            </View>
            <View style={ styles.listContainer } >
                {
                    isLoading ? (
                        <ActivityIndicator size="large" color={ COLORS.violet }/>
                    ) : error ? (
                        <Text>Algo salio mal...</Text>
                    ) : (
                        <FlatList 
                            data={ data }
                            renderItem={ ({ item }) => (
                                <ShowCard 
                                    title={ item.name }
                                    subTitle={ item.date.split('T')[0] }
                                    imageUrl={ item.image }
                                    handleNavigation={ () => router.push(`/show-detail/${ item._id }`) }
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

export default ShowHorizontalList;