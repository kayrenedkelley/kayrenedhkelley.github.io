function doInputOutput() {
    //Get information from user.
    var temperature = parseFloat(document.getElementById('temperature').value);
    var windSpeed = parseFloat(document.getElementById('windSpeed').value);
    var result = 0;

    result = windChill(temperature, windSpeed);

    //send back the wind chill.
    document.getElementById('output').innerHTML = "The wind chill is " + result;
}

/*Input: no input 
 *Processing: 2nd function is to run the formula for the wind chill.
 *Output: Return the winchill to the first formula and send it out with the result.
 */

function windChill(tempF, speed) {
    //Simplify the formula.
    var a = 35.74;
    var b = .6215 * tempF;
    var s = Math.pow(speed, .16);

    //Run the formula to get the wind chill.
    var f = a + b - 35.75 * s + .4275 * tempF * s;
    f = f.toFixed(2);
    //Return the answer to the output on the first function.
    return f;
}