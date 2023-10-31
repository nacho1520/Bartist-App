import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 50,
        backgroundColor: COLORS.fullBlack 
    },
    btnBox: {
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        width: 30
    },
    btnImage: {
        height: "100%",
        width: "100%"
    }
});

export default styles;