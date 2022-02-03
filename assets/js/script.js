
// Show current date 
function main() {
    $('#currentDay').text(moment().format('dddd MMMM do YYYY'));  
    updateTime();
    $(document).on('click','.saveBtn', saveBtn)
};

// select hour compare to time, and update textarea color 
function updateTime() {
    $('.hour').each(function() {
        // get hour 
        var hour = moment($(this).text().trim(), 'LT');
        // compare to hour to current time
        var compareHour = Math.ceil(moment.duration(hour.diff(moment())).asHours());
        // insert a new class into text area 
        if(compareHour < 0) {
            $(this).next().addClass('past')
        } else if (compareHour == 0) {
            $(this).next().addClass('present');
        } else ($(this).next().addClass('future'))
    });
};

// added save button function 
function saveBtn(event) {
    var textArea = $(event.target).siblings('.description').val(); /// grabs sibling and class input data
    var hourParent = $(event.target).parent('.time-block').attr('id'); /// grabs parent and class id attribute for hours 
    localStorage.setItem(hourParent, textArea);
}

$(document).ready(main)