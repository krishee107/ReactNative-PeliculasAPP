import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { Movie } from '../interfaces/movieInterface'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/Navigation'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { Loading } from '../components/Loading';
import { MovieDetails } from '../components/MovieDetails';
import { useNavigation } from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { // any, any = Params, Route
    movie: Movie
}

const screenHeight = Dimensions.get('screen').height;
export const DetailScreen = ({ route }: Props) => {
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id)

    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.posterImage}
                    />
                </View>

            </View>

            <View>
                <View style={styles.marginContainer} >
                    <Text style={styles.subtitle} >{movie.original_title}</Text>
                    <Text style={styles.title} >{movie.title}</Text>
                </View>
            </View>


            {isLoading ? <Loading /> : <MovieDetails movieFull={movieFull!} cast={cast} />}

            {/* Botton para cerrar */}
            <View style={styles.backButton}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Icon
                        color='white'
                        name='arrow-back-outline'
                        size={60}
                    />
                </TouchableOpacity>
            </View>



        </ScrollView >

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5,
    }
})