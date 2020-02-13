const Sequelize = require('sequelize');

module.exports = sequelize => {
    class Person extends Sequelize.Model {}
    Person.init(
        // The model
        {
            id: {
                // Everything here is provided by default, I'm just writing it out for practice.
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false, // This is a constraint and not a validation. The notNull validation just allows us to set a custom error message.
                validate: {
                    notNull: {msg: 'Please provide your first name.'},
                    notEmpty: {msg: 'Please provide your first name.'},
                },
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false, // This is a constraint and not a validation. The notNull validation you see below just allows us to set a custom error message.
                validate: {
                    notNull: {msg: 'Please provide your last name.'},
                    notEmpty: {msg: 'Please provide your last name.'},
                },
            },
        },
        // Options for all models and the Sequelize instance
        {
            // This is where you set options like modelName, tableName, timestamps, etc.
            // And this is the Sequelize instance
            sequelize,
        }
    );
    return Person
};
