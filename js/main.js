$(document).on("click", ".nav a", function(item) {
  // Collapse navbar automatically after click on an item
  $("#eemokNavbar").collapse("hide");
})

$(document).on("click", "a[href='#eemok']", function(item) {
  // Add smooth scrolling to all internal links
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 600, function(){
      window.location.hash = hash;
    });
  }
})
