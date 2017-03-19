const compute = require('../../helpers/computeData');
module.exports = {
	list: function (req, res){
		return res.json([{
			username: "Person",
			id: "1"
		}]);
	},
	get: function (req, res){
		return res.send('Viewing user with ID: ' +  req.params.id);
	},
	sum5: function (req, res) {
		var sum5 = compute.sum(5)(parseInt(req.params.num));
		return res.send('The sum of 5 and ' + req.params.num + ' is ' + sum5);
	}
};
