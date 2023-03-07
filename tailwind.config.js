const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Neutra Text Alt', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                current: 'currentColor',
                'white': '#FFFFFF',
                'astudio': '#C0E3E5',
                'astudio-yellow': '#FDC936',
                'astudio-black': '#322625'
            }
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
