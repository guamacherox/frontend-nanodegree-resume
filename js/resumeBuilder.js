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

$("#header").append(formattedRole);
$("#header").prepend(formattedName);
