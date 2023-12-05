import React from "react";
import { ScrollView, View, ActivityIndicator, Text } from "react-native";
import { useRouter } from "expo-router";

import useFetch from "../../../hooks/useFetch";
import { icons, COLORS } from "../../../constants";
import { HeaderBtn, SearchBar, SearchCard } from "../../../components";

const Search = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch('pubs');

    return(
        <ScrollView 
            showsVerticalScrollIndicator={ false }
            contentContainerStyle={{ justifyContent: "center", padding: 16 }}
        >
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <View style={{ width: "80%" }}>
                    <SearchBar />
                </View>
                <HeaderBtn 
                    iconUrl={ icons.filter }
                    dimension="70%"
                    handleBtnPress={ () => {} }
                />
            </View>
            <View style={{ flex: 1, flexDirection: "column", gap: 30, paddingVertical: 10}}>
                {
                    isLoading ? (
                        <ActivityIndicator size="large" color={ COLORS.violet } />
                    ) : error ? (
                        <Text>Algo salio mal...</Text>
                    ) : data.map((item) => (
                            <SearchCard 
                                name={ item.name }
                                direction={ item.address }
                                image={ item.profileImage }
                                handlePress={ () => router.push(`/bar-profile/${ item._id }`) }
                                key={ item._id }
                            />
                        )) 
                }
            </View>
        </ScrollView>
    );
};

export default Search;