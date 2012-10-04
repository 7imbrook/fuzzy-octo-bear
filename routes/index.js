
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

exports.gtv = function(req, res){

	res.render('cal', {
		title: 'for Google TV',
		days: 31,
		offset: 0,
		events: {
			'10/4': 'Awesomeness',
			'10/18': 'Random Day',
			'10/26': 'Birthday'
		}
	});
};