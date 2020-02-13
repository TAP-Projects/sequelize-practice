const Sequelize = require('sequelize');

// Instantiate our Sequelize instance, passing in an options object that tells Sequelize that we're using SQLite and telling it where our db file is and what it's called
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db',
    logging: false,
    // There are a lot of things that we can pass to our Sequelize instance. The global options in define apply to every model
    // define: {
    //    freezeTableName: true,
    //    timestamps: false,
    //},
});

// The db object will contain our instance, Sequelize, and also our models, stored in an object
const db = {
    // Our Sequelize instance
    sequelize, // same as {sequelize: sequelize}
    // Exposing the Sequelize package wherever you import models into your code means that you'll have all of Sequelize's methods and functionality to use
    Sequelize, // same as {Sequelize: Sequelize}
    // A holder for our models. Modles are then appended to the models object below.
    models: {},
};

// Now attach our model using require() and passing in the path to the movie.js module. That module is a function that expects a Sequelize instance as its parameter. So, we call it with 'sequelize'
db.models.Movie = require('./models/movie.js')(sequelize);
db.models.Person = require('./models/person.js')(sequelize);

// Export the db
module.exports = db;
