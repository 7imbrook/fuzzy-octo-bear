
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

exports.gtv = function(req, res){

	//Constants
	var monthInfo = {1:{name: "January", days:31 }, 2:{name: "Febrary", days:28 }, 3:{name: "March", days:31 }, 4:{name: "April", days:30 }, 5:{name: "May", days:31 }, 6:{name: "June", days:30 }, 7:{name: "July", days:31 }, 8:{name: "August", days:31 }, 9:{name: "September", days:30 }, 10:{name: "October", days: 31 }, 11:{name: "November", days: 30 }, 12:{name: "December", days: 31 } };
	function checkleapyear(date) {date = parseInt(date); if(date%4 == 0) {if(date%100 != 0) {return true; } else {if(date%400 == 0) return true; else return false; } } return false; }
	var arrayD = {};
	var daycounter = 1;	
	for(var x = 1; x<=35; x++){if(x < offset || daycounter > daysinmonth){arrayD[x] = ''; } else {arrayD[x] = daycounter; daycounter++; } } // Get current month and start/number of days
	var now = new Date();
	var month = now.getMonth()+1;
	var year = now.getYear()-100;
	if(checkleapyear(year) && month == 2){
		var daysinmonth = monthInfo[month].days+1;
	} else {
		var daysinmonth = monthInfo[month].days;
	}
	var dateMonthStart = new Date((month+" 01 "+year).toString());
	var offset = dateMonthStart.getDay()+1;
	var monthTitle = monthInfo[month].name+ '- Events';

	// Get current event data 
	var requestURL = ("/events.json?start_date=20"+year+"-"+month+"-1&end_date=20"+year+"-"+month+"-"+daysinmonth);
	console.log(requestURL);
	https = require('https');

	var options = {
		host: 'sse.se.rit.edu',
		path: requestURL
	};



	https.get(options, function(response){
		console.log("Got response: " + res.statusCode);
		var data = '';
		var arrayD = {};
		var daycounter = 1;	
		for(var x = 1; x<=35; x++){if(x < offset || daycounter > daysinmonth){arrayD[x] = ''; } else {arrayD[x] = daycounter; daycounter++; } } // Get current month and start/number of days
	
		// Render
		response.on('data', function(chunk){
			data += chunk;
		});
		response.on('end', function(){
			res.render('cal', {
				title: 'for Google TV',
				days: arrayD,
				month: monthTitle,
				urlEvents: JSON.parse(data),
			});
		});
	}).on('error', function(e) {
  	console.log("Got error: " + e.message);
	});
};