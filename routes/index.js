
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

exports.gtv = function(req, res){

	var offset = 2;				//Sunday is 1, Monday is 2 etc...
	var daysinmounth = 31;		//Number of days in the month
	var arrayD = {};
	var daycounter = 1;	
	for(var x = 1; x<=35; x++){
		if(x < offset || daycounter > daysinmounth){
			arrayD[x] = '';
		} else {
			arrayD[x] = daycounter;
			daycounter++;
		}
	}

	res.render('cal', {
		title: 'for Google TV',
		month: 10,
		days: arrayD,
		events: {
			4 : 'Awesomeness',
			18 : 'Random Day',
			26 : 'Birthday'
		}
	});
};