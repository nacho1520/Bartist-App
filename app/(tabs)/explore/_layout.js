import { SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images } from "../../../constants";
import Explore from "./index";
import { HeaderBtn } from "../../../components";

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
          headerTitle: "",
          headerLeft: () => (
            <HeaderBtn 
              iconUrl={icons.menu} 
              dimension="60%"
              handleBtnPress={ () => router.push('/menu') } 
            />
          ),
          headerRight: () => (
            <HeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handleBtnPress={handleProfilePress}
            />
          ),
        }}
      />
      <Explore />
    </SafeAreaView>
  );
};

export default Layout;
