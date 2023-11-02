import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons } from "../../constants";
import { MenuBar, HeaderBtn, ShowInfo } from "../../components";

const ShowDetail = () => {
    const router = useRouter();
    return(
        <SafeAreaView style={{ flex:1, backgroundColor: COLORS.backgroundColor }}>
            <Stack.Screen 
                options={{ 
                    headerStyle: { backgroundColor: COLORS.backgroundColor },
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <HeaderBtn 
                            iconUrl={ icons.arrowLeft }
                            dimension="60%"
                            handleBtnPress={ () => router.back() }
                        />
                    ), 
                    headerRight: () => (
                        <HeaderBtn 
                            iconUrl={ icons.heart }
                            dimension="80%"
                            handleBtnPress={ () => {} }
                        />
                    )
                 }}
            />
            <ScrollView showsVerticalScrollIndicator={ false }>
                <ShowInfo />
            </ScrollView>
            <MenuBar
                homeNavigation={ () => router.push('/home') }
                globeNavigation={ () => {}}
                searchNavigation={ () => router.push('/search') }
            />
        </SafeAreaView>
    );
};

export default ShowDetail;