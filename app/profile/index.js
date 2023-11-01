import React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import LinearGradient from "react-native-linear-gradient"; 

import { images, COLORS, icons } from "../../constants";
import { HeaderBtn, MenuBar, ProfileInfo } from "../../components";

const Profile = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.backgroundColor },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerLeft: () => (
                        <HeaderBtn 
                            iconUrl={ icons.arrowLeft } 
                            dimension="60%"
                            handleBtnPress={ () => router.back() } 
                        />
                    )
                }}
            />
            
            <ScrollView showsVerticalScrollIndicator={ false }>
                <ProfileInfo />
            </ScrollView>
            <MenuBar 
                homeNavigation={ () => router.push('/home') }
                searchNavigation={() => {}}
                globeNavigation={ () => {} }
            />
        </SafeAreaView>
    );
};

export default Profile;