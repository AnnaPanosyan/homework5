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

