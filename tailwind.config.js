import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        colors: {
            ...colors,
            primary: {
                DEFAULT: "#3AAFA9",
            },
            secondary: {
                DEFAULT: "#2B7A7B",
            },
            softWhite: {
                DEFAULT: "#F8F9F9",
            },
            softBlack: {
                DEFAULT: "#17252A",
            },
            teal: {
                100: "#d3f1f0",
                200: "#a8e2e0",
                300: "#7cd3d1",
                400: "#50c4c1",
                500: "#3AAFA9",
                600: "#2c8c8b",
                700: "#206a6a",
                800: "#164848",
                900: "#0e3333",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                archivo: ["Archivo"],
                poppins: ["Poppins"],
                roboto: ["Roboto"],
            },
        },
    },

    plugins: [forms, typography],
};
