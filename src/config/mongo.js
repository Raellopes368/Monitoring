module.exports = {
  config: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: 'instead',
    useFindAndModify: false,
  },
  user: process.env.USER,
  pass: process.env.PASS,
};
