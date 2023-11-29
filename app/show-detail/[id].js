import { useState, useEffect } from "react";
import { ScrollView, View, SafeAreaView, ActivityIndicator, Text } from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import axios from "axios";

import { 
    ShowInfo, 
    ShowTabs, 
    ShowAbout, 
    BulletPointsInfo, 
    PrimaryBtn,
    HeaderBtn 
} from "../../components";
import useFetch from "../../hooks/useFetch";
import { COLORS, icons } from "../../constants";

const artistId = 'bd708705-5f91-4742-a8a8-d9a1e7a7b1da';

const tabs = ["Descripción", "Información del show", "Detalles tecnicos", "Oferta"];

const ShowDetail = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [ activeTab, setActiveTab ] = useState(tabs[0]);
    const [ like, setLike ] = useState(false);
    const { data, isLoading, error } = useFetch(`shows/${ params.id }`);

    useEffect(() => {
        if(data) {
            setLike(data.liked)
        }
    }, [data]);
    
    const likeShow = async () => {
        const url = `https://bartist-backend.fly.dev/api/v1/artists/${artistId}/likes`;
        const body = {
            like: params.id
        };
        const header = {
            'content-type': 'application/json'
        };
        try {
            const response = await axios.post(url, body, header);
            console.log(response);
        } catch (e) {
            console.error('Error liking pub:', e.response ? e.response.data : e.message);
        }
    };
    
    const unlikeShow = async () => {
        const url = `https://bartist-backend.fly.dev/api/v1/artists/${artistId}/likes`;
        const body = {
            like: params.id
        };
        const header = {
            'content-type': 'application/json'
        };
        try {
            const response = await axios.delete(url, { data: body, headers: header });
            console.log(response);
        } catch (e) {
            console.error('Error unliking pub:', e.response ? e.response.data : e.message);
        }
    };

    const handleLike = () => {
        setLike((prevLike) => !prevLike);
        if (like === true) {
            console.log('Le saco mg');
            unlikeShow();
        } else {
            console.log(like);
            console.log('Le doy mg');
            likeShow();
        }
    };

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
                                        iconUrl={ like ? icons.fullHeart : icons.heart }
                                        dimension="80%"
                                        handleBtnPress={ handleLike }
                                    />
                                )
                            }}
                        />
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