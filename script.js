var fields = document.getElementsByClassName('field');
var c1 = document.getElementsByClassName('circle1');
var c2 = document.getElementsByClassName('circle2');

document.onmousemove = function(event) {
    var x = event.x;
    var y = event.y;
    //field[0].innerHTML = '!';
    //console.log(field[0].offsetLeft);
    //console.log("a: " + a.offsetLeft);
    for (var i = 0; i < fields.length; i++) {
        offLeft = fields[i].offsetLeft;
        offTop = fields[i].offsetTop;
        c1[i].style.transform = 'rotate(' + angle(x - 77 - offLeft, y - 183 - offTop) + 'deg)';
        c2[i].style.transform = 'rotate(' + angle(x - 183 - offLeft, y - 183 - offTop) + 'deg)';
        //console.log(fields[i].offsetLeft);
    }
    //document.querySelector('.circle1').style.transform = 'rotate(' + angle(x - 85, y - 190) + 'deg)';
    //document.querySelector('.circle2').style.transform = 'rotate(' + angle(x - 190, y - 190) + 'deg)';
}

function angle(x, y) {
    if (x > 0) return 57.2958 * Math.atan(y / x);
    if (x < 0) return 57.2958 * (Math.PI + Math.atan(y / x));
}
