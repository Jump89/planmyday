

// Show current date 
function main() {
    $('#currentDay').text(moment().format('dddd MMMM do YYYY'));  
    updateTime();
};

// select hour compare to time, and update textarea color 
function updateTime() {
    $('.hour').each(function() {
        // get hour 
        var hour = moment($(this).text().trim(), 'LT');
        // compare to hour to current time
        var compareHour = Math.ceil(moment.duration(hour.diff(moment())).asHours());
        console.log(compareHour);
        // insert a new class into text area 
        if(compareHour < 0) {
            $(this).next().addClass('past')
        } else if (compareHour == 0) {
            $(this).next().addClass('present');
        } else ($(this).next().addClass('future'))
    });
};

$(document).ready(main)