// Question 1 -------------------------------------

const arr1 = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2];
inputNum = 7;
numPair = [];

function findSum(elem1, elem2,){
    for(let x = 0; x < elem1.length; x++){
        for(let z = 0; z < elem1.length; z++){
            if(elem1[x] + elem1[z] == 7){
                subPair = [elem1[x], elem1[z]]
                elem2.push(subPair = [elem1[x], elem1[z]])
            }
        }
    }
}

findSum(arr1, numPair)

console.log(numPair);

// Question 2 ------------------------------------

const arr2 = [1,8,9,5,2,6,4]
const nameR = ["Kaneki", "Arima", "Tobi", "Kise", "Bakugo"]

console.log(arr2);
console.log(nameR);

function ReverseArr(elem){
    for(let x = elem.length-1; x >=0; x--){
        elem.push(elem[x]); 
    }
    for(let x = 0; x < elem.length; x++){
        elem.shift(elem.length/2)
    }    
}

ReverseArr(arr2);
ReverseArr(nameR)
ReverseArr(arr1)

console.log(arr2);
console.log(nameR);
console.log(arr1);

// Question 3 ---------------------------------------

const str1 = "desserts"
const str2 = "stressed"

const str11 = 'this is a string'
const str21 = 'gnirts a si siht'

const str12 = 'not rotation string'
const str22 = 'string rotation not'

const str13 = 'strings'
const str23 = 'gnirts'

let ans3;

// console.log(str13.length, str23.length);

function stringRotation(elem1, elem2, elem3){
    if(elem1.length == elem2.length){
        for(let x = 0; x < elem1.length; x++){
            // console.log(elem1[x]);
            for(let z = elem2.length - 1; z >= 0; z--){
                // console.log(elem2[z]);
                if(elem1[x] == elem2[z]){
                    elem3 = "Strings are rotation of each other";
                }
                else{
                    elem3 = "Strings are not rotation of each other!";
                }
            }
        }
    }
    else {
        elem3 = "Please enter valid strings!"
    }
    
    return elem3;
}

let answer3 = stringRotation(str1, str2, ans3)
let answer30 = stringRotation(str11, str21, ans3)
let answer31 = stringRotation(str12, str22, ans3)
let answer32 = stringRotation(str13, str23, ans3)

console.log(answer3);
console.log(answer30);
console.log(answer31);
console.log(answer32);

// Question 4 -----------------------------------------------------

const str4 = 'The strings'
const str40 = 'Elements'

function firstNonRepeatedCharacter(string) {
    let stringU = string.toUpperCase()
    for (var x = 0; x < stringU.length; x++) {
      var c = stringU.charAt(x);
      if (stringU.indexOf(c) == x && stringU.indexOf(c, x + 1) == -1) {
        return c;
      }
    }
    return null;
}

let ans4 = `First non repeating character is ${firstNonRepeatedCharacter(str4)}`
let ans40 = `First non repeating character is ${firstNonRepeatedCharacter(str40)}`

console.log(ans4);
console.log(ans40);

// Question 5 --------------------------------------------------

// img address for reference = https://media.geeksforgeeks.org/wp-content/uploads/tower-of-hanoi.png

// code source = https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/

