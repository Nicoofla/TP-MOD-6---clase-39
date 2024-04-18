

module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor_Movie';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
       
        actor_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        movie_id : {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        }
    };
    let config = {
        taplename : "actor_movie",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Actor_Movie = sequelize.define(alias, cols, config);

    return Actor_Movie
};