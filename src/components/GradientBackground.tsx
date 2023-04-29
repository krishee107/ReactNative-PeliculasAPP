import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';

interface Props {
    children: JSX.Element | JSX.Element[] // JSX.Element is a component 
}
export const GradientBackground = ({ children }: Props) => {
    const { colors } = useContext(GradientContext);

    return (
        <View style={{
            flex: 1,
        }}>
            <LinearGradient // add Linear Gradient
                colors={[colors.primary, colors.secondary, 'white']} // gradient colors
                style={{
                    ...StyleSheet.absoluteFillObject // fill the entire screen
                }}
                start={{ x: 0.1, y: 0.1 }} // gradient start
                end={{ x: 0.5, y: 0.7 }} // gradient end
            />
            {children}
        </View>
    )
}
