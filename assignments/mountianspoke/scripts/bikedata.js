var tcx = '{"size": "one size", "colors": "Satin Neon Green/Black", "frame": "ALUXX-grade aluminum"}'
var tempt = '{"size": "XS S M", "colors": "White/Black/Rainbow", "frame":  "ALUXX-grade aluminum"}'
var trance = '{"size": "XS S M L XL", "colors": "Matte Grey/Neon Yellow/Green/Satin Neon Red/Black", "frame": "ALUXX-grade aluminum"}'

var myObject = JSON.parse(trance);
console.log(myObject);

var myString = JSON.stringify(myObject);
console.log(myString);