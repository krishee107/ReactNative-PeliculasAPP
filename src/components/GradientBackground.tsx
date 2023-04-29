import React, { useContext, useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import useFade from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[] // JSX.Element is a component 
}
export const GradientBackground = ({ children }: Props) => {
    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);
    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut();
        });
    }, [colors])

    return (
        <View style={{
            flex: 1,
        }}>
            <LinearGradient // add Linear Gradient
                colors={[prevColors.primary, prevColors.secondary, 'white']} // gradient colors
                style={{
                    ...StyleSheet.absoluteFillObject // fill the entire screen
                }}
                start={{ x: 0.1, y: 0.1 }} // gradient start
                end={{ x: 0.5, y: 0.7 }} // gradient end
            />

            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    opacity
                }}
            >
                <LinearGradient // add Linear Gradient
                    colors={[colors.primary, colors.secondary, 'white']} // gradient colors
                    style={{
                        ...StyleSheet.absoluteFillObject // fill the entire screen
                    }}
                    start={{ x: 0.1, y: 0.1 }} // gradient start
                    end={{ x: 0.5, y: 0.7 }} // gradient end
                />
            </Animated.View>
            {children}
        </View >
    )
}
function setPrevMainColors(colors: ImageColors) {
    throw new Error('Function not implemented.');
}

