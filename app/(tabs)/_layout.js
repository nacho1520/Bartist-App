import { Tabs } from "expo-router";
import { Image } from "react-native";

import { COLORS, icons } from "../../constants";

const TabLayout = () => {
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor: COLORS.violet,
            tabBarStyle: {
                height: 50,
                backgroundColor: COLORS.backgroundColor,
                borderTopColor: COLORS.backgroundColor
            }
        }}>
            <Tabs.Screen name="home" options={{
                title: "Home",
                tabBarIcon: () => (
                    <Image 
                        source={ icons.home }
                        style={{ width: 30, height: 30 }}
                        resizeMode="cover"
                    />
                )
            }} />
            <Tabs.Screen name="search" 
                options={{
                    title: "Search",
                    tabBarIcon: () => (
                        <Image 
                            source={ icons.search }
                            style={{ width: 30, height: 30 }}
                            resizeMode="cover"
                        />
                    )
                }}
            />
            <Tabs.Screen name="explore" 
                options={{
                    title: "Explore",
                    tabBarIcon: () => (
                        <Image 
                            source={ icons.globe }
                            style={{ width: 30, height: 30 }}
                            resizeMode="cover"
                        />
                    )
                }}
            />
        </Tabs>
    );
};

export default TabLayout;