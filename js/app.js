$(function() {

    $("#searchTerm").submit(function(event){
        event.preventDefault();
        var query = $('#query').val();
        getRequest(query);
    });
    function getRequest(query) {
        var params = {
            key: "AIzaSyBcohE5KMlFccLNp_ZnMDI-bRcbJDHMgDUAIzaSyBcohE5KMlFccLNp_ZnMDI-bRcbJDHMgDU",
            part: 'snippet',
            q: query
        };
        url = 'https://www.googleapis.com/youtube/v3/search';

        $.getJSON(url, params, function(data) {
            showResults(data.Search);
        });
    }

    function showResults(results) {
        var html = "";
        $.each(results, function(index, value) {
            html += '<li>' + value.Title + '</li>';
            console.log(value.Title);
        });
        $('#queryResults').html(html);
    }
});
