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