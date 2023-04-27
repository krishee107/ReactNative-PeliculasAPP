import currencyFormatter from 'currency-formatter';
import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons'

interface Props {
    movie: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: `row` }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text>
                        {movieFull.vote_average.toFixed(2)}
                    </Text>

                    <Text style={{ marginLeft: 5 }}>
                        -
                        {
                            movieFull.genres.map(g => (
                                <Text key={g.id}>{g.name}</Text>
                            ))
                        }
                    </Text>
                </View>

                {/* Historia */}
                <Text style={styles.title}>Historia</Text>
                <Text style={styles.overview}>{movieFull.overview}</Text>

                {/* Presupuesto */}
                <Text style={styles.title}>Presupuesto</Text>
                <Text style={{ fontSize: 18 }}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 10
    },
    overview: {
        fontSize: 16,
    }
});