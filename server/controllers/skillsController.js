var jsonQuery = require('json-query');
const skillsData = require('../data/skills');

exports.getSkills = function(req, res, next) {
  const params=req.query;
  var data = {"skillsData":skillsData};
  if(params.id)
  {
    res.json(jsonQuery('skillsData[id='+params.id+']', {
      data: data
    }));
  }
  else {
    res.json(data);
  }
}
