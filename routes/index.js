var express = require('express');
var router = express.Router();
var GitHubApi = require("github");

router.get('/getFollowers/:user', function(req, res, next) {

console.log(req.params);
	var github = new GitHubApi({});
	github.users.getFollowingForUser({

	   username: req.params.user
	}, function(err, data) {
	  res.json(data);
	  console.log(data.data);	
	});
});

module.exports = router;
