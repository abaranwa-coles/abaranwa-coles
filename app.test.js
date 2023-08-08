function calculator(str) {
  //regex to match numbers and operators
    var regex = /(\d+)(\+|\-|\*|\/)(\d+)/;
  //match the string to get the numbers and operator
    var match = str.match(regex);
    //get the numbers and operator
    var num1 = parseInt(match[1]);
    var num2 = parseInt(match[3]);
    var operator = match[2];
    //calculate the result
    var result = 0;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return "invalid option"
    }
    return result;
}
//write test cases to test the calculator function
console.log(calculator("2+3")); //5
console.log(calculator("2-3")); //-1
console.log(calculator("2*3")); //6
console.log(calculator("2/3")); //0.6666666666666666
//console.log(calculator("2%3")); //invalid option

function testName(name) {
    //match name with one or two words
    var regex = /^[a-zA-Z]+\s*[a-zA-Z]+$/;
        return regex.test(name);
}
console.log(testName("Ram")); //true
