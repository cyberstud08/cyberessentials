 var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
 var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl)
 })

//  var exampleEl = document.getElementById('example')
//  var popover = new bootstrap.Popover(exampleEl, options)
