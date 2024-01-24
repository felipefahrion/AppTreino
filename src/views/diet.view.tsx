import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export const DietView = (props: any) => {
    const { data } = props
    return (
        <ScrollView>
            {data.map((item, index) => (
                <View key={index} style={styles.container}>
                    <Text style={styles.title}>Refeição {item.meal}</Text>
                    <Text style={styles.subtitle}>{item.time}</Text>
                    <View>
                        {item.food.map((foodItem, foodItemIndex) => (
                            <Text key={foodItemIndex} style={styles.foods}>
                                {foodItem}
                            </Text>
                        ))}
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 12,
        marginBottom: 10,
    },
    foods: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
});
