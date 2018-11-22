module.exports = {
  title: 'Rayout',
  components: 'src/components/**/[A-Z]*.js',
  webpackConfig: require('./webpack.config'),
  sections: [
    {
      name: 'Intro',
      content: 'docs/intro.md'
    },
    {
      name: 'Components',
      components: 'src/components/**/*.jsx',
      ignore: '**/*.test.jsx'
    }
  ]
}
