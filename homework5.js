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
    
let length = +prompt("Enter a number")
let arr = [];
for (let i = 0; i < length ; i++){
    arr.push(+prompt("Enter numbers")) 
}
oddAndEven(arr)