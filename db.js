var mongoose = require('mongoose');

let Host = "mongodb://suman:suman123@ds155252.mlab.com:55252/heroku";

const options = {
    useNewUrlParser: true,
};

mongoose.connect(Host, options);

console.log(mongoose.connection.readyState);

module.exports = mongoose;