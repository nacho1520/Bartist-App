import { View, ScrollView, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

import { images, COLORS } from "../../constants";
import {
  HorizontalList,
  MenuBar,
  MyMarkers,
  ShowHorizontalList,
} from "../../components";

const bares = [
  {
    id: 1,
    name: "Temple",
    direction: "Costa Rica 4677",
    image: images.temple,
  },
  {
    id: 2,
    name: "Rabieta",
    direction: "Av. Libertador 3949",
    image: images.rabieta,
  },
  {
    id: 3,
    name: "Rabieta",
    direction: "Av. Libertador 3949",
    image: images.rabieta,
  },
  {
    id: 4,
    name: "Rabieta",
    direction: "Av. Libertador 3949",
    image: images.rabieta,
  },
  {
    id: 5,
    name: "Rabieta",
    direction: "Av. Libertador 3949",
    image: images.rabieta,
  },
];

const shows = [
  {
    id: 1,
    name: "Temple",
    direction: "22:00hs",
    image: images.temple,
  },
  {
    id: 2,
    name: "Rabieta",
    direction: "21:30hs",
    image: images.rabieta,
  },
  {
    id: 3,
    name: "Rabieta",
    direction: "18:30hs",
    image: images.rabieta,
  },
  {
    id: 4,
    name: "Rabieta",
    direction: "Av. Libertador 3949",
    image: images.rabieta,
  },
  {
    id: 5,
    name: "Rabieta",
    direction: "Av. Libertador 3949",
    image: images.rabieta,
  },
];

const Markers = () => {
  const router = useRouter();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, padding: 16 }}>
        <MyMarkers />
        <HorizontalList title={"Bares Favoritos "} data={bares} />
        <ShowHorizontalList title={"Shows Favoritos"} data={shows} />
        <ShowHorizontalList
          title={"Shows Favoritos Disponibles"}
          data={shows}
        />
      </View>
    </ScrollView>
  );
};

export default Markers;