function towerOfHanoi(n, from_rod,  to_rod,  aux_rod){
    
    if (n == 0){
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    // document.write("Move disk " + n + " from rod " + from_rod +
    // " to rod " + to_rod+"<br/>");
    console.log("Move disk " + n + " from rod " + from_rod +" to rod " + to_rod);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}
 
// Driver code
var N = 3;
     
// A, B and C are names of rods
towerOfHanoi(N, 'A', 'C', 'B');

// Question 6 ---------------------------------------------------------

let postExp = "ABC/-AK/L-*";

let preExp = new Array();

function postToPre(postExp){
    let l = postExp.length;

    for(let x = 0; x < l; x++){

        function isOpreator(x){
            switch(x){
                case '+':
                case '-':
                case '/':
                case '*':
                    return true;
            }
            return false;
        }

        if(isOpreator(postExp[x])){
            let op1 = preExp[preExp.length - 1];
            preExp.pop();
            let op2 = preExp[preExp.length - 1];
            preExp.pop();

            let temp = postExp[x] + op1 + op2

            preExp.push(temp);
        }
        else{
            preExp.push(postExp[x] + '')
        }
    }

    let ans = '';
    while(preExp.length > 0)
        ans += preExp.pop();
        return ans;
}

let ans6 = postToPre(postExp);
let finalAns6 = `${postExp} <- Postfix to Prefix -> ${ans6}`

console.log(finalAns6);

// Question 7 ------------------------------------------------------

let pre7 = "*-A/BC-/AKL";

let infix7 = new Array();

function preToInfix(){

    let l = pre7.length;

    for(let x = l - 1; x >= 0; x--){
        let z = pre7[x];

        function isOpreator7(x){
            switch(x){
                case '+':
                case '-':
                case '*':
                case '/':
                case '^':
                case '%':
                    return true;
            }
            return false;
        }

        if(isOpreator7(z)){
            let op1 = infix7[infix7.length - 1]
            infix7.pop()
            let op2 = infix7[infix7.length - 1]
            infix7.pop()

            let temp = '(' + op1 + z + op2 + ')'
            infix7.push(temp);
        }
        else{
            infix7.push(z + '')
        }
    }
    return infix7[infix7.length - 1]
}

let ans7 = preToInfix(pre7)
let finalAns7 = `${pre7} <- Prefix to Infix -> ${ans7}`

console.log(finalAns7);

// Question 8 ---------------------------------------------

class Stack{
    constructor(){
        this.items = [];
        this.size = 0;
        this.push = function(val){
            this.items.push(val)
            this.size += 1
        }
        this.pop = function(){
            if(this.size == 0){
                return "Stack is empty"
            }
            this.size -= 1;
            return this.items.pop()
        }
        this.peek = function(){
            if(this.size == 0){
                return "Stack is empty"
            }
            return this.items[this.size - 1]
        }
    }
}

let exp8 = "{{{{][}}}}";
let exp80 = '([{}])';
let expStack = new Stack();
function isBalanced(exp8){
    for(let x = 0; x<exp8.length;x++){
        let a = exp8[x]
        if(a == '(' || a == '[' || a == '{'){
            expStack.push(a)
            continue
        }
        if(expStack.size == 0){
            return false;
        }
        let bracket = expStack.pop()
        switch(a){
            case ')':
                if(bracket == '[' || bracket == '{'){
                    return false;
                }
                break;
            case ']':
                if(bracket == '{' || bracket == '('){
                    return false;
                }
                break;
            case '}':
                if(bracket == '[' || bracket == '('){
                    return false;
                }
                break;
        }
    }
    return expStack.size == 0 ? true: false;
}

let ans8;
let result = isBalanced(exp8)
// let result = isBalanced(exp80)
if(result == true){
    ans8 = 'Balanced'
}
else{
    ans8 = 'Not Balanced'
}

console.log(ans8);

// Question 9 --------------------------------------------------

let exp9 = [1,2,4,5,3,7,8]
let arrNew9 = new Stack()
let arrNew90 = new Stack()

function reverseStack(elem1, elem2){
    for(let x = elem1.length - 1; x >= 0; x--){
        elem2.push(elem1[x])
    }
    if(elem1 instanceof Array){
        return `Original Stack ${elem1.join(' ')}, Reverse Stack ${elem2.items.join(' ')}`;
    }
    else {
        return `Original Stack ${elem1}, Reverse Stack ${elem2.items.join(' ')}`;
    }
}

let ans9 = reverseStack(exp9, arrNew9)
let ans90 = reverseStack(exp8, arrNew90)
console.log(ans9);
console.log(ans90);

// Question 10 ----------------------------------------------

class SmallStack{
    constructor(){
        this.arr = [];
        this.push = function(val){
            this.arr.push(val)
        }
        this.small = function(){
            let minElem = this.arr[0]
            for(let x = 0; x < this.arr.length; x++){
                if(this.arr[x]<minElem){
                    minElem = this.arr[x]
                }
            }
            return minElem;
        }
        this.pop = function(){
            if(this.arr.length == 0){
                return "Stack is empty"
            }
            return this.items.pop()
        }
    }
}

let arrNew10 = new SmallStack();
console.log(arrNew10);
arrNew10.push(10)
arrNew10.push(2)
arrNew10.push(30)
arrNew10.push(60)
arrNew10.push(50)
arrNew10.push(20)
arrNew10.push(5)
console.log(arrNew10.arr);
console.log(arrNew10.small());



