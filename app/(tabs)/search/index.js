import React from "react";
import { SafeAreaView, ScrollView, View, FlatList  } from "react-native";
import { Stack, useRouter } from "expo-router";

import { images, COLORS, icons } from "../../../constants";
import { HeaderBtn, MenuBar, SearchBar, SearchCard } from "../../../components";

const bares = [
    {
        id: 1,
        name: 'Temple',
        direction: 'Costa Rica 4677',
        image: images.temple,
        distance: "600m"
    },
    {
        id: 2,
        name: 'Rabieta',
        direction: 'Av. Libertador 3949',
        image: images.rabieta,
        distance: "600m"
    },
    {
        id: 3,
        name: 'Rabieta',
        direction: 'Av. Libertador 3949',
        image: images.rabieta,
        distance: "600m"
    },
    {
        id: 4,
        name: 'Rabieta',
        direction: 'Av. Libertador 3949',
        image: images.rabieta,
        distance: "600m"
    },
    {
        id: 5,
        name: 'Rabieta',
        direction: 'Av. Libertador 3949',
        image: images.rabieta,
        distance: "600m"
    }
];

const Search = () => {
    const router = useRouter();

    const handleProfilePress = () => {
        router.push('/profile');
    };

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
                        bares.map((bar) => (
                            <SearchCard 
                                name={ bar.name }
                                direction={ bar.direction }
                                distance={ bar.distance }
                                image={  bar.image }
                                key={ bar.id }
                            />
                        ))
                    }
                </View>
            </ScrollView>
    );
};

export default Search;