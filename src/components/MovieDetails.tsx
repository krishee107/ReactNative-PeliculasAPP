import currencyFormatter from 'currency-formatter';
import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons'
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movie: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View
                    style={{
                        flexDirection: `row`,
                        alignItems: `center`,
                    }}
                >
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
                <View>
                    <Text style={styles.title}>Historia</Text>
                    <Text style={styles.overview}>{movieFull.overview}</Text>
                </View>

                {/* Presupuesto */}
                <View
                    style={{
                        marginTop: 10,
                        marginBottom: 20,
                    }}
                >
                    <Text style={styles.title}>Presupuesto</Text>
                    <Text style={styles.overview}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>
                </View>

                {/* Casting */}
                <View
                    style={{
                        marginTop: 10,
                        marginBottom: 100,
                    }}
                >
                    <Text style={styles.title}>Actores</Text>
                    <FlatList
                        data={cast} // data={movieFull.cast}
                        keyExtractor={(item) => item.id.toString()} // Esto es para que no de error el FlatList por no tener un key
                        renderItem={({ item }) => <CastItem actor={item} />} // Esto es para renderizar el componente CastItem
                        horizontal={true} // Esto es para que se muestre horizontalmente
                        showsHorizontalScrollIndicator={false} // Esto es para que no se muestre la barra de scroll
                        style={{
                            marginTop: 10,
                            height: 70,
                        }}
                    />
                </View>

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