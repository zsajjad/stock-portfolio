import Typography from 'typography';

export default new Typography({
  baseLineHeight: 1.5,
  headerWeight: '500',
  scaleRatio: 3,
  googleFonts: [
    {
      name: 'Inter',
      styles: ['700', '600', '500', '400'],
    },
  ],
  headerFontFamily: [
    'Inter',
    'Open Sans',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Inter', 'Open Sans', 'sans-serif'],
  baseFontSize: '14px',
  overrideThemeStyles: ({ rhythm }) => ({
    h1: {
      marginTop: rhythm(2),
      marginBottom: rhythm(2),
    },
    'h2,h3': {
      marginTop: rhythm(2),
      marginBottom: rhythm(2),
    },
    button: {
      fontSize: rhythm(1),
    },
    img: {
      marginBottom: 0,
    },
  }),
});
