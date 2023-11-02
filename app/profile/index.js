import React from "react";
import { ScrollView } from "react-native";

import { ProfileInfo } from "../../components";

const Profile = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={ false }>
            <ProfileInfo />
        </ScrollView>
    );
};

export default Profile;