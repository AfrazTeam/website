module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 80,
  overrides: [
    {
      files: '*.css',
      options: {
        tabWidth: 2,
        semi: true,
        singleQuote: true,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        tabWidth: 2,
        semi: false,
        printWidth: 80,
      },
    },
  ],
}
