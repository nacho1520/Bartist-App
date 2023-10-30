import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack } from "expo-router";

import { images, COLORS } from '../constants';
import { ProfileBtn } from "../components";


const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.backgroundColor },
                    headerShadowVisible: false,
                    headerTitle: "BARTIST",
                    headerTitleStyle: { color: COLORS.whiteColor },
                    headerTitleAlign: "center",
                    headerLeft: () => (
                        <ProfileBtn iconUrl={ images.profile }/>
                    ),
                }}
            />
        </SafeAreaView>
    )
};

export default Home;