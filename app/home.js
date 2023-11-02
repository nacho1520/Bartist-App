import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { images, COLORS, icons } from '../constants';
import { HeaderBtn, HorizontalList, MenuBar, Welcome, ShowHorizontalList } from "../components";

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

const shows = [
    {
        id: 1,
        name: 'Peso Pluma',
        direction: 'Temple Bar',
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
    const router = useRouter();

    const handleProfilePress = () => {
        router.push('/profile');
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.backgroundColor },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerLeft: () => (
                        <HeaderBtn iconUrl={ icons.menu } dimension="60%"/>
                    ),
                    headerRight: () => (
                        <HeaderBtn 
                            iconUrl={ images.profile } 
                            dimension="100%"
                            handleBtnPress={ handleProfilePress }
                        />
                    )
                }}
            />
            <ScrollView showsVerticalScrollIndicator={ false }>
                <View style={{ flex: 1, padding: 16 }}>
                    <Welcome />
                    <HorizontalList title={ "Tus próximos shows" } data={ bares } />
                    <HorizontalList title={ "Bares cercanos" } data={ bares } />
                    <ShowHorizontalList title={ "Shows disponibles" } data={ shows } />
                    <ShowHorizontalList title={ "Shows disponibles" } data={ shows } />
                </View>
            </ScrollView>
            <MenuBar 
                homeNavigation={ () => router.push('/home') }
                searchNavigation={() => router.push('/search')}
                globeNavigation={ () => {} }
            />
        </SafeAreaView>
    )
};

export default Home;