import { useState } from "react";
import { ScrollView, View, SafeAreaView, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { ShowInfo, ShowTabs, ShowAbout, BulletPointsInfo, PrimaryBtn } from "../../components";
import useFetch from "../../hooks/useFetch";
import { COLORS } from "../../constants";


const tabs = ["Descripción", "Información del show", "Detalles tecnicos", "Oferta"];

const ShowDetail = () => {
    const [ activeTab, setActiveTab ] = useState(tabs[0]);
    const params = useLocalSearchParams();
    const { data, isLoading, error } = useFetch(`shows/${ params.id }`);
    
    const displayContent = () => {
        switch(activeTab) {
            case "Información del show": 
                return <BulletPointsInfo 
                            title="Información del show:"
                            labels={ ["Cantidad de bandas:", "Generos:","Fecha:", "Horario:", "Dirección:"] }
                            data={ [ data.bandsQuantity , data.genres.join(', ') , data.date.split('T')[0] , data.time + " hs", data.address.split(',')[0]] }
                        />;
            case "Descripción":
                return <ShowAbout 
                            description={ data.description }
                        />;
            case "Detalles tecnicos": 
                return <BulletPointsInfo 
                            title="Detalles tecnicos:"
                            labels={["Equipos disponibles:", "Escenario disponible", "Disposicion del publico:" ]}
                            data={[ data.musicItems.join(', ') , data.scenarioAvailable ? 'Si' : 'No'  , data.public ]}
                        />;
            case "Oferta": 
                return <BulletPointsInfo 
                            title="Oferta economica"
                            labels={["Pago inicial", "% ventas de entrada", "Costos adicionales", "Alimentación y bebida", "Forma de pago"]}
                            data={[ '$' + data.charter , data.sellsPercent , data.additionalCosts , data.foodIncluded ? 'Incluido' : 'No incluido' , data.payMethod]}
                        />;
            default: 
                break;
        }
    };

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            {
                isLoading ? (
                    <View>
                        <ActivityIndicator size="large" color={ COLORS.violet } />
                    </View>
                ) : error ? (
                    <Text>Algo salio mal...</Text>
                ) : (
                    <>
                        <ScrollView showsVerticalScrollIndicator={ false }>
                            <ShowInfo 
                                name={ data.name }
                                bar={ data.pubName }
                                image={ data.image }
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
                    </>
                )
            }
        </SafeAreaView>
    );
};

export default ShowDetail;