import React from "react";
import { View, SafeAreaView, ScrollView  } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { COLORS, icons } from "../../constants";
import { BarInfo } from "../../components";
import { bares } from "../../utils";

const BarProfile = () => {
    const params = useLocalSearchParams();
    const bar = bares.filter( (item) => item.id == params.id)[0]; 
    console.log(bar);
    return(
        <ScrollView showsVerticalScrollIndicator={ false }>
            <BarInfo
                name={ bar.name ? bar.name : "Desconocido"  }
                type={ bar.type ? bar.type : "Desconocido"  }
                image={ bar.image }
                bio={ bar.bio ? bar.bio : "Desconocido" }

            />
        </ScrollView>
    );
};

export default BarProfile;