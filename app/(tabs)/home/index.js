import { View, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

import { images,COLORS } from "../../../constants";
import { HorizontalList, MenuBar, Welcome, ShowHorizontalList } from "../../../components";
import { bares, shows } from "../../../utils";

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