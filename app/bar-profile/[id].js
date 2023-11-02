import React from "react";
import { View, SafeAreaView, ScrollView  } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons } from "../../constants";
import { MenuBar, HeaderBtn, BarInfo } from "../../components";

const BarProfile = () => {
    const router = useRouter();
    return(
        <ScrollView showsVerticalScrollIndicator={ false }>
            <BarInfo />
        </ScrollView>
    );
};

export default BarProfile;