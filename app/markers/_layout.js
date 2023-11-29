import { SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images } from "../../constants";
import Home from "./index";
import { HeaderBtn } from "../../components";
import Markers from "./index";

const Layout = () => {
  const router = useRouter();

  const handleProfilePress = () => {
    router.push("/profile");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.backgroundColor },
          headerShadowVisible: false,
          headerTitle: "Mis Favoritos",
          headerTitleStyle: {
            color: COLORS.whiteColor
          },
          headerLeft: () => (
            <HeaderBtn 
              iconUrl={icons.arrowLeft} 
              dimension="60%"
              handleBtnPress={ () => router.back() } 
            />
          )
        }}
      />
      <Markers />
    </SafeAreaView>
  );
};

export default Layout;
