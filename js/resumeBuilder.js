/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Juan Luis Marval");

/*
var awesomeThoughts = "I am Juan and I am AWESOME!";
var funThoghts = awesomeThoughts.replace("AWESOME","FUN");

console.log(awesomeThoughts);
console.log(funThoghts);

$("#main").append(funThoghts);*/


var skills = ["Awesomeness","Programming","Teaching","Photoshop"];

var bio = {
  "name" : "Juan Marval",
  "role" : "Ingeniero en Computación",
  "contacts" : {
    "mobile" : "04265836474",
    "email" : "juanluismarval@gmail.com",
    "github" : "guamacherox",
    "twitter" : "@juanlmarval",
    "location" : "El Guamache"
  },
  "welcomeMessage": "lorem ipsum dolor sit amet ipsum sit amet",
  "skills": skills,
  "bioPic": "images/fry.jpg"
};

var work = {
  "works":
  [
    {
      "employer":"Movilnet",
      "title": "Customer Support",
      "location": "Anzoategui",
      "dates": "2001",
      "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "employer": "ERKSoft",
      "title": "Web Developer",
      "location": "Anzoategui",
      "dates": "2014",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
};

var education = {
  "schools":
  [
    {
      "name":"Universidad de Oriente",
      "location":"Barcelona",
      "degree": "",
      "majors":["Computer Science"],
      "dates": "19/02/2008",
      "url": "http://loremuniversity.com"
    },
    {
      "name":"Universidad de Oriente",
      "location":"Barcelona",
      "degree": "",
      "majors":"Computer Science",
      "dates": "19/02/2008",
      "url": "http://loremuniversity.com"
    }
  ],
  "onlineCourses":
  [
    {
      "title":"Javascript Basics",
      "school":"Udacity",
      "date":"12/01/2016",
      "url": "http://loremsite.com"
    },
    {
      "title":"Javascript Basics",
      "school":"Udacity",
      "date":"12/01/2016",
      "url": "http://loremsite.com"
    }
  ]
};

var projects = {
  "projects":[
    {
      "title": "Project Lorem",
      "dates": "2014",
      "description": "lorem ipsum dolor sit amet ipsum si amet lorem",
      "images":[
                "http://lorempixel.com/200/200/",
                "http://lorempixel.com/200/200/",
                "http://lorempixel.com/200/200/",
                "http://lorempixel.com/200/200/"
              ]
    },
    {
      "title": "Project Ipsum",
      "dates": "2015",
      "description": "lorem ipsum dolor sit amet ipsum si amet lorem",
      "images":[
                "http://lorempixel.com/200/200/",
                "http://lorempixel.com/200/200/",
                "http://lorempixel.com/200/200/",
                "http://lorempixel.com/200/200/"
              ]
    }
  ]
};



var displayWork = function(){

  var formatedWorkEmployer = "";
  var formatedWorkTitle = "";
  var formatedJob = "";
  var formatedDates = "";
  var formatedLocation = "";
  var formatedDesc = "";

  for(var jobs in work.works){
    $("#workExperience").append(HTMLworkStart);
    formatedWorkEmployer = HTMLworkEmployer.replace("%data%", work.works[jobs].employer);
    formatedWorkTitle = HTMLworkTitle.replace("%data%", work.works[jobs].title);
    formatedJob = formatedWorkEmployer + formatedWorkTitle;
    $(".work-entry:last").append(formatedJob);

    formatedDate = HTMLworkDates.replace("%data%",work.works[jobs].dates);
    $(".work-entry:last").append(formatedDate);

    formatedLocation = HTMLworkLocation.replace("%data%", work.works[jobs].location);
    $(".work-entry:last").append(formatedLocation);

    formatedDesc = HTMLworkDescription.replace("%data%", work.works[jobs].description);
    $(".work-entry:last").append(formatedDesc);
  }
};

function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  console.log(name);

  return name[0] + " " + name[1];
}

var cont = 0;
projects.display = function(){
  for(var project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formatedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last-child").append(formatedProjectTitle);

    var formatedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last-child").append(formatedProjectDates);

    var formatedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last-child").append(formatedDescription);

    if(projects.projects[project].images.length > 0){
      for(var image in projects.projects[project].images){
        var formatedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last-child").append(formatedImage);
      }
    }
    cont = cont + 1;
    console.log(cont);
  }
};

$("#main").append(internationalizeButton);
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").append(formattedRole);
$("#header").prepend(formattedName);

displayWork();
projects.display();

$("#mapDiv").append(googleMap);
