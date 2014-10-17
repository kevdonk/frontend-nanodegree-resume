
String.prototype.replaceData = function(data)
{
	//function to to help replace data in helper.js string variables
	return this.replace("%data%",data);
}


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
	"message": "Welcome...",
	display : function() {
		//header
		$("#header").prepend(HTMLheaderRole.replaceData(bio.role));
		$("#header").prepend(HTMLheaderName.replaceData(bio.name));
		$("#header").prepend(HTMLbioPic.replaceData(bio.pic));
		//contact
		$("#topContacts").prepend(HTMLemail.replaceData(bio.contact.email));
		$("#topContacts").prepend(HTMLgithub.replaceData(bio.contact.github));
		$("#topContacts").prepend(HTMLtwitter.replaceData(bio.contact.twitter));
		$("#topContacts").prepend(HTMLlocation.replaceData(bio.contact.location));
		//write skills section
		if(bio.skills.length > 0)
				$("#header").append(HTMLskillsStart);
		for (skill in bio.skills)
			$("#skills").append(HTMLskills.replaceData(bio.skills[skill]));

		//welcome message
		$("#header").append(HTMLwelcomeMsg.replaceData(bio.message));
	}
};

var education = {
	"schools": [
	{
		"name": "Athabasca University",
		"location": "Athabasca, AB",
		"degree": "BSc",
		"major": "Computing & Information Systems",
		"dates": "2014 - Present",
		"url": "http://www.athabascau.ca/"
	},
	{
		"name": "University of Alberta",
		"location": "Edmonton, AB",
		"degree": "BCom",
		"major": "Finance",
		"dates": "2005-2010",
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
	],
	display : function(){
		//write education section
		for(school in education.schools) {
			var current = education.schools[school];
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replaceData(current.name).replace("#",current.url));
			$(".education-entry:last").append(HTMLschoolDegree.replaceData(current.degree));
			$(".education-entry:last").append(HTMLschoolDates.replaceData(current.dates));
			$(".education-entry:last").append(HTMLschoolLocation.replaceData(current.location));
			$(".education-entry:last").append(HTMLschoolMajor.replaceData(current.major));
		}

		$("#education").append(HTMLonlineClasses);
		for(course in education.onlineCourses) {
			var current = education.onlineCourses[course];
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replaceData(current.title).replace("#",current.url));
			$(".education-entry:last").append(HTMLonlineSchool.replaceData(current.school));
			$(".education-entry:last").append(HTMLonlineDates.replaceData(current.dates));
		}

	}
}

var work =
{
	"jobs": [
{
	"employer": "Mayo Industrial & Automotive Sales Ltd.",
	"title": "'Hey, my computer's broken'",
	"location": "Edmonton, AB",
	"dates": "Jan 2011 - Present",
	"description": "Purchase, set up and maintain computers network hardware and develop internal and external websites",
	"url": "http://mayoind.com"
}
	],
	display : function(){
		//write job section
		for (job in work.jobs) {
			var current = work.jobs[job];
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replaceData(current.employer).replace("#", current.url) + HTMLworkTitle.replaceData(current.title));
			$(".work-entry:last").append(HTMLworkDates.replaceData(current.dates));
			$(".work-entry:last").append(HTMLworkLocation.replaceData(current.location));
			$(".work-entry:last").append(HTMLworkDescription.replaceData(current.description));
		}
	}
}

var projects = {
	"projects": [
	{
		"title": "Delivery Manager",
		"dates": "Feb 2014 - Present",
		"description": "Web application to track delivery driver routes using MySQL, PHP and the Google Maps API",
		"url": "http://mayoind.com/driver/",
		"images": [
		"img/dm.jpg"
		]
	},
	{
		"title": "c.qb45.com",
		"dates": "2000-2002",
		"description": "Manage website and forums of the C/C++ and PHP sections of a (then) popular coding community",
		"url": "http://c.qb45.com",
		"images": [
		"http://www.qb45.com/link_qb45.gif"
		]
	}

	],
	display : function(){
	//write projects section
		for (project in projects.projects) {
			var current = projects.projects[project];
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replaceData(current.title).replace("#",current.url));
			$(".project-entry:last").append(HTMLprojectDates.replaceData(current.dates));
			$(".project-entry:last").append(HTMLprojectDescription.replaceData(current.description));
			if(current.images.length >0){
				for(image in current.images){
					$(".project-entry:last").append(HTMLprojectImage.replaceData(current.images))
				}
			}


		}

	}
}

//call display functions
bio.display();
work.display();
projects.display();
education.display();

//draw map 
$("#mapDiv").append(googleMap);