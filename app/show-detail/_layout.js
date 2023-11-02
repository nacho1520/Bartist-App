import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";

import { COLORS, icons } from "../../constants";
import { HeaderBtn } from "../../components";
import ShowDetail from "./[id]";

const Layout = () => {
    const router = useRouter();
    return(
        <>
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
            <ShowDetail />
        </>
        
    );
}

export default Layout;