//請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort）
function sort(array_num){
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
    return array_num;
}

console.log(sort([ 6, 8, 3, 2]));
console.log(sort([ 1, 2, 7 ,5]));

//請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。
function flatten(array_num){
    //法1:使用concat.apply，但無法用於二層以上之巢狀陣列。
    //const target_array = [].concat.apply([],array_num);
    
    //法2:使用concat，但無法用於二層以上之巢狀陣列。
    //const target_array = [].concat(...array_num);

    //法3:使用ES 2019的flat(壓平層數，1即1層，Infinity則不限層數)做法
    //可參考:https://v8.dev/features/array-flat-flatmap?fbclid=IwAR0Mml_jRnoagn1FRykdjjjHJtXL0f5mp_sK9Anwp8jLS9iwW0Z1OkgGOA0
    const target_array = array_num.flat(Infinity);
    
    return target_array;
}

console.log(flatten([1, 2, 3]));
console.log(flatten([1, 2, [1, 2], [1, 3], 6]));
console.log(flatten([1, [2, [3, [4]], 5], 6]));

//請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹
function tree(num){
    
    let first_part_star = "";
    let line_counter = num-1;
    let first_part = "";
    let second_part = "";
    
    for(i = 1; i <= num ; i++){   
        let first_part_line = "";
        for(j = 0; j < line_counter; j++){            
            first_part_line += '_';                               
        }        
        if(i === 1){   
            first_part_star += '*';
            first_part = first_part_line + first_part_star + '\n';
        }
        else{
            first_part_star += '**';
            first_part = first_part_line + first_part_star + '\n';

        }
        console.log(first_part);
        line_counter--;
    }
    for(i = 1; i <= num; i++){
        for(j = 1; j <= num; j++){
            if(j === num){                
                second_part += '*' + '\n';
            }
            else{
                second_part += '_';
            }                       
        }        
    }
    console.log(second_part);
}
tree(2);
tree(5);
tree(7);

//請寫出一個 function winner，接收一個代表圈圈叉叉的陣列，並回傳贏的是 O 還是 X，如果平手或還沒下完，請回傳 draw
function winner(input_array){
//參考:https://medium.com/wei30172/%E5%B0%88%E6%A1%88%E7%B7%B4%E7%BF%92-%E5%9C%88%E5%9C%88%E5%8F%89%E5%8F%89%E5%B0%8F%E9%81%8A%E6%88%B2-html-css-js-613505ab7cfd
    /*const win_combination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
     ]*/

    let status = 'draw';    
    const target_array = [].concat(...input_array);
    console.log(target_array);
    //判斷是否有空值
    for(i = 0; i < target_array.length; i++){        
        if(target_array[i] === ''){
            return 'draw';
        }        
    }
    for(i = 0; i < 3; i++){           
        //判斷勝負
        switch(i){
            case 0:
                if(target_array[i] === target_array[i+1] && target_array[i] === target_array[i+2]){
                    if(target_array[i] === 'O'){
                        return 'O';
                    }
                    else
                        return'X';
                }
                else if(target_array[i] === target_array[i+3] && target_array[i] === target_array[i+6]){
                    if(target_array[i] === 'O'){
                        return 'O';
                    }
                    else
                        return'X';
                }
                else if(target_array[i] === target_array[i+4] && target_array[i] === target_array[i+8]){
                    if(target_array[i] === 'O'){
                        return 'O';
                    }
                    else
                        return'X';
                }
                else{
                    status = 'draw';
                }
            case 1:
                if(target_array[i] === target_array[i+3] && target_array[i] === target_array[i+6]){
                    if(target_array[i] === 'O'){
                        return 'O';
                    }
                    else
                        return 'X';
                }
                else{
                    status = 'draw';
                }
            case 2:
                if(target_array[i] === target_array[i+2] && target_array[i] === target_array[i+4]){
                    if(target_array[i] === 'O'){
                        return 'O';
                    }
                    else
                        return 'X';
                }            
                else{
                    status = 'draw';
                }
            default:
                status = 'draw';            
        }
    }
    return status;
}

console.log(winner([['O', 'O', 'X'], ['O', 'X', 'X'], ['O', 'X', 'O']]));
console.log(winner([['O', 'O', 'X'], ['O', 'X', 'X'], ['X', 'X', 'O']]));
console.log(winner([['O', 'O', 'X'], ['O', 'O', 'X'], ['X', 'X', '']]));

//請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。
//（質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除）
function isPrime(num){
    if (num === 1){
        return false;
    }
    else{
        for(i = 2; i < num; i++){
            if(num % i === 0){
                return false;
            }    
        }
    }
    return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(99));
console.log(isPrime(113));