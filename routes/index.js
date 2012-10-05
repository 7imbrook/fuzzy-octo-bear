
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

exports.gtv = function(req, res){

	var offset = 2;				//Sunday is 1, Monday is 2 etc...
	var daysinmounth = 31;		//Number of days in the month
	var month = 'October'		//The Month
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
		month: month,
		events: {
			0: {
				name: 'FC Talk: SG',
				dateTime: 'Thu Oct 04 2012 19:00:00 GMT-0400 (EDT)',
				location: 'SSE Lab',
				info: 'Talk on Student Government'
			},
			1: {
				name: 'Tech Talk: Python Pkg Mgmt',
				dateTime: 'Thu Oct 11 2012 19:00:00 GMT-0400 (EDT)',
				location: 'SSE Lab',
				info: 'Python Package Manager'
			},
			2: {
				name: 'Freshman Connection Talk: Getting co-ops',
				dateTime: 'Thu Oct 23 2012 19:00:00 GMT-0400 (EDT)',
				location: 'SSE Lab',
				info: 'Derek Erdmann has finished co-ops at MITRE and Microsoft. He’ll tell you about ways you can prep for co-op even in your first year.'
			},
			3: {
				name: 'Birthday',
				dateTime: 'Fri Oct 26 2012 02:45:42 GMT-0400 (EDT)',
				location: 'SSE Lab',
				info: 'Best day ever'
			},
			4: {
				name: 'SSE Meeting',
				dateTime: 'Fri Oct 05 2012 13:00:00 GMT-0400 (EDT)',
				location: 'SSE Lab',
				info: 'Event information'
			},
			5: {
				name: 'SSE Meeting',
				dateTime: 'Fri Oct 12 2012 13:00:00 GMT-0400 (EDT)',
				location: 'SSE Lab',
				info: 'More event information'
			},
			6: {
				name: 'SSE Meeting',
				dateTime: 'Fri Oct 19 2012 13:00:00 GMT-0400 (EDT)',
				location: 'SSE Lab',
				info: 'INFORMATION'
			},
			7: {
				name: 'SSE Meeting',
				dateTime: 'Fri Oct 26 2012 13:00:00 GMT-0400 (EDT)',
				location: 'SSE Lab',
				info: 'Best day ever'
			},
			8: {
				name: 'Test Event',
				dateTime: 'Mon Oct 08 2012 11:07:00 GMT-0400 (EDT)',
				location: 'In space',
				info: 'A test event :D'
			}
		}
	});
};