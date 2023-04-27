
import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../hooks/useMovies'
import { Loading } from '../components/Loading';
import { MoviePoster } from '../components/MoviePoster';
import { Dimensions } from 'react-native';

export const HomeScreen = () => {
    const { peliculasEnCine, isLoading } = useMovies();
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
                        data={peliculasEnCine}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                    />
                </View>

                {/* Peliculas populares */}
                <View style={{ backgroundColor: 'red', height: 260 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginHorizontal: 20 }}>
                        En cine
                    </Text>
                    <FlatList
                        data={peliculasEnCine}
                        renderItem={({ item }: any) => (
                            <MoviePoster movie={item} height={200} width={140} />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >

                    </FlatList>
                </View>

            </View>
        </ScrollView>

    )
}
