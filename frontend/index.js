$(function () {
    loadAllPost();
});

$('#search').click(function () {
    loadPostByUser();
});

function loadAllPost() {
    $('#posts').empty();
    //Get all posts
    var url = 'http://localhost:8080/api/posts/';

    // POINT 6. Call REST APIs with Axios
    axios.get(url)
        .then(function (response) {
            console.log(response.data.length);
            for (i = 0; i < response.data.length; i++) {
                $.get('post.mst', function (template) {
                    var rendered = Mustache.render(template, response.data[i]);
                    $('#post').html(rendered);
                });
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    // POINT 7. User Mustache render template(post.mst) with json data from the API


}

function loadPostByUser() {
    // Additional 1.
}


