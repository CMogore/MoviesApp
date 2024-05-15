// models/index.js

const sequelize = require('../config/database');
const Users = require('./Users');
const Movies = require('./Movies');
const Actors = require('./Actors');
const Genres = require('./Genres');
const Likes = require('./Likes');
const MovieActors = require('./MovieActors');
const MovieGenres = require('./MovieGenres');
const Reviews = require('./Reviews');
const Roles = require('./Roles');
const WatchedMovies = require('./WatchedMovies');
const WatchLists = require('./WatchLists');
const WatchedLists = require('./WatchLists');



// Associations
//Likes table
Users.hasMany(Likes, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Likes.belongsTo(Users, {foreignKey: 'user_id'});

Movies.hasMany(Likes, { foreignKey: 'movie_id',onDelete: 'CASCADE' });
Likes.belongsTo(Movies, {foreignKey: 'movie_id'});

//MovieActors
Actors.belongsToMany(Movies, { through: MovieActors, onDelete: 'CASCADE',foreignKey: 'actor_id' });
Movies.belongsToMany(Actors, { through: MovieActors, onDelete: 'CASCADE',foreignKey: 'movie_id' });

//MovieGenres
Genres.belongsToMany(Movies, { through: MovieGenres, onDelete: 'CASCADE', foreignKey: 'genre_id' });
Movies.belongsToMany(Genres, { through: MovieGenres, onDelete: 'CASCADE' , foreignKey: 'movie_id'});
 
//Reviews
Users.hasMany(Reviews, {foreignKey: 'user_id', onDelete: 'CASCADE' });
Reviews.belongsTo(Users, {foreignKey: 'user_id'});

Movies.hasMany(Reviews, { foreignKey: 'movie_id', onDelete: 'CASCADE' });
Reviews.belongsTo(Movies, {foreignKey: 'movie_id'});

//Roles
Roles.hasMany(Users, { onDelete: 'CASCADE' }); // Each role can have multiple users
Users.belongsTo(Roles); // Each user belongs to one role

//WatchedMovies
Users.hasMany(WatchedMovies, {foreignKey: 'user_id', onDelete: 'CASCADE' });
WatchedMovies.belongsTo(Users, {foreignKey: 'user_id'});

Movies.hasMany(WatchedMovies, { foreignKey: 'movie_id',onDelete: 'CASCADE' });
WatchedMovies.belongsTo(Movies, {foreignKey: 'movie_id'});

//Watchlists
Users.hasMany(WatchLists, {foreignKey: 'user_id', onDelete: 'CASCADE' });
WatchLists.belongsTo(Users, {foreignKey: 'user_id'});

Movies.hasMany(WatchedLists, { foreignKey: 'movie_id', onDelete: 'CASCADE' });
WatchedLists.belongsTo(Movies, {foreignKey: 'movie_id'});


module.exports = {
  sequelize,
  Users,
  Movies,
  Actors,
  Genres,
  Likes,
  MovieActors,
  MovieGenres,
  Reviews,
  Roles,
  WatchedMovies,
  WatchLists
};
