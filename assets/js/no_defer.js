// Add Bootstrap classes to tables.
$(document).ready(function() {
  $('table').each(function() {
    if (document.documentElement.getAttribute("data-theme") == "dark") {
      $(this).addClass('table-dark');
    } else {
      $(this).removeClass('table-dark');
    }

    // only select tables that are not inside an element with "news" (about page) or "card" (cv page) class
    if($(this).parents('[class*="news"]').length==0 &&
        $(this).parents('[class*="card"]').length==0 &&
        $(this).parents('code').length == 0) {
      // Add a hover state to content tables.
      $(this).addClass('table-hover');
    }
  })
});
