import React from "react";
import { View, SafeAreaView, ScrollView  } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons } from "../../constants";
import { MenuBar, HeaderBtn, BarInfo } from "../../components";

const BarProfile = () => {
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
                <BarInfo />
            </ScrollView>
            <MenuBar
                homeNavigation={ () => router.push('/home') }
                globeNavigation={ () => {}}
                searchNavigation={ () => {} }
            />
        </SafeAreaView>
    );
};

export default BarProfile;