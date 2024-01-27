//resource: https://www.youtube.com/watch?v=82hnvUYY6QA

document.getElementById('button').addEventListener('click', loadProducts);

function loadProducts() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'about.json', true);

    xhr.onload = function() {
        if(this.status == 200) {
            var about = JSON.parse(this.responseText);
            var display = '';

            for(var i in about) {
                display += 
                    '<div class= "about">' +              
                        '<ul class= "about_ul">' +
                            '<li>' + about[i].Names_Titles + '</li>' +
                            '<li> <img src="' + about[i].picture + '" width="auto" height="350px"> </li> <br>'  +
                        '</ul>' +       
                    '</div>';
            }
            document.getElementById('about_venues').innerHTML = display;
        }
    }
    xhr.send();
}