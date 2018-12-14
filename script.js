var images = document.getElementById('carousel').getElementsByTagName('img');

var i = 1;
var a = images.length +1;
var b = images.length;

document.getElementById('carousel').innerHTML = "<img src=images/img0.jpg>";
document.getElementById('next').addEventListener("click", function () {

    i++;
    document.getElementById('carousel').innerHTML = "<img src=images/img" + i + ".jpg>";
    if(i === a){
        i = 1;
        document.getElementById('carousel').innerHTML = "<img src=images/img" + i + ".jpg>";
    }
});

document.getElementById('prev').addEventListener("click", function () {
    a--;
    document.getElementById('carousel').innerHTML = "<img src=images/img" + a + ".jpg>";

    if(a === 0){
        a = b;
        document.getElementById('carousel').innerHTML = "<img src=images/img" + a + ".jpg>";
    }
});