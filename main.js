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

var globalheadtext = document.getElementById("globalheadtext");
var classpoints = document.getElementById("ClassPoints");

// scores

// global
var number1 = "George";
var number2 = "Jackson";
var number3 = "David";
var number4 = "Yoni";
var number5 = "Mikaela";

img.addEventListener("click", function()
{
    window.close();
    window.open("https://epsteinhillel.org", "_blank");
});

function reset() {
    $('#maintext').fadeOut();
    $('#headtext').fadeOut();
    $('#globalheadtext').fadeOut();
    $('#l1').fadeOut();
    $('#l2').fadeOut();
    $('#l3').fadeOut();
    $('#l4').fadeOut();
    $('#l5').fadeOut();
    $('#ClassPoints').fadeOut();
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
        globalheadtext.innerHTML = "Global:";
        classpoints.innerHTML = "4th grade: 278 <br> 5th grade: 223 <br> 6th grade: 66 <br> 7/8th grade: 43";
        $('#l1').fadeIn();
        $('#l2').fadeIn();
        $('#l3').fadeIn();
        $('#l4').fadeIn();
        $('#l5').fadeIn();
        $('#ClassPoints').fadeIn();
        $('#globalheadtext').fadeIn();
        $('#headtext').fadeIn();
    }, 1000);
});

about.addEventListener("click", function(){
    reset();
    setTimeout(function(){
        headText.innerHTML = "About";
        text.innerHTML = "Students will begin at the playground entrance to the bike path. They will continue, under the supervision of an eighth grader, until the baseball field exit. They will make their way up the hill near the JCC pool and along the top unity they re-enter the playground. They will then make their way to the start of the route. All of this is around .2 miles.";
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
        text.innerHTML = "Event Leaders: 7/8th grade and Lori Goldenberg, Website: 7th grade, Advertising/Main Point Counter: Yoni, Event Leaders: Lori/Talia";
        $('#maintext').fadeIn();
        $('#headtext').fadeIn();
    }, 1000);
});
