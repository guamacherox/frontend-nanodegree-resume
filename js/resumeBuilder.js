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

var formattedName = HTMLheaderName.replace("%data%","Juan Marval");
var formattedRole = HTMLheaderRole.replace("%data%","Ingeniero en Computación");

var skills = ["awesomeness","programming","teaching","Photoshop"];

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
      "company":"Movilnet",
      "position":"Ejecutivo de Ventas",
      "years": 5
    },
    {
      "company": "ERKSoft",
      "position": "Desarrollador Web",
      "years": 2
    }
  ]
};

var education = {
  "escuelas":
  [
    {
      "school":"Universidad de Oriente",
      "city":"Barcelona",
      "Major":"Computer Science",
      "Minor":"Web Development",
      "graduation": 2008
    },
    {
      "school":"Universidad de Oriente",
      "city":"Barcelona",
      "Major":"Computer Science",
      "Minor":"Telecoms",
      "graduation": 2010
    }
  ],
  "onlineCourses":
  [
    {
      "portal":"Udacity",
      "name":"Javascript Basics"
    },
    {
      "portal":"Codeschool",
      "name":"Frontends Basics"
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
        "http://lorempixel.com/200/200/"
      ]
    }
  ]
};



$("#header").append(formattedRole);
$("#header").prepend(formattedName);

$("#main").append(skills.length);
