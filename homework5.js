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

