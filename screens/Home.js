import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Card } from "../shared/components/card";

import { globalStyles } from "../styles/global";

export const Home = ({ navigation }) => {
    const [reviews, setReviews] = useState([
        { title: "Zelda, Bresh of Fresh air", rating: 5, body: "Lorem ipsum", key: "1" },
        { title: "Gotta catch them all(again)", rating: 3, body: "Lorem ipsum", key: "2" },
        { title: "Not so final fantasy", rating: 4, body: "Lorem ipsum", key: "3" },
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Review Details", item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
};
