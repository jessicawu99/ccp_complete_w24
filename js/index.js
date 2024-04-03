// Alert box that asks for user's name
var user = prompt("What is your name?");

// Replace "user" with the user's name
if (user == null || user == "") {
    document.getElementById("user").innerHTML = ' there';
}
else {
    document.getElementById("user").innerHTML = ' ' + user;
}

// Get all nav links
var navLinks = document.querySelectorAll('.nav-link');

// Change background color gradually on mouse enter
navLinks.forEach(function(link) {
  link.addEventListener('mouseenter', function() {
    link.style.backgroundColor = '#cc9e91';
    link.style.transition = 'background-color 0.4s ease';
  });

  // Revert background color gradually on mouse leave
  link.addEventListener('mouseleave', function() {
    link.style.backgroundColor = 'transparent';
  });
});
