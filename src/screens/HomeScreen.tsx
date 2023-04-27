
import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../hooks/useMovies'
import { Loading } from '../components/Loading';
import { MoviePoster } from '../components/MoviePoster';
import { Dimensions } from 'react-native';
import { HorizontalSlider } from '../components/HorizontalSlider';

export const HomeScreen = () => {
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { width: windowWidth } = Dimensions.get('window');

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Loading />
            </View>
        )
    }


    return (
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

    )
}
