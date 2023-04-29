import { useRef } from 'react';
import { Animated } from 'react-native';
export default function useFade() {
    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = (callback?: Function) => {
        Animated.timing( // No es recomendable usar Animated.timing para animaciones complejas o que requieran de interacción del usuario
            opacity,
            {
                toValue: 1, // Valor al que llegará
                duration: 300, // Duración de la animación
                useNativeDriver: true, // Mejora el rendimiento de la animación
            }
        ).start(() => callback ? callback() : null);
    }

    const fadeOut = () => {
        Animated.timing( // No es recomendable usar Animated.timing para animaciones complejas o que requieran de interacción del usuario
            opacity,
            {
                toValue: 0, // Valor al que llegará
                duration: 300, // Duración de la animación
                useNativeDriver: true, // Mejora el rendimiento de la animación
            }
        ).start();
    }

    return {
        opacity,
        fadeIn,
        fadeOut,
    }
}
