import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export const ExercisesView = (props: any) => {
    const { data } = props
    return (
        <ScrollView>
            {data.map((item, index) => (
                <View key={index} style={styles.dayContainer}>
                    <Text style={styles.day}>{item.day}</Text>
                    {item.exercises.map((exercise, exerciseIndex) => (
                        <Text key={exerciseIndex} style={styles.exercise}>
                            {exercise}
                        </Text>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    dayContainer: {
        marginBottom: 20,
    },
    day: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    exercise: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
});
