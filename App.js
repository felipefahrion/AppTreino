import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExercisesView } from './src/views/exercises.view';
import { PreWorkoutView } from './src/views/pre-workout.view';
import { DietView } from './src/views/diet.view';
import { dataExxercises } from './src/data-exercises';
import { dataDiet } from './src/data-diet';

export default function App() {
  const [currentView, setCurrentView] = useState(0);

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Plano de Exercícios</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setCurrentView(0)} style={styles.button}>
            <Text>Exercícios</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentView(1)} style={styles.button}>
            <Text>Aquecimento</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentView(2)} style={styles.button}>
            <Text>Dieta</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.viewContainer}>
          {currentView === 0 && <ExercisesView data={dataExxercises} />}
          {currentView === 1 && <PreWorkoutView />}
          {currentView === 2 && <DietView data={dataDiet} />}

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 30,
  },
  body: {
    flex: 1,
    margin: 20,
  },
  viewContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },

});
