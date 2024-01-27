//resource: https://www.youtube.com/watch?v=82hnvUYY6QA

document.getElementById('button').addEventListener('click', loadProducts);

function loadProducts() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'shop.json', true);

    xhr.onload = function() {
        if(this.status == 200) {
            var shop = JSON.parse(this.responseText);
            var display = '';

            for(var i in shop) {
                display += 
                    '<div class= "shop">' +              
                        '<ul class= "shop_ul">' +
                            '<li>' + shop[i].name + '</li>' +
                            '<li> <img src="' + shop[i].picture + '" width="400px" height="400px"> </li>' +
                        '</ul>' +       
                    '</div>';
            }
            document.getElementById('shop_product').innerHTML = display;
        }
    }
    xhr.send();
}
