$(document).ready(function () {

    var table = $('#example').DataTable({
        language: {
            searchPlaceholder: "Search"
        },
        
        "dom": "<'#searchid'f>trip"
    });
});

$(window).on("load", function () {
    $("#searchid :input").addClass('empty');
});

$(document).on('keyup', '#searchid :input', function () {
    var input = $("#searchid :input");
    if (input.val().length === 0) {
        input.removeClass('no-icon');
        input.addClass('empty');

    } else {
        input.removeClass('empty');
        input.addClass('no-icon')
    }
});