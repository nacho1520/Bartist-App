import { useState } from "react";
import { ScrollView, View, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { ShowInfo, ShowTabs, ShowAbout, BulletPointsInfo, PrimaryBtn } from "../../components";
import { COLORS } from "../../constants";
import { shows } from "../../utils";

const tabs = ["Descripción", "Información del show", "Detalles tecnicos", "Oferta"];

const ShowDetail = () => {
    const [ activeTab, setActiveTab ] = useState(tabs[0]);
    const params = useLocalSearchParams();
    const show = shows.filter( (item) => item.id == params.id )[0];
    
    const displayContent = () => {
        switch(activeTab) {
            case "Información del show": 
                return <BulletPointsInfo 
                            title="Información del show:"
                            labels={ ["Cantidad de bandas:", "Generos:","Fecha:", "Horario:", "Dirección:"] }
                            data={ [ show.bands , show.genres , show.date , show.time + " hs", show.direction] }
                        />;
            case "Descripción":
                return <ShowAbout 
                            description={ show.description }
                        />;
            case "Detalles tecnicos": 
                return <BulletPointsInfo 
                            title="Detalles tecnicos:"
                            labels={["Equipos disponibles:", "Escenario disponible", "Disposicion del publico:" ]}
                            data={[ show.items , show.scenarioAvailable , show.public ]}
                        />;
            case "Oferta": 
                return <BulletPointsInfo 
                            title="Oferta economica"
                            labels={["Pago inicial", "% ventas de entrada", "Costos adicionales", "Alimentación y bebida", "Forma de pago"]}
                            data={[ show.charter , show.sellsPercent , show.additionalCosts , show.food , show.payMethod]}
                        />;
            default: 
                break;
        }
    };

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <ScrollView showsVerticalScrollIndicator={ false }>
                <ShowInfo 
                    name={ show.name }
                    bar={ show.bar }
                    image={ show.image }
                />
                <View style={{ paddingHorizontal: 16 }}>
                    <ShowTabs tabs={ tabs } activeTab={ activeTab } setActiveTab={ setActiveTab } />
                    {
                        displayContent()
                    }
                </View>
            </ScrollView>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", marginVertical: 20 }}>
                <View style={{ width: "50%", }}>
                    <PrimaryBtn btnLabel="Aplicar" />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ShowDetail;