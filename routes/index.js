
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
		days: arrayD,
		month: 10,
		events: {
			'Event': {
				dateTime: 'Thu Oct 04 2012 19:30:00 GMT-0400 (EDT)',
				info: 'Event information'
			},
			'Second Event': {
				dateTime: 'Tue Oct 09 2012 20:00:00 GMT-0400 (EDT)',
				info: 'More event information'
			},
			'Third Event': {
				dateTime: 'Thu Oct 18 2012 19:00:00 GMT-0400 (EDT)',
				info: 'INFORMATION'
			},
			'Birthday': {
				dateTime: 'Fri Oct 26 2012 02:45:42 GMT-0400 (EDT)',
				info: 'Best day ever'
			},
			'SSE Meeting1': {
				dateTime: 'Fri Oct 05 2012 13:00:00 GMT-0400 (EDT)',
				info: 'Event information'
			},
			'SSE Meeting2': {
				dateTime: 'Fri Oct 12 2012 13:00:00 GMT-0400 (EDT)',
				info: 'More event information'
			},
			'SSE Meeting3': {
				dateTime: 'Fri Oct 19 2012 13:00:00 GMT-0400 (EDT)',
				info: 'INFORMATION'
			},
			'SSE Meeting4': {
				dateTime: 'Fri Oct 26 2012 13:00:00 GMT-0400 (EDT)',
				info: 'Best day ever'
			}
		}
	});
};