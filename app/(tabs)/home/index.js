import { View, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

import { images,COLORS } from "../../../constants";
import { HorizontalList, MenuBar, Welcome, ShowHorizontalList } from "../../../components";

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
    return (
        <ScrollView showsVerticalScrollIndicator={ false }>
            <View style={{ flex: 1, padding: 16 }}>
                <Welcome />
                <HorizontalList title={ "Tus próximos shows" } data={ bares } />
                <HorizontalList title={ "Bares cercanos" } data={ bares } />
                <ShowHorizontalList title={ "Shows disponibles" } data={ shows } />
                <ShowHorizontalList title={ "Shows disponibles" } data={ shows } />
            </View>
        </ScrollView>
    )
};

export default Home;