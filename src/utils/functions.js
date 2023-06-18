// ** Custom Database Imports
import { progressColor } from './colors'

// ** Function For Setting Progess Bar Color
export const progressBarColor = (color) => {
    if (color <= 25) return progressColor['red'];
    if (color > 25 && color <= 65) return progressColor['orange'];
    if (color > 65) return progressColor['green']
}

// ** Function For Capitalize First Letter
export const capitalizeFirstLetter = (str) => {
    let capitalized = ''
    if (str) {
        capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    }

    return capitalized;
}

// ** Function for Checking Bookmarks
export const isBookmarked = (id, bookmarks) => {
    const found = bookmarks?.some((item) => item.id === id);
    return found ? 'active' : '';
}