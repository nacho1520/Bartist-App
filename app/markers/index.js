import { View, ScrollView, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import { COLORS } from "../../constants";
import { SearchCard } from "../../components";
import useFetch from "../../hooks/useFetch";

const artistId = 'bd708705-5f91-4742-a8a8-d9a1e7a7b1da';

const Markers = () => {
  const { data, isLoading, error } = useFetch(`artists/${ artistId }/likes`);
  const router = useRouter();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, padding: 16 }}>
        {
          isLoading ? (
            <ActivityIndicator size="large" color={ COLORS.violet } />
          ) : error ? (
            <Text>Algo salio mal...</Text>
          ) : (
            <View style={{ flex: 1, flexDirection: "column", gap: 30, paddingVertical: 10}}>
              {
                data.map((item) => (
                    <SearchCard 
                        name={ item.name }
                        direction={ item.address ? item.address : item.date }
                        image={  item.profileImage ? item.profileImage : item.image }
                        key={ item._id }
                    />
                ))
              }
            </View>
          )
        }
      </View>
    </ScrollView>
  );
};

export default Markers;
