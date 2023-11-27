import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: 70,
        height: 70
    },
    infoContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10
    }
});

export default styles;