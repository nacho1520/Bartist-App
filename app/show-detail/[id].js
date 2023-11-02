import React from "react";
import { ScrollView } from "react-native";

import { ShowInfo } from "../../components";

const ShowDetail = () => {
    return(
        <ScrollView showsVerticalScrollIndicator={ false }>
            <ShowInfo />
        </ScrollView>
    );
};

export default ShowDetail;