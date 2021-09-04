//請分別用 for loop 以及 while 迴圈，印出 1~9
function Quiz_Lv1_1_ForLoop(num){
    for(let i= 1; i < num + 1; i++){
       console.log('for loop:' + i);
       //document.write('for loop:' + i + '<br>');
    }
}

function Quiz_Lv1_1_WhileLoop(num){
    let i=1;
    while(i <= num){
        console.log('while:' + i);
        //document.write('while:' + i + '<br>');
        i++;
    }
}

Quiz_Lv1_1_ForLoop(9);
Quiz_Lv1_1_WhileLoop(9);

//請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n
function print(num){
    for(i = 1; i <= num; i++){
        console.log(i);
        //document.write(i + '<br>');
    }
}

print(10);

//寫一個函式 star，接收一個參數 n，並印出 n 個 *
function star(num){
    for(i = 1; i <= num; i++){
        console.log('*');
        //document.write('*');
    }
}

star(3);

//請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *
function starReturn(num){
    let star='';
    for(i = 1; i <= num; i++){
        star += '*';
    }
    return star;
}

console.log(starReturn(5));

//請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫
function isUpperCase(target_string){
    //String.substr(start, length) ：從指定的位置 start 截取 到 指定「長度」length 的字串。
    //String.substring(start, index) ：從指定的位置 start 到 指定「位置」index 的字串。
    //非正規式表達，以ASCII的編碼進行比較
    /*
    法1:
    if(target_string.substring(0,1) >= 'A' && target_string.substring(0,1) <= 'Z'){  
        return true;
    }
    法2:
    if(target_string.charCodeAt(0) >= 65 && target_string.charCodeAt(0) <= 90){  
        return true;
    }
    */

    //正規式表達     /^[A-Z]+$/.test(字串)
    if(/^[A-Z]+$/.test(target_string.substring(0,1))){
        return true;
    }
    else{
        return false;
    }
}

console.log(isUpperCase('abcd'));
console.log(isUpperCase('Abcd'));

//請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1
function position(target_string){
    let hasUpperCase;
    for(i = 0; i <= target_string.length; i++){
        if(target_string.substring(i, i+1) >= 'A' && target_string.substring(i, i+1) <= 'Z'){  
            //charAt() 取字串中的一個字 index 索引指標從 0 算起、如果參數 index 不在 0 與字串長度之間，將返回一個空字串。
            console.log(target_string.charAt(i),i); 
            hasUpperCase=true      
            break;      
        }
    }    
    if(hasUpperCase !== true){
        console.log(-1);
    }

}

position('abcd');
position('Abcd');
position('abCD');

//請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n
function findSmallCount(array_num, compare_num){
    let total_Count=0;
    for(i=0; i < array_num.length; i++){
        if(array_num[i] < compare_num){
            total_Count += 1;
        }
    }
    return total_Count;
}

console.log(findSmallCount([1, 2, 3], 2));
console.log(findSmallCount([3, 2, 5, 8, 7], 0));

//請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和
function findSmallerTotal(array_num, compare_num){
    let total=0;
    for(i=0; i < array_num.length; i++){
        if(array_num[i] < compare_num){
            total += array_num[i];
        }
    }
    return total;
}

console.log(findSmallerTotal([3, 2, 5, 8, 7], 999));
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0));

//請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）
function findAllSmall(array_num, compare_num){
    let target_array=[];
    for(i=0; i < array_num.length; i++){
        if(array_num[i] < compare_num){
            //array.push()功能： 會將一或多個的值，加入至一個陣列中。
            target_array.push(array_num[i]);
        }
    }
    return target_array;
}

console.log(findAllSmall([1, 2, 3], 10));
console.log(findAllSmall([1, 3, 5, 4, 2], 4)); 

//請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和
function sum(array_num){
    let total=0;
    for(i=0; i < array_num.length; i++){
        total += array_num[i];
    }
    return total;
}

console.log(sum([1, 2, 3]));
console.log(sum([-1, 1, 2, -2, 3, -3]));