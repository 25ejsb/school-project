// to update add, go to app.netlify.com then go to website, then go to deploys, then update the files

var img = document.getElementById("School");
var text = document.getElementById("maintext");

var about = document.getElementById("About");
var leaderboards = document.getElementById("Leaderboards");
var contacts = document.getElementById("Contacts");
var credits = document.getElementById("Credits");

var headText = document.getElementById("headtext");

var l1 = document.getElementById("l1");
var l2 = document.getElementById("l2");
var l3 = document.getElementById("l3");
var l4 = document.getElementById("l4");
var l5 = document.getElementById("l5");

var l4_1 = document.getElementById("l4-1");
var l4_2 = document.getElementById("l4-2");
var l4_3 = document.getElementById("l4-3");

var l5_1 = document.getElementById("l5-1");
var l5_2 = document.getElementById("l5-2");
var l5_3 = document.getElementById("l5-3");

var l6_1 = document.getElementById("l6-1");
var l6_2 = document.getElementById("l6-2");
var l6_3 = document.getElementById("l6-3");

var l8_1 = document.getElementById("l8-1");
var l8_2 = document.getElementById("l8-2");
var l8_3 = document.getElementById("l8-3");

var globalheadtext = document.getElementById("globalheadtext");
var headtext4th = document.getElementById("headtext4th");
var headtext5th = document.getElementById("headtext5th");
var headtext6th = document.getElementById("headtext6th");
var headtext8th = document.getElementById("headtext8th");

var aboutText = "Hello";

// scores

// global
var number1 = "Hello";
var number2 = "Someone";
var number3 = "Someone";
var number4 = "Someone";
var number5 = "Someone";

// 4th grade
var forthnum1 = "Someone";
var forthnum2 = "Someone";
var forthnum3 = "Someone";

// 5th grade
var fifthnum1 = "Someone";
var fifthnum2 = "Someone";
var fifthnum3 = "Someone";

// 6th grade
var sixnum1 = "Someone";
var sixnum2 = "Someone";
var sixnum3 = "Someone";

// 8th grade
var eightnum1 = "Someone";
var eightnum2 = "Someone";
var eightnum3 = "Someone";

img.addEventListener("click", function()
{
    window.close();
    window.open("https://epsteinhillel.org", "_blank");
});

function reset() {
    $('#maintext').fadeOut();
    $('#headtext').fadeOut();
    $('#globalheadtext').fadeOut();
    $('#headtext4th').fadeOut();
    $('#headtext5th').fadeOut();
    $('#headtext6th').fadeOut();
    $('#l1').fadeOut();
    $('#l2').fadeOut();
    $('#l3').fadeOut();
    $('#l4').fadeOut();
    $('#l5').fadeOut();
    $('#l4-1').fadeOut();
    $('#l4-2').fadeOut();
    $('#l4-3').fadeOut();
    $('#l5-1').fadeOut();
    $('#l5-2').fadeOut();
    $('#l5-3').fadeOut();
    $('#l6-1').fadeOut();
    $('#l6-2').fadeOut();
    $('#l6-3').fadeOut();
    $('#l8-1').fadeOut();
    $('#l8-2').fadeOut();
    $('#l8-3').fadeOut();
}

leaderboards.addEventListener("click", function(){
    reset();
    setTimeout(function(){
        headText.innerHTML = "Leaderboards";
        l1.innerHTML = "#1 " + number1;
        l2.innerHTML = "#2 " + number2;
        l3.innerHTML = "#3 " + number3;
        l4.innerHTML = "#4 " + number4;
        l5.innerHTML = "#5 " + number5;
        l4_1.innerHTML = "#1 " + forthnum1;
        l4_2.innerHTML = "#2 " + forthnum2;
        l4_3.innerHTML = "#3 " + forthnum3;
        l5_1.innerHTML = "#1 " + fifthnum1;
        l5_2.innerHTML = "#2 " + fifthnum2;
        l5_3.innerHTML = "#3 " + fifthnum3;
        l6_1.innerHTML = "#1 " + sixnum1;
        l6_2.innerHTML = "#2 " + sixnum2;
        l6_3.innerHTML = "#3 " + sixnum3;
        l8_1.innerHTML = "#1 " + eightnum1;
        l8_2.innerHTML = "#2 " + eightnum2;
        l8_3.innerHTML = "#3 " + eightnum3;
        globalheadtext.innerHTML = "Global:";
        headtext4th.innerHTML = "4th grade:";
        headtext5th.innerHTML = "5th grade:";
        headtext6th.innerHTML = "6th grade:";
        headtext8th.innerHTML = "7/8th grade:";
        $('#l1').fadeIn();
        $('#l2').fadeIn();
        $('#l3').fadeIn();
        $('#l4').fadeIn();
        $('#l5').fadeIn();
        $('#l4-1').fadeIn();
        $('#l4-2').fadeIn();
        $('#l4-3').fadeIn();
        $('#l5-1').fadeIn();
        $('#l5-2').fadeIn();
        $('#l5-3').fadeIn();
        $('#l6-1').fadeIn();
        $('#l6-2').fadeIn();
        $('#l6-3').fadeIn();
        $('#l8-1').fadeIn();
        $('#l8-2').fadeIn();
        $('#l8-3').fadeIn();
        $('#globalheadtext').fadeIn();
        $('#headtext4th').fadeIn();
        $('#headtext5th').fadeIn();
        $('#headtext6th').fadeIn();
        $('#headtext8th').fadeIn();
        $('#headtext').fadeIn();
    }, 1000);
});

about.addEventListener("click", function(){
    reset();
    setTimeout(function(){
        headText.innerHTML = "About";
        text.innerHTML = "Students will begin at the playground entrance to the bike path. They will continue, under the supervision of an eighth grader, until the baseball field exit. They will make their way up the hill near the JCC pool and along the top unity they re-enter the playground. They will then make their way to the start of the route. All of this is around 0.2 miles.";
        $('#maintext').fadeIn();
        $('#headtext').fadeIn();
    }, 1000);
});

contacts.addEventListener("click", function(){
    reset();
    setTimeout(function(){
        headText.innerHTML = "Contacts";
        text.innerHTML = "Feel free to contact these emails addresses for more information: yoni.yaakov@epsteinhillel.org, talia.blue@epsteinhillel.org, and brochsteine2024@epsteinhillel.org";
        $('#maintext').fadeIn();
        $('#headtext').fadeIn();
    }, 1000);
});

credits.addEventListener("click", function(){
    reset();
    setTimeout(function(){
        headText.innerHTML = "Credits";
        text.innerHTML = "Event Leaders: 7/8th grade and Lori Goldenberg, Website: 7th grade";
        $('#maintext').fadeIn();
        $('#headtext').fadeIn();
    }, 1000);
});
