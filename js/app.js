$(function() {

    $("ul").css("list-style-type", "none");

    $("#searchTerm").submit(function(event){
        event.preventDefault();
        var query = $('#query').val();
        getRequest(query);
    });
    function getRequest(query) {
        var params = {
            key: 'AIzaSyBcohE5KMlFccLNp_ZnMDI-bRcbJDHMgDU',
            part: 'id, snippet',
            q: query
        };
        url = 'https://www.googleapis.com/youtube/v3/search';

        $.getJSON(url, params, function(data) {
            console.log(data.items[2].snippet.thumbnails.default.url);

            showResults(data.items);
        });
    }

    function showResults(results) {
        var html = "";
        $.each(results, function(index, value) {
            var thumbnail = value.snippet.thumbnails.default.url;
            html += "<li><img src='" + thumbnail + "'>" + value.snippet.title + "</li>";
            console.log(value.snippet.title);
        });
        $('#queryResults').html(html);
    }
});



//this is what the $.each method is doing
/* var html = "";
 $.each(results, function(index, value) {
 html += '<li>' + value.snippet.title + '</li>';
 console.log(value.snippet.title);
 });
 $('#queryResults').html(html); */
//for (var i = 0; i < data.items.length; i++)