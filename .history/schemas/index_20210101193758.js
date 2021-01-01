const mongoose = require('mongoose');

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.connect(
    'mongodb+srv://munchkin:rlfehd12@cluster0.2dexh.mongodb.net/Archeage?retryWrites=true&w=majority',
    {
      dbName: 'Archeage',
      useNewUrlParser: true,
      useCreateIndex: true,
    },
    function (err, client) {
      if (err) {
        console.log('몽고디비 연결 에러', err);
      } else {
        console.log('몽고디비 연결 성공');
      }
    },
  );
};
mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});
mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다');
  connect();
});

module.exports = connect;
