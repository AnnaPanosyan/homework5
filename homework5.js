// task1
// Given an array of numbers. Write a function to separate odd and even numbers in different
// arrays.

function oddAndEven (arr){
    let oddArr = []; 
    let evenArr = [];
    let array = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 ){
            oddArr.push(arr[i]);
        }else{
            evenArr.push(arr[i]);
        }
    }
array.push(oddArr);
array.push(evenArr);
    return array;
}
    
let length =+prompt("Enter array's length")
let arr = [];
for (let i = 0; i < length ; i++){
    arr.push(+prompt("Enter array's numbers")) 
}
oddAndEven(arr);

// task2
// Given a word and a list of possible anagrams, select the correct sublist.

function wordSelect( w, a) {
    let result;
    for(let i = 0; i < a.length; i++ ){
        if(w.length === a[i].length){
            for(let j = 0; j < a[i].length; j++){
                for(let k=0; k < w.length; k++){
                    if(a[i][j] === w[k]){ 
                        result = a[i]; 
                        break;
                    }
                }
            }
        }
    }
    return result
}
let word = prompt("Enter a word");
let length = +prompt ("Enter a number")
let arr = []; 
for (let i = 0; i < length; i++){
    arr.push(prompt("Enter anagrams"))
}
wordSelect(word,arr);

// task3
// Write a function which receives two strings and removes appearances of the second string from
// the first one.

let sentence = prompt("Enter a sentence.");
let string = prompt("Enter a string.")

function receives (s, st) {
let result =  " ";
    for(let i = 0; i < s.length ; i++){
        let bull = false;
        for(let j = 0; j < st.length; j++){
            if(s[i] === st[j]){
                bull = true;
                break;
            }
        }
    if (!bull){
       result = result + s[i]
    }
    }
    return result
}
receives(sentence, string)

// task4
// Given an array of numbers. Create an array containing only unique elements.

let arr = [];
let arrLength = prompt("Enter arrray's length.")
for(let i = 0; i < arrLength; i++ ){
    arr.push(prompt("Given an array of number."))
}
function findUniqueElements (arr) {
    let result = [];
    for(let i = 0; i < arr.length ; i++){
        let bull = false;
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                bull = true;
                break;
            }
        }
    if (!bull){
        result.push(arr[i])
    }
    }
    return result
}
findUniqueElements(arr)



// task5
// Given a string and symbols. Change first symbol by the second one in the string.

let string = prompt("Enter a string");
let changeSymbol = prompt ("Enter the changeing symbol");
let symbol = prompt ("Enter a symbol");
function changeSymbols(string, c, s) {
    let result = " ";
    for(let i = 1 ; i < string.length; i++){
        if(string[i] === c){
           result = result + s
         }else{
            result = result + string[i];
         }
    }
   return result
}
changeSymbols(string,changeSymbol,symbol)
