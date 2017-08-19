module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    lang: [0],
    'scope-enum': [2, 'always', ['client', 'server']]
  }
}
