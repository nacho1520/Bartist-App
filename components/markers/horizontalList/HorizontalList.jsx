import React from "react";
import { View, Text, FlatList } from "react-native";
import { useRouter } from "expo-router";

import BarCard from "../../common/cards/barCard/BarCard";
import styles from "./horizontallist.style";

const HorizontalList = ({ title, data }) => {
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
                        <BarCard 
                            title={ item.name }
                            subTitle={ item.direction }
                            imageUrl={ item.image }
                            handleNavigation={ () => router.push(`/bar-profile/${ data.id }`) }
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

export default HorizontalList;