import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Text, View, StyleSheet, Image } from 'react-native';

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View
            style={{
                ...styles.container,
            }}
        >
            <Image
                source={{ uri }}
                style={{ width: 50, height: 50, borderRadius: 10 }}
            />

            <View
                style={styles.actorInfo}
            >
                <Text>{actor.name}</Text>
                <Text>{actor.character}</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    name: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    character: {
        fontSize: 9,
        opacity: 0.7
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    }
});