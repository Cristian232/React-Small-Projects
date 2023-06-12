const breakpoints = {
    "3xs": "320px",
    "2xs": "375px",
    xs: "425px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
}

const devices = {
    "3xs": `(min-width: ${breakpoints["3xs"]})`,
    "2xs": `(min-width: ${breakpoints["2xs"]})`,
    xs: `(min-width: ${breakpoints.xs})`,
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
    xl: `(min-width: ${breakpoints.xl})`,
    "2xl": `(min-width: ${breakpoints["2xl"]})`,
    hr: `(min-height: ${breakpoints.sm})`
}


export default devices;