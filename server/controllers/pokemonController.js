const pokemonData = require('../data/pokedex');

exports.getPokemon = function(req, res, next) {
  res.json({pokemonData});
}
