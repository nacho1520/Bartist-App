import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native";

import { COLORS, icons } from "../../constants";
import { HeaderBtn } from "../../components";
import BarProfile from "./[id]";

const Layout = () => {
    const router = useRouter();
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <BarProfile />
        </SafeAreaView>
    );
}

export default Layout;