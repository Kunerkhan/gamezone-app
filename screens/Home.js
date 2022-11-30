import { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ReviewForm } from "./ReviewForm";
import { Card } from "../shared/components/card";

import { globalStyles } from "../styles/global";

export const Home = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { title: "Zelda, Bresh of Fresh air", rating: 5, body: "Lorem ipsum", key: "1" },
        { title: "Gotta catch them all(again)", rating: 3, body: "Lorem ipsum", key: "2" },
        { title: "Not so final fantasy", rating: 4, body: "Lorem ipsum", key: "3" },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => (
            [
                review,
                ...currentReviews,
            ]
        ));

        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name="close"
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

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

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
    },

    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center"
    },

    modalClose: {
        marginTop: 40,
        marginBottom: 0,
    }
})