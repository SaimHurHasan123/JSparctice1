function areaandperimeter() {
    var l=parseInt(document.getElementById('length').value);
    var d=parseInt(document.getElementById('width').value);
    var area = l*d;
    var perimeter= 2*(l+d);
    document.getElementById('resulta').innerHTML='Area is'+' ' +area+' '+ 'sq. mtr.';
    document.getElementById('resultp').innerHTML='Perimeter is'+' ' +perimeter+' ' +'sq. mtr';


}