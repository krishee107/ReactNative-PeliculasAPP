
import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageColors from 'react-native-image-colors'
import { useMovies } from '../hooks/useMovies'
import { Loading } from '../components/Loading';
import { MoviePoster } from '../components/MoviePoster';
import { Dimensions } from 'react-native';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

export const HomeScreen = () => {
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { width: windowWidth } = Dimensions.get('window');

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying![index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const colors = await ImageColors.getColors(uri, {});

        console.log(colors);
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Loading />
            </View>
        )
    }


    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    {/* Carrousel principal */}
                    <View style={{ height: 440, }} >
                        <Carousel
                            data={nowPlaying!}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={getPosterColors}
                        />
                    </View>

                    {/* Peliculas populares */}
                    <HorizontalSlider title='Populares' movies={popular!} />
                    {/* Peliculas top */}
                    <HorizontalSlider title='Top Rated' movies={topRated!} />
                    {/* Peliculas upcoming */}
                    <HorizontalSlider title='Upcoming' movies={upcoming!} />

                </View>
            </ScrollView>
        </GradientBackground>


    )
}
