const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudDB')
  .then(() => {
    console.log('Mongodb connected successfully');
  })
  .catch((err) => {
    console.log('mongo db connection error'+JSON.stringify(err,undefined,2));
  });

module.exports = mongoose;
