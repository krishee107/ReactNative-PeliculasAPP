import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'

export const FadeScreen = () => {
    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing( // No es recomendable usar Animated.timing para animaciones complejas o que requieran de interacción del usuario
            opacity,
            {
                toValue: 1, // Valor al que llegará
                duration: 3000, // Duración de la animación
                useNativeDriver: true, // Mejora el rendimiento de la animación
            }
        ).start();
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            <Animated.View
                style={{
                    backgroundColor: 'blue',
                    width: 150,
                    height: 150,
                    borderColor: 'white',
                    borderWidth: 10,
                    marginBottom: 10,
                    opacity: opacity
                }}
            />

            <Button
                title="FadeIn"
                onPress={fadeIn}
            />

        </View>
    )
}
