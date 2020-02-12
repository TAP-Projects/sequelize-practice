const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    "dialect": "sqlite",
    "storage": "movies.db"
});

class Movie extends Sequelize.Model {}
Movie.init({
    "id": Sequelize.INTEGER,
    "title": Sequelize.STRING,
    "genre": Sequelize.STRING,
    "release_date": Sequelize.DATE
}, { sequelize }); // same as { sequelize: sequelize }

(async ()=>{
    try {

        // The code below allows you to just test the connection
        // await sequelize.authenticate();
        // console.log("Successfully connected to database.");
        
        // Write your changes to the Movie table
        // await Movie.sync();
        // Or you can write all of your changes to all of your tables at the same time with
        await sequelize.sync({ force: true }); // Force will cause your tables to be deleted and re-created every time you run app.js

    } catch (error) {
        console.log("Error connecting to database. ", error);
    }
})()