import { View, ScrollView } from "react-native";

import { Welcome, ExplorePubs, ExploreShows, ExploreTopPubs } from "../../../components";

const Home = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={ false }>
            <View style={{ flex: 1, padding: 16 }}>
                <Welcome />
                <ExplorePubs />
                <ExploreTopPubs />
                <ExploreShows />
            </View>
        </ScrollView>
    )
};

export default Home;