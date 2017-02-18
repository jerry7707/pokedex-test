const typesData = require('../data/types');

exports.getTypes = function(req, res, next) {
  res.json({typesData});
}
