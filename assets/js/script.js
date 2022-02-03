

// Show current date 
function main() {
    $('#currentDay').text(moment().format('dddd MMMM do YYYY'));  
    updateTime();
}

// select hour compare to time, and update textarea color 
function updateTime() {
    $('.hour').each(function() {
        // get hour 
        var hour = moment($(this).text().trim(), 'LT');
        console.log(hour);

        // compare to hour to current time
        var compareHour = hour.isBefore(moment());
        console.log(compareHour);
        // insert a new class into text area 
    })
}

$(document).ready(main)