module.exports = (config, env) => {
  const eslintRule = config.module.rules[0].use[0]
  const babelRule = config.module.rules[1].oneOf[1]

  eslintRule.options.useEslintrc = true

  // set babelrc true
  // use export enhancements
  // "glamorous-displayname"

  babelRule.options.babelrc = true

  console.log('eslint', eslintRule)
  console.log('babel', babelRule)

  return config
}
