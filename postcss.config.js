module.exports = {
  plugins: {
    autoprefixer: {},
    ...(process.env.STACK_ENV === 'prod' ? { cssnano: {} } : {}),
  },
};
