import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";

import { COLORS, icons } from "../../constants";
import { HeaderBtn } from "../../components";
import BarProfile from "./[id]";

const Layout = () => {
    const router = useRouter();
    return(
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
            <BarProfile />
        </SafeAreaView>
    );
}

export default Layout;