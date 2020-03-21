let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");

function sayHello() {
    let result = "Hello " + firstName.concat(` ${lastName}`) + "!";
    console.log(result);
    alert(result);
}



let firstName2 = prompt("What is your favorite author's first name?");
let lastName2 = prompt("What is your favorite author's last name?");
// let firstName3 = firstName2.replace("author's", "movie star");
// let lastName3 =lastName2.replace("author's", "movie star");



function sayHello2() {
    result2 = "Hello " + firstName2.concat(` ${lastName2}!`);
    console.log(result2);
    alert(result2);
}

// function sayHelloToFavorites() {    
// result3 = "Hello " + firstName2.concat(` ${lastName2}!`);
// console.log(result3);
// alert(result3);
// console.log();


// }

sayHello();
sayHello2();
// sayHelloToFavorites();