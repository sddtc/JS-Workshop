function printI() {

    var arr_fun=[];
    for(var i=0; i<10; i++) {
        var fuc = function (){
          console.log(i);
        }
        arr_fun.push(fuc)
    }

    arr_fun[0].apply();
}

printI();


// var privateF = function privateF(i) {
//     return function() {
//         console.log(i);
//     }
// }

// function printWithPrivateF() {
//     for(var i=0; i<10; i++) {
//         setTimeout(privateF(i), 1000);
//     }
// }

// printWithPrivateF();