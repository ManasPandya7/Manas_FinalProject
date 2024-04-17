$(document).ready(function() {
    // Add smooth scrolling to anchor links
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  
    // Load Font Awesome icons
    var script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/your-kit-id.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);
  });