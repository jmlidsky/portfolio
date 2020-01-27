// Navigation Links

// About Me
$('.nav-about-me').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.about-me").offset().top -$('header').innerHeight()
    });
})

// Skills
$('.nav-skills').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.skills").offset().top -$('header').innerHeight()
    });
})

// Projects
$('.nav-projects').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.projects").offset().top -$('header').innerHeight()
    });
})

// Connect
$('.nav-connect').on('click', function (event) {
    $('html, body').animate({
        scrollTop: $("section.connect").offset().top -$('header').innerHeight()
    });
})