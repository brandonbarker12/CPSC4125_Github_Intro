$(document).ready(function() {
    //all custom jquery will go here
    //$(".jumotron-button").click(function(){
    //      $(".test").html("<b>Hello world!</b>");
    // }

    const a; //doesn't change
    var b = 1; //can change larger scope
    let c = 2; //can change smaller scope

    if( b == 2) { //falsy == !=

    } else if ( c === 3){ //same type === !==

    } else {

    }

    var d = b==2 && c ===1?"yes": a != null? "yes":"no"; //ternary condition ? true: false return(ternary)

    //basic arithmatic + - x /, modulus, 1+1=11 or b+1=11 not always going to be 2 (wasn't set as number)

    //string, number, array[], json{}



});