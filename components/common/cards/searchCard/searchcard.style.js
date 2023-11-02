import { StyleSheet } from "react-native";

import { COLORS } from "../../../../constants";

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.whiteColor,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 150
    },
    imgContainer: {
        width: "40%",
        justifyContent: "center",
        alignItems: "center"
    },
    searchImg: {
        width: "100%",
        height: "80%",
        borderRadius: 8
    },
    infoContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    info: {
        fontSize: 13,
        fontWeight: "normal"
    }
});

export default styles;