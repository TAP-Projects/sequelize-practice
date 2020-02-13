const Sequelize = require('sequelize');

// We export an anonymous function. The anonymous function returns the Movie class, but only after calling its init() method and passing in a model for our movie table and also passing in a Sequelize instance, which is provided to the anonymous function
module.exports = sequelize => {
    class Movie extends Sequelize.Model {}
    Movie.init(
        {
            // This is actually the default id and you don't need to provide it explicitly, unless you want to modify it.
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: Sequelize.STRING(500),
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Please provide a title."
                    },
                    notEmpty: {
                        msg: "Please provide a title."
                    }
                }
            },
            runtime: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Please provide a valid running time."
                    },
                    min: {
                        args: 1,
                        msg: 'Please provide a value greater than "0" for "runtime."',
                    },
                }
            },
            releaseDate: {
                type: Sequelize.DATEONLY,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Please provide a valid release date."
                    },
                    isAfter: {
                        args: '1895-12-27',
                        msg: 'Please provide a value on or after "1895-12-28" for "releaseDate."',
                    },
                }
            },
            thumbsUp: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true,
                validate: {
                    notNull: {
                        msg: "Please provide a valid rating."
                    }
                }
            },
        },
        {
            // You can also pass in all sorts of options here, e.g.
            // modelName: "myMovieModel",
            // tableName: "MyMovies",
            // timestamps: false, // disable timestamps,
            sequelize // this is ES6 shorthand for sequalize: sequalize
        }
    );

    return Movie;
};
