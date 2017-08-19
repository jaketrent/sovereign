module.exports = (config, env) => {
  const eslintRule = config.module.rules[0].use[0]
  const babelRule = config.module.rules[1].oneOf[1]

  eslintRule.options.useEslintrc = true
  babelRule.options.babelrc = true

  return config
}
