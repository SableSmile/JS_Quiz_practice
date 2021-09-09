//請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案
function stars(num){
    for(i = 1; i <= num; i++){
        for(j = 1; j <= i; j++){
            console.log('*');
            //document.write('*');
        }
        console.log('\n');
        //document.write('<br>');
    }
}

stars(5);

//請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串
function makeStars(num){
    let stars='';
    for(i = 1; i <= num; i++){
        for(j = 1; j <= i; j++){
            stars += '*';
        }
        if(i < num){
            stars += '\\n';
        }        
    }    
    return stars.toString();
}

console.log(makeStars(3));

//請寫出一個函式 stars2，接收一個參數 n，並依照規律印出圖形
function stars2(num){
    let stars='';
    for(i = 1; i <= num; i++){
        for(j = 1; j <= i; j++){
            stars += '*';
        }
        stars += '\n';      
    }  
    let loop_down_count=num-1;  
    for(i = loop_down_count; i > 0; i--){        
        for(j = loop_down_count; j > 0; j--){
            stars += '*';
        }
        loop_down_count--;
        stars += '\n';  
    }
    return stars.toString();
}

console.log(stars2(5));

//請寫一個函式 table，接收一個數字 n，印出 n*1 ~ n*9 的結果
function table(num){
    let total;
    for(i = 1; i <= 9; i++){
        total = num * i;
        console.log(num + '*' + i + '=' + total)
    }  
}

table(2);

//請寫出一個 function table9to9，並列出 1*1 ~ 9*9
function table9to9(){
    let total;
    for(i = 1; i <= 9; i++){
        for(j = 1; j <= 9; j++){
            total = i * j;
            console.log(i + '*' + j + '=' + total)
        }
    }  
}

table9to9();

//費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 ….
function fib(num){
    //遞迴做法
    /*
    if(num === 0){
        return 0;        
    }
    else if(num === 1){
        return 1;        
    }
    else{   
        return fib(num-1) + fib(num-2);      
    }
    */

    //迴圈解法1-陣列
    let total=[];
    total[0] = 0;
    total[1] = 1;
    if(num === 0){
        return total[num];      
    }
    else if(num === 1){
        return total[num];     
    }
    else{
        for(i = 2; i <= num; i++){
            total[i] = total[i-1] + total[i-2];               
        }  
        return total[num]; 
    }  

    //迴圈解法2-參數紀錄
    /*
    let fib_n1 = 0
    let fib_n2 = 1;
    if(num === 0){
        return 0;      
    }
    else if(num === 1){
        return 1;     
    }
    else{
        for(i = 2; i <= num; i++){
            fib_n2 = fib_n2 + fib_n1;
            fib_n1 = fib_n2 - fib_n1;                         
        }  
        return fib_n2; 
    }  
    */
}
console.log(fib(2)); 
console.log(fib(8)); 
console.log(fib(10)); 

//請寫出一個函式 reverse，接收一個字串，並且回傳反轉過後的字串。（禁止使用內建函式 reverse）
function reverse(input_string){
    let target_string = [];
    for(i = input_string.length-1; i >= 0; i--){
        //  陣列.join() 陣列轉換成字串
        // Array.from() 字串轉陣列
        target_string.push(input_string[i]);    
    }
    return target_string.join('');    
}

console.log(reverse('abcd'));
console.log(reverse('12345aa'));

//請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串
function swap(input_string){
    let target_string=[];
    for(i = 0; i < input_string.length; i++){
        //if(input_string.substring(i, i+1) >= 'A' && input_string.substring(i, i+1) <= 'Z'){  
        if(input_string.charCodeAt(i) >= 65 && input_string.charCodeAt(i) <= 90){
            //charAt() 取字串中的一個字 index 索引指標從 0 算起、如果參數 index 不在 0 與字串長度之間，將返回一個空字串。
            target_string.push(input_string[i].toLowerCase());  
        }
        else{
            target_string.push(input_string[i].toUpperCase());  
        }
    }
    return target_string.join('');  
}

console.log(swap('Peter'));
console.log(swap('AbCdE'));

//請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。（禁止使用內建函式 sort）
function findMin(array_num){
    let min_num = array_num[0];
    for(i = 0; i < array_num.length; i++){
        if(array_num[i] < min_num){
            min_num = array_num[i];
        }
    }
    return min_num;
}

console.log(findMin([1, 2, 5, 6, 99, 4, 5]));
console.log(findMin([1, 6, 0, 33, 44, 88, -10]));

//請寫一個 function findNthMin，接收一個陣列以及一個數字 n，找出第 n 小的數字。（禁止使用內建函式 sort）
function findNthMin(array_num,index_num){
    let compare_num;
    for(i = array_num.length; i >= 0; i--){
        for(j = 0; j < array_num.length; j++){
            if(array_num[j] > array_num[j+1]){
                compare_num = array_num [j];
                array_num[j] = array_num[j+1];
                array_num[j+1] = compare_num;
            }
        }
    }
    return array_num[index_num-1];
}

console.log(findNthMin([1, 3, 5, 7, 9], 3));
console.log(findNthMin([1, 1, 1, 1, 1], 2));
console.log(findNthMin([3, 7, 5, 10, 9], 3));