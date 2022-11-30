import { StyleSheet, View, TextInput, Button } from "react-native";
import { Formik } from "formik";

import { globalStyles, images } from "../styles/global";

export const ReviewForm = ({ addReview }) => {

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: "", body: "", rating: "" }}
                onSubmit={(values, actions) => {
                    addReview(values);
                    actions.resetForm();
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review title"
                            onChangeText={props.handleChange("title")}
                            value={props.values.title}
                        />

                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={props.handleChange("body")}
                            value={props.values.body}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={props.handleChange("rating")}
                            value={props.values.rating}
                            keyboardType="numeric"
                        />

                        <Button
                            title="Submit"
                            color="maroon"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}