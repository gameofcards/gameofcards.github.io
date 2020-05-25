module.exports = {
  siteMetadata: {
    title: `Game of Cards Documentation`,
    name: `Michael Dito`,
    siteUrl: `https://gameofcards.github.io`,
    description: `The documentation site for all things game of cards.`,
    social: [
      {
        name: `github`,
        url: `https://github.com/gameofcards`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
