
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Express' });
};

exports.gtv = function(req, res){

	//Constants
	var monthInfo = {
		1:{
			name: "January",
			days:31
		},
		2:{
			name: "Febrary",
			days:28
		},
		3:{
			name: "March",
			days:31
		},
		4:{
			name: "April",
			days:30
		},
		5:{
			name: "May",
			days:31
		},
		6:{
			name: "June",
			days:30
		},
		7:{
			name: "July",
			days:31
		},
		8:{
			name: "August",
			days:31
		},
		9:{
			name: "September",
			days:30
		},
		10:{
			name: "October",
			days: 31
		},
		11:{
			name: "November",
			days: 30
		},
		12:{
			name: "December",
			days: 31
		}
	};

	function checkleapyear(date) {date = parseInt(date); if(date%4 == 0) {if(date%100 != 0) {return true; } else {if(date%400 == 0) return true; else return false; } } return false; }

	// Get current month and start/number of days
	var now = new Date();
	var month = now.getMonth()+1;
	var year = now.getYear()-100;
	if(checkleapyear(year) && month == 2){
		var daysinmounth = monthInfo[month].days+1;
	} else {
		var daysinmounth = monthInfo[month].days;
	}
	var dateMonthStart = new Date((month+" 01 "+year).toString());
	var offset = dateMonthStart.getDay()+1;
	var monthTitle = monthInfo[month].name+ '- Events';

	// Data from https://sse.se.rit.edu/events.json?start_date=2012-10-1&end_date=2012-10-31
	var eventsJsonText = [{"committee_id":4,"created_at":"2012-09-04T12:14:24-04:00","description":"Paul Darragh is a former Freshman Senator and current RA. He'll be talking about Student Government and its role at RIT.","end_date":"2012-09-04T20:00:00-04:00","id":5,"image":{"url":null},"location":"SSE Lab","name":"Freshman Connection Talk: Student Government","short_description":"Laern about Student Government at RIT","short_name":"FC Talk: SG","start_date":"2012-10-04T19:00:00-04:00","updated_at":"2012-10-03T20:59:49-04:00"},{"committee_id":5,"created_at":"2012-09-04T12:50:22-04:00","description":"","end_date":"2012-10-05T14:50:00-04:00","id":10,"image":{"url":null},"location":"70-1455","name":"Weekly Friday Meeting #5","short_description":"","short_name":"SSE Meeting","start_date":"2012-10-05T13:00:00-04:00","updated_at":"2012-09-13T17:00:28-04:00"},{"committee_id":2,"created_at":"2012-10-01T17:56:41-04:00","description":"","end_date":"2012-10-05T23:00:00-04:00","id":43,"image":{"url":null},"location":"SSE Lab","name":"Game night","short_description":"Come play video/board games in the lab!","short_name":"Game night","start_date":"2012-10-05T19:00:00-04:00","updated_at":"2012-10-01T17:56:41-04:00"},{"committee_id":6,"created_at":"2012-09-10T18:07:33-04:00","description":"","end_date":"2012-10-11T20:00:00-04:00","id":19,"image":{"url":null},"location":"SSE Lab","name":"TechTalk on Package Managment with Python with Morgan Cabral","short_description":"","short_name":"TechTalk: Pythn Pkg Mgmt","start_date":"2012-10-11T18:00:00-04:00","updated_at":"2012-09-12T18:15:39-04:00"},{"committee_id":5,"created_at":"2012-09-04T12:51:22-04:00","description":"","end_date":"2012-10-12T14:05:00-04:00","id":11,"image":{"url":null},"location":"70-1455","name":"Weekly Friday Meeting #6","short_description":"","short_name":"SSE Meeting","start_date":"2012-10-12T13:00:00-04:00","updated_at":"2012-09-13T17:01:06-04:00"},{"committee_id":5,"created_at":"2012-09-04T12:52:36-04:00","description":"","end_date":"2012-10-19T14:00:00-04:00","id":12,"image":{"url":null},"location":"70-1455","name":"Weekly Friday Meeting #7","short_description":"","short_name":"SSE Meeting","start_date":"2012-10-19T13:00:00-04:00","updated_at":"2012-09-13T17:01:15-04:00"},{"committee_id":4,"created_at":"2012-09-04T12:21:30-04:00","description":"Derek Erdmann has finished co-ops at MITRE and Microsoft. He\u2019ll tell you about ways you can prep for co-op even in your first year.","end_date":"2012-10-23T20:00:00-04:00","id":6,"image":{"url":null},"location":"SSE Lab","name":"Freshman Connection Talk: Getting co-ops","short_description":"Learn how to prep for co-op as a freshman","short_name":"FC Talk: Getting co-ops","start_date":"2012-10-23T19:00:00-04:00","updated_at":"2012-09-04T13:03:10-04:00"},{"committee_id":6,"created_at":"2012-09-10T18:08:50-04:00","description":"","end_date":"2012-10-25T20:00:00-04:00","id":20,"image":{"url":null},"location":"SSE Lab","name":"TechTalk on AWS with Ryan Knapp","short_description":"","short_name":"TechTalk: AWS","start_date":"2012-10-25T18:00:00-04:00","updated_at":"2012-09-12T18:14:32-04:00"},{"committee_id":5,"created_at":"2012-09-04T12:53:28-04:00","description":"","end_date":"2012-10-26T14:00:00-04:00","id":13,"image":{"url":null},"location":"70-1455","name":"Weekly Friday Meeting #8","short_description":"","short_name":"SSE Meeting","start_date":"2012-10-26T13:00:00-04:00","updated_at":"2012-09-13T17:01:26-04:00"}];

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
	// Render page
	res.render('cal', {
		title: 'for Google TV',
		days: arrayD,
		month: monthTitle,
		urlEvents: eventsJsonText,
	});
};