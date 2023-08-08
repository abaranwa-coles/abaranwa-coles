// create a function to reverse a string
function reverseString(str) {
    //split the string into an array
    var arr = str.split("");
    //reverse the array
    arr.reverse();
    //join the array
    var result = arr.join("");
    return result;
}
console.log(reverseString("hello")); //olleh