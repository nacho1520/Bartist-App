import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack } from "expo-router";

import { images, COLORS } from '../constants';
import { ProfileBtn, HorizontalList } from "../components";

const bares = [
    {
        id: 1,
        name: 'Temple',
        direction: 'Costa Rica 4677',
        image: images.temple
    },
    {
        id: 2,
        name: 'Rabieta',
        direction: 'Av. Libertador 3949',
        image: images.rabieta
    },
    {
        id: 3,
        name: 'Rabieta',
        direction: 'Av. Libertador 3949',
        image: images.rabieta
    },
    {
        id: 4,
        name: 'Rabieta',
        direction: 'Av. Libertador 3949',
        image: images.rabieta
    },
    {
        id: 5,
        name: 'Rabieta',
        direction: 'Av. Libertador 3949',
        image: images.rabieta
    }
];

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.backgroundColor },
                    headerShadowVisible: false,
                    headerTitle: "BARTIST",
                    headerTitleStyle: { color: COLORS.whiteColor, fontSize: 32  },
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <ProfileBtn iconUrl={ images.profile }/>
                    ),
                }}
            />
            <ScrollView showsVerticalScrollIndicator={ false }>
                <View style={{ flex: 1, padding: 16 }}>
                    <HorizontalList title={ "Tus próximos shows" } data={ bares } />
                    <HorizontalList title={ "Bares cercanos" } data={ bares } />
                    <HorizontalList title={ "Shows disponibles" } data={ bares } />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Home;