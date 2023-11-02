import { useState } from "react";
import { ScrollView, View, SafeAreaView } from "react-native";

import { ShowInfo, ShowTabs, ShowAbout, BulletPointsInfo, PrimaryBtn } from "../../components";
import { COLORS } from "../../constants";

const tabs = ["Descripción", "Información del show", "Detalles tecnicos", "Oferta"];

const ShowDetail = () => {
    const [ activeTab, setActiveTab ] = useState(tabs[0]);

    const displayContent = () => {
        switch(activeTab) {
            case "Información del show": 
                return <BulletPointsInfo 
                            title="Información del show:"
                            labels={ ["Cantidad de bandas:", "Generos:","Fecha:", "Horario:", "Dirección:"] }
                            data={ ["2", "Rap, Regueton, Trap", "04/11/2023", "23 hs", "Costa Rica 4677, CABA"] }
                        />;
            case "Descripción":
                return <ShowAbout 
                            description="Prepárate para una noche llena de ritmo y vibras urbanas en el emblemático bar Temple. Este evento especial, titulado 'Noche Urbana en Temple', promete ofrecer una experiencia musical única que fusiona los géneros de rap, reguetón y trap en un ambiente íntimo y acogedor."
                        />;
            case "Detalles tecnicos": 
                return <BulletPointsInfo 
                            title="Detalles tecnicos:"
                            labels={["Equipos disponibles:", "Escenario disponible", "Disposicion del publico:" ]}
                            data={["Rider, bateria", "Si", "De pie"]}
                        />;
            case "Oferta": 
                return <BulletPointsInfo 
                            title="Oferta economica"
                            labels={["Pago inicial", "% ventas de entrada", "Costos adicionales", "Alimentación y bebida", "Forma de pago"]}
                            data={["$100.000", "No aplica", "A cargo del artista", "Incluida", "Transferencia"]}
                        />;
            default: 
                break;
        }
    };

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
            <ScrollView showsVerticalScrollIndicator={ false }>
                <ShowInfo />
                <View style={{ paddingHorizontal: 16 }}>
                    <ShowTabs tabs={ tabs } activeTab={ activeTab } setActiveTab={ setActiveTab } />
                    {
                        displayContent()
                    }
                </View>
            </ScrollView>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", marginBottom: 20 }}>
                <View style={{ width: "50%", }}>
                    <PrimaryBtn btnLabel="Aplicar" />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ShowDetail;