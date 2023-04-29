import { createContext, useState } from "react";

// 5 Añadirlo al app

interface ImageColors {
    primary: string,
    secondary: string,
}

interface ContextProps { // 3. Create the interface / types
    colors: ImageColors,
    prevColors: ImageColors,
    setMainColors: (colors: ImageColors) => void,
    setPrevMainColors: (colors: ImageColors) => void,
}

export const GradientContext = createContext({} as ContextProps); // 1. Create the context

export const GradientProvider = ({ children }: any) => { // 2. Create the provider
    const [colors, setColors] = useState<ImageColors>({
        primary: 'red',
        secondary: 'blue'
    })
    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const setMainColors = (colors: ImageColors) => { // 4. Create the functions
        setColors(colors)
    }
    const setPrevMainColors = (colors: ImageColors) => {
        setPrevColors(colors)
    }

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }}>
            {children}
        </GradientContext.Provider>
    )
}

