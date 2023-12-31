import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  imgContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImg: {
    width: 200,
    height: 200,
    borderRadius: 360,
  },
  profileBody: {
    padding: 16,
  },
  barHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  profileName: {
    color: COLORS.whiteColor,
    fontSize: 36,
    fontWeight: "bold",
  },
  profileGenre: {
    color: COLORS.whiteColor,
    fontSize: 16,
    fontWeight: "500",
  },
  profileBio: {
    color: COLORS.whiteColor,
    fontSize: 18,
    fontWeight: "normal",
  },
  container: {
    flex: 1,
    width: "100%",
    height: 400,
    padding: 10,
  },
  map: {
    width: "100%",
    height: 350,
  },
  mapPin: {
    height: 50,
    width: 50,
  },
});

export default styles;
