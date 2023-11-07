import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRouter } from "expo-router";

import ShowCard from "../../common/cards/showCard/ShowCard";
import styles from "./showhorizontallist.style";

const ShowHorizontalList = ({ title, data }) => {
    const router = useRouter();

    return(
        <View style={{ marginTop: 10 }}>
            <View>
                <Text style={ styles.title } >{ title }</Text>
            </View>
            <View style={ styles.listContainer } >
                <FlatList 
                    data={ data }
                    renderItem={ ({ item }) => (
                        <ShowCard 
                            title={ item.name }
                            subTitle={ item.direction }
                            imageUrl={ item.image }
                            handleNavigation={ () => router.push(`/show-detail/${ data.id }`) }
                        />
                    )}
                    keyExtractor={ item => item?.id }
                    contentContainerStyle={{ columnGap: 16 }}
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                />
            </View>
        </View>
    );
};

export default ShowHorizontalList;