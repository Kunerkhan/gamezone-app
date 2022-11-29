import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

import { Card } from "../shared/components/card";

export const ReviewDetails = ({ route }) => {
    const { title, rating, body } = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <Text>{rating}</Text>
            </Card>
        </View>
    )
};
