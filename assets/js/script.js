

// Show current date 
function main() {
    $('#currentDay').text(moment().format('dddd MMMM do YYYY'));
    
}

$(document).ready(main)