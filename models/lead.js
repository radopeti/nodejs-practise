'use strict'

module.exports = (sequelize, DataTypes) => {
    var Lead = sequelize.define('Lead', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        email: {
            type: DataTypes.STRING,
            type: Sequelize.DATE
        }
    });
    return Lead;
}