
var bio = {
	"name": "Kevin Mayo",
	"role": "Developer",
	"contact": {
	"email": "kevin@mayoind.com",
	"twitter": "@notkevdonk",
	"github": "https://github.com/kevdonk/",
	"location": "Edmonton, Alberta"
	},
	"skills": [ "HTML", "CSS", "JavaScript", "PHP", "MySQL", "C/C++" ],
	"pic": "https://raw.githubusercontent.com/kevdonk/fendp1/master/img/donk.jpg",
	"message": "Welcome..."
};

var education = {
	"schools": [
	{
		"name": "Athabasca University",
		"location": "Athabasca, AB",
		"degree": "BSc CIS",
		"dates": "In Progress",
		"url": "http://www.athabascau.ca/"
	},
	{
		"name": "University of Alberta",
		"location": "Edmonton, AB",
		"degree": "BCom",
		"dates": 2010,
		"url": "http://business.ualberta.ca/"
	}
	], 
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2014,
		"url": "https://www.udacity.com/course/nd001"
	},
	{
		"title": "Various Courses",
		"school": "Code School",
		"dates": 2014,
		"url": "https://www.codeschool.com/users/864567"
	}
	]
}

var work =
{
	"jobs": [
{
	"employer": "Mayo Industrial & Automotive Sales Ltd.",
	"title": "Network Admin",
	"location": "Edmonton, AB",
	"dates": "Jan 2011 - Current",
	"description": "Purchase, set up and maintain network hardware and develop internal and external websites"
}
	]
}

var projects = {
	"projects": [
	{
		"title": "c.qb45.com",
		"dates": "2000-2002",
		"description": "Manage website and forums of the C/C++ and PHP sections of a (then) popular coding community",
		"images": [
		"http://www.qb45.com/link_qb45.gif"
		]
	}
	]
}

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));


$("#footerContacts").prepend(HTMLemail.replace("%data%", bio.contact.email));
$("#footerContacts").prepend(HTMLgithub.replace("%data%", bio.contact.github));
$("#footerContacts").prepend(HTMLtwitter.replace("%data%", bio.contact.twitter));
$("#footerContacts").prepend(HTMLlocation.replace("%data%", bio.contact.location));



