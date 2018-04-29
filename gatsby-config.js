module.exports = {
  siteMetadata: {
    title: 'Daniel Thompson - Full Stack Developer',
    description:
      'Personal website website for Daniel Thompson, a full-stack developer with a focus on modern JavaScript tooling',
    keywords: 'javascript, react, developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Titillium Web'],
      },
    },
  ],
}
