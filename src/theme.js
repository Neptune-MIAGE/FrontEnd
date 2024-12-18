import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,  // Assure-toi que cette option est correcte
    },
});
export default theme;