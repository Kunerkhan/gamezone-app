import { View, TextInput, Text, Button } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import { globalStyles } from "../styles/global";
import { FlatButton } from "../shared/components/button";

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(6),
    rating: yup.string()
        .required()
        .test('is-num-1-5', "Rating must be a number 1-5", (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        }),
});

export const ReviewForm = ({ addReview }) => {

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: "", body: "", rating: "" }}
                validationSchema={reviewSchema}
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
                            value={props.values.title}
                            onChangeText={props.handleChange("title")}
                            onBlur={props.handleBlur("title")}
                        />
                        <Text style={globalStyles.errorMessage}>
                            {props.touched.title && props.errors.title}
                        </Text>

                        <TextInput
                            multiline
                            minHeight={60}
                            style={globalStyles.input}
                            placeholder="Review body"
                            value={props.values.body}
                            onChangeText={props.handleChange("body")}
                            onBlur={props.handleBlur("body")}
                        />
                        <Text style={globalStyles.errorMessage}>
                            {props.touched.body && props.errors.body}
                        </Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            value={props.values.rating}
                            keyboardType="numeric"
                            onChangeText={props.handleChange("rating")}
                            onBlur={props.handleBlur("rating")}
                        />
                        <Text style={globalStyles.errorMessage}>
                            {props.touched.rating && props.errors.rating}
                        </Text>

                        <FlatButton
                            title="Submit"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}