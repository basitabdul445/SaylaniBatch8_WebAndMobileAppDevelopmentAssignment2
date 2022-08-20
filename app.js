// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
function reverseNumber() {
    var num = document.getElementById("num").value;
    var rem = 0;
    while(num > 0) {
        rem = (num % 10 ) + (rem * 10);
        num = Math.floor(num / 10);
    }
    document.getElementById("reversedNumber").innerText = "Reversed Number = " + rem;
}





// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam, radar or level.
function checkForPalendromicString() {    
    var str = document.getElementById("pString").value;
    var msg = " is a palendromic string";
    var j = str.length - 1; 

    for(var i = 0 ; i < Math.floor(str.length) / 2 - 1 ; i++){
        if(str[i] !== str[j]){
            msg = " is not a palendromic string";
            break;
        }
        j--;
    }
    document.getElementById("palendromicString").innerText = "'"+ str +"' "+ msg;
}






// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g
function stringCombination() {

    var str = document.getElementById("string").value;
    document.getElementById("combinationOfSubString").innerHTML = null;
    for (var i = 0 ; i < str.length ; i++) { 
        
        for(var j = i ; j < str.length ; j++){   
               document.getElementById("combinationOfSubString").innerHTML =  subString(str.slice(i,j+1));
        }
    }    
}

function subString(subStr){
    var val = document.getElementById("combinationOfSubString").innerHTML;
    return val + "<p>" + subStr + "</p>";
}



// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function sorting () {
    var str = document.getElementById("unsortedString").value;
    var arrStr = stringToArray(str);
    var sortedStr = "";

    for (var i = 0 ; i < arrStr.length ; i++) {

        for(var j = i+1 ; j < arrStr.length ; j++) {

            if(arrStr[i].toUpperCase() > arrStr[j].toUpperCase()){
                var temp = arrStr[i];
                arrStr[i] = arrStr[j];
                arrStr[j] = temp;
            }            
        }
        sortedStr = sortedStr.concat(arrStr[i]);
    }

    document.getElementById("sortedString").innerHTML = "<p>"+ sortedStr +"</p>";
}

function stringToArray(str) {
    var arrStr = [];
    for(var i = 0 ; i < str.length ; i++) {
        arrStr.push(str[i]);
    }
    return arrStr;
}






// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function capatilizeString () {
    var regStr = document.getElementById("regString").value;
    if (regStr !== ""){
        var capStr = "";
        capStr =  regStr[0].toUpperCase();
        for(var i = 1 ; i < regStr.length ; i++) {
            if ((regStr[i] === "," || regStr[i] === "." || regStr[i] === " ") && regStr[i + 1] >= "a" && regStr[i + 1] <= "z") {

                capStr = capStr.concat( regStr[i] + regStr[++i].toUpperCase());
            }
            else {
                capStr = capStr.concat(regStr[i]);
            }
        }
    }
    document.getElementById("capatilizedString").innerHTML = "<p>"+ capStr +"</p>";
}




// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
function findLongestWord () {
    var str = document.getElementById("longestString").value;

    if(str !== "") {
        var word = "";
        var longestWord = "";

        for(var i = 0 ; i <= str.length ; i++) {

            if(str[i] === " " || str[i] === "," || str[i] === "." || i === str.length  ){

                if (word.length >= longestWord.length){
                    longestWord = word;
                }
                word = "";
            }
            else{
                word = word.concat(str[i]);
            }
        }
    }
    document.getElementById("longestWord").innerHTML = "<p id=LWord>"+longestWord+"</p>";
}



// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Example string : 'The quick brown fox'
// Expected Output : 5
function findVovelsInString () {
    var str = document.getElementById("vovelsString").value;
    var count = 0;
    if(str !== "") {
        for(var i = 0 ; i < str.length ; i++) {
            switch(str[i]) {
                case "a" :
                case "A" :
                case "e" :
                case "E" :
                case "i" :
                case "I" :
                case "o" :
                case "O" :
                case "u" :
                case "U" :
                    count++;
            }
        }
    }
    document.getElementById("VovelsInString").innerHTML = "<p> Number of Vovels in Specified String : "+ count +"</p>";
}








// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function checkNumberIsPrime() { 
    var num = +document.getElementById("Naturalnumber").value;
    var msg = "";
    var i = 2;
    if(num >= 0 ) {
        while ( i < num ){
            if(num % i == 0){
                msg = " : is Not a Prime Number";
                break;
            }
            i++;
        }
        if(num === 0 || num === 1 || i === num) {
            msg = " : is a Prime Number";
        }
    }
    else {
        msg = " : Invalid InPut";
    }
    document.getElementById("primeNumber").innerHTML = "<h4>"+ num + msg +"</h4>"
}




// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
console.log(identifyTypeOfArgument("abdul basit"));
console.log(identifyTypeOfArgument(1234567));
console.log(identifyTypeOfArgument(false));
console.log(identifyTypeOfArgument(obj = {a : "hi" , b : 20}));
console.log(identifyTypeOfArgument(function fun (){console.log("Hello khan")}));
var aa ;
console.log(identifyTypeOfArgument(aa));

function identifyTypeOfArgument(arg) {

    return typeof(arg);
}








// 10. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]    
// Expected Output : 2,4
function sortingArray () {

    var val = document.getElementById("inputArray").value;
    var value = "";
    var value2 = "";
    var arr = [];
    var flag = true;

    for(var i = 0 ; i < val.length ; i++){   
        
        if (val[i] >= "0" && val[i] <= "9" || val[i] === "-"){

            while(val[i] !== "[" && val[i] !== "." && val[i] !== "," && val[i] !== " " && val[i] !== "]" && i !== val.length) {
                
                if(val[i] ==="*" || val[i] ==="/" || val[i] ==="-" || val[i] ==="+" || val[i] === "%") {
                    var operator = val[i];
                    flag = false;
                    i++;
                    continue;
                }

                if (flag){
                    value = value.concat(val[i]);
                }
                else{
                    value2 = value2.concat(val[i]);
                }   
                i++;
            }
            if (typeof(+value) === "number" && typeof(+value2) === "number"){
                switch(operator) {
                    case "+" :
                        value = Number(value) + Number(value2);
                        break;
                    case "-" :
                        value = Number(value) - Number(value2);
                        break;
                    case "*" :
                        value = Number(value) * Number(value2);
                        break;
                     case "/" :
                        value = Number(value) / Number(value2);
                        break;
                    case "%" :
                        value = Number(value) % Number(value2);
                        break;
                }
            }
            arr.push(value);
            value = "";
            value2 = "";
            operator = "";
            flag = true
        }
    }

    for (var i = 0 ; i < arr.length ; i++) {

        for (var j = i+1 ; j < arr.length ; j++) {
            if (compare(arr[i] , arr[j])) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    var secondLowest = arr[0];
    var seconfHighest = arr[arr.length - 1];

    for (var i = 1 ; i < arr.length-2 ; i++){
        if(secondLowest > arr[i] ){
            secondLowest = arr[i]
            break;
        }
    }

    for (var i = arr.length-2 ; i >= 0 ; i--){
        console.log(arr[i]);
        if(arr[i] < seconfHighest ){
            seconfHighest = arr[i]         
            break;
        }
    }

    var secondHighestAndSecondLowest = [secondLowest , seconfHighest];
    document.getElementById("sortedArray").innerHTML = "<p>"+ arr +"</p> <p>"+ secondHighestAndSecondLowest +"</p>";
}

function compare(a , b) {
    if(a-b > 0){
       
        return true;
    }
     return false;
}



