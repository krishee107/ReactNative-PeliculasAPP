import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
    HomeScreen: undefined,
    DetailScreen: Movie,
}

const Stack = createStackNavigator<RootStackParams>();
export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, // Oculta el header de la app (por defecto es true) 
                cardStyle: { // Cambia el color de fondo de la app 
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={
                { cardStyle: { backgroundColor: "#f9fdff" } }
            } />
        </Stack.Navigator>
    );
}