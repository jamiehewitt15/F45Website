import Typography from "typography"

const typography = new Typography({
    
    headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
        
    ],
    bodyFontFamily: ["Roboto", "sans-serif"]
})

typography.injectStyles();

export const { scale, rhythm, options } = typography
export default typography