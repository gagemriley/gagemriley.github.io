var w = window.innerWidth;
var h = window.innerHeight;


var wrapper = document.getElementById('wrapper');
var navbar = document.getElementById('navbar');
var navbarHeader = document.getElementById('navbarHeader');
var navbarBody = document.getElementById('navbarBody');

var navProfile = document.getElementById('navProfile');
var navExperience = document.getElementById('navExperience');
var navAbilities = document.getElementById('navAbilities');
var navProjects = document.getElementById('navProjects');
var navContact = document.getElementById('navContact');

if (w >= 768) {

	navbar.style.width = '130px';

	wrapper.style.width = '130px';
	wrapper.style.position = 'absolute';
	wrapper.style.right = '4%';

	navbarHeader.style.display = 'none';
	navbarBody.className = 'show';
}

function openNav() {
	if (navbarBody.className === 'hidden') {
		navbarBody.className = 'show';
		wrapper.style.height = '361px';
	} 
	else {
		navbarBody.className = 'hidden';
		wrapper.style.height = '61px';
	}	
}

window.addEventListener('resize', 
	function(event) {
		onResize();
});

window.addEventListener('scroll', 
	function(event) {
		onScroll();
});

window.addEventListener('scroll', 
	function(event) {
		activeScroll();
});

function onResize() {
	var w = window.innerWidth;

	if (w >= 768) {

		navbar.style.width = '130px';
		
		wrapper.style.width = '130px';
		wrapper.style.position = 'absolute';
		wrapper.style.right = '4%';

		navbarHeader.style.display = 'none';
		navbarBody.className = 'show';
	}
	else {

		navbar.style.width = '100%';
		
		wrapper.style.width = '100%';
		wrapper.style.position = 'relative';
		wrapper.style.right = '';

		navbarHeader.style.display = 'block';
		navbarBody.className = 'hidden';
	}		
}

function onScroll() {
	var h = window.innerHeight;

	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;	

	if (window.pageYOffset > sticky + h) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}	
}

function activeScroll() {
	// these are relative to the viewport, i.e. the window
	var profile = document.getElementById('profile').getBoundingClientRect().top;
	var experience = document.getElementById('experience').getBoundingClientRect().top;
	var abilities = document.getElementById('abilities').getBoundingClientRect().top;
	var projects = document.getElementById('projects').getBoundingClientRect().top;

	var active;

	if (profile < 50) {
		navProfile.style.backgroundColor = "#007BFF";
		navExperience.style.backgroundColor = "#262626";
		navAbilities.style.backgroundColor = "#262626";
		navProjects.style.backgroundColor = "#262626";
		navContact.style.backgroundColor = "#262626";
	}

	if (experience < 50) {
		navProfile.style.backgroundColor = "#262626";
		navExperience.style.backgroundColor = "#007BFF";
		navAbilities.style.backgroundColor = "#262626";
		navProjects.style.backgroundColor = "#262626";
		navContact.style.backgroundColor = "#262626";
	}

	if (abilities < 50) {
		navProfile.style.backgroundColor = "#262626";
		navExperience.style.backgroundColor = "#262626";
		navAbilities.style.backgroundColor = "#007BFF";
		navProjects.style.backgroundColor = "#262626";
		navContact.style.backgroundColor = "#262626";
	}

	if (projects < 50) {
		navProfile.style.backgroundColor = "#262626";
		navExperience.style.backgroundColor = "#262626";
		navAbilities.style.backgroundColor = "#262626";
		navProjects.style.backgroundColor = "#007BFF";
		navContact.style.backgroundColor = "#262626";
	}
}


$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('#navContact').css('background-color', '#007BFF');
       $('#navProjects').css('background-color', '#262626');
   }
   else {
   	$('#navContact').css('background-color', '#262626');
   }
});

let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}