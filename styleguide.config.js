const path = require('path')

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
  ],
  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.jsx') || path.basename(componentPath, '.js')
    return `import {${name}} from 'rayout'`
  }
}
