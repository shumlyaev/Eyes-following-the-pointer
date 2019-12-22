var fields = document.getElementsByClassName('field');
var c1 = document.getElementsByClassName('circle1');
var c2 = document.getElementsByClassName('circle2');
document.onmousemove = function(event) {
    var x = event.x;
    var y = event.y;
    for (var i = 0; i < fields.length; i++) {
        offLeft = fields[i].offsetLeft;
        offTop = fields[i].offsetTop;
        c1[i].style.transform = 'rotate(' + angle(x - 77 - offLeft, y - 183 - offTop) + 'deg)';
        c2[i].style.transform = 'rotate(' + angle(x - 183 - offLeft, y - 183 - offTop) + 'deg)';
    }
}
function angle(x, y) {
    if (x > 0) return 57.2958 * Math.atan(y / x);
    if (x < 0) return 57.2958 * (Math.PI + Math.atan(y / x));
}
