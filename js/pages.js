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


// Get all images on the page
var images = document.querySelectorAll('img');

// Set initial scale of the images
var scale = 1;

// Loop through each image and add hover effect
images.forEach(function(image) {
  image.addEventListener('mouseenter', function() {
    scale = 1.1;
    applyTransform(image);
  });

  // Reset scale when mouse leaves
  image.addEventListener('mouseleave', function() {
    scale = 1;
    applyTransform(image);
  });
});

// Apply scale transformation
function applyTransform(image) {
  image.style.transform = 'scale(' + scale + ')';
}

