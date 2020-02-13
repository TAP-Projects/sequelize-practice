// Require the db
const db = require('./db');
// Destructure to get Movie
const { Movie, Person } = db.models;

(async () => {
    try {

        // The line below allows you to just test the connection
        // await sequelize.authenticate();
        // console.log("Successfully connected to database.");
        
        // Write your changes to the Movie table
        // await Movie.sync();
        // Or you can write all of your changes to all of your tables at the same time with
        await db.sequelize.sync({ force: true }); // force true will cause your tables to be deleted and re-created every time you run app.js

        // It's not necessary to store the movies in a variable, it's done here to make it easier to console.log the results.
        // Promise.all makes it easy to group a bunch of movie creation operations and await the completion of all of them.
        const movies = await Promise.all([
            Movie.create({
                "title":"Groundhog Day",
                "runtime": 2,
                "releaseDate": "1798-10-22"
            }),
            Movie.create({
                "title":"Alien",
                "runtime": 2,
                "releaseDate": "1982-07-12"
            }),
            Person.create({
                "firstName": "Bob",
                "lastName": "Boberson"
            }),
            Person.create({
                "firstName": "Linda",
                "lastName": "Linderson"
            })
        ]);

        const moviesJSON = movies.map(movie => movie.toJSON());
        console.log(moviesJSON);

    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            console.error('Validation errors: ', errors);
        } else {
            throw error;
        }
    }
})()