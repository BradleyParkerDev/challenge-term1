/////////////////////////////////////////////////////////
//arrayReverse
/////////////////////////////////////////////////////////
let myArray = [1,2,3,4,5];
function arrayReverse(arr){
    let newArray = [];
    for(let i = arr.length - 1; i > -1; i--){
        newArray.push(arr[i]);
        // arr.pop()
    }
    console.log(newArray);
}
arrayReverse(myArray);


/////////////////////////////////////////////////////////
//inBothArrays
/////////////////////////////////////////////////////////
myArray = [20,30,1,3,2];
let myArray2 = [20,30,3,4,5];
function inBothArrays(arr1, arr2){
    let newArray = [];
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i]===arr2[i]){
            newArray.push(arr1[i]);
        }
    }
    console.log(newArray);
}
inBothArrays(myArray,myArray2);


/////////////////////////////////////////////////////////
//characterCount
/////////////////////////////////////////////////////////
let myChar = 'h';
let myString = 'hello'
function characterCount(str, c){
    for(let i = 0; i < str.length; i++){
        if(c === str[i]){
            console.log(str[i]);
        }
    }
}
characterCount(myString,myChar);


/////////////////////////////////////////////////////////
//numberSwap
/////////////////////////////////////////////////////////
let num1 = 1;
let num2 = 2;
function numberSwap(){
    let temp = num1;
    num1 = num2;
    num2 = temp;  
}
numberSwap(num1,num2);
console.log(num1);
console.log(num2);


/////////////////////////////////////////////////////////
//palindrome
/////////////////////////////////////////////////////////
function palindrome(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[str.length-(1+i)]){
            newStr = newStr + str[i];
        }
    }
    if(newStr === str){
        console.log("The string is a palindrone!")
    }
    else{
        console.log("The string is not a palindrone!")
    }
}
palindrome("racecar");
palindrome("Bradley");


/////////////////////////////////////////////////////////
//targetSum
/////////////////////////////////////////////////////////
function targetSum(arr, num){
    let temp = 0;
    let pairs = []
    for(let x = 0; x < arr.length; x++){
        for(let i = x; i < arr.length; i++){
            let newArr = [];
            if(arr[x] + arr[i] === num){
                newArr.push(arr[x]);
                newArr.push(arr[i]);
                pairs.push(newArr)
            }  
        }
    }
    console.log(pairs);
}
targetSum([5,1,6,8,3,9],14);


/////////////////////////////////////////////////////////
//isPrime
/////////////////////////////////////////////////////////
function isPrime(num){
    let count = 0;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            count++
        }
    }
    if(count > 0){
        return false;
    }
    else{
        return true;
    }
}
console.log(isPrime(43));


/////////////////////////////////////////////////////////
//secondLargest
/////////////////////////////////////////////////////////
function secondLargest(arr){
//Bubblesort
    //Outer pass
    for(let i = 0; i < arr.length; i++){
        //Inner pass
        for(let j = 0; j < arr.length - i - 1; j++){
            //Value comparison using ascending order
            if(arr[j + 1] < arr[j]){
                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr[arr.length-2];
};
console.log(secondLargest([5,3,8,4,6]));