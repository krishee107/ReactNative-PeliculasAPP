import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
    const colors = await ImageColors.getColors(uri, {}); // ImageColors.getColors(uri, {}) returns a promise with the colors of the image

    let primary;
    let secondary;

    if (colors.platform === "android") { // if the platform is android
        primary = colors.dominant || "blue"; // if colors.dominant is undefined, then use "blue"
        secondary = colors.average || "green"; // if colors.average is undefined, then use "green"
    } else { // if the platform is ios
        primary = colors.primary || "blue"; // if colors.primary is undefined, then use "blue"
        secondary = colors.secondary || "green"; // if colors.secondary is undefined, then use "green"
    }

    return [primary, secondary];
}