var main = function() {
  var cities = [
    "Richmond",
    "Kansas City",
    "Raleigh",
    "Boone",
    "New York",
    "Savannah",
    "Boston",
    "Boulder",
    "Portland",
    "Charlottesville",
    "Chicago"
  ];
  
  $("#city").autocomplete({
    source: cities
  });
};
 
$(document).ready(main);