// reverse = (x) => {
//     const str_x = x.toString();
//     const arr_x = Array.from(str_x);
//     const output = {};
    
//     let end = arr_x.length-1;
//     let start = 0;
    
//     for(let i = 0;i<arr_x.length;i++)
//     {
//         //確認物件中是否有東西
//         if(Object.keys(output).length == 0)
//         {
//             //判斷是否為0和是否只有一個輸入
//             if(arr_x[end] == 0 && arr_x.length !== 1) 
//             {
//                 end--;
//                 continue;
//             }
//         }
 
//         if(arr_x[start] == '-')
//         {
//             output[start] = arr_x[start];
//             start++;
//             continue;
//         }
//         else if(arr_x[start] == 0 && arr_x.length === 1)
//         {
//             return 0;
//         }
//         output[start] = arr_x[end];
//         end--;
//         start++;
//     }
    
//     let output_Data = output[0];

//     for(let i = 1;i<start;i++)
//     {
//         output_Data += output[i]
//     }

//     if(output_Data > (Math.pow(2, 31)) - 1 || output_Data < Math.pow(-2, 31))
//     {
//         return 0;
//     }

//     return output_Data;
// };

//=================================================

reverse = (x) => {
    
    //Step 1 : 確認輸入是否為負數
    let nagetive = false;
    if(x < 0)
    {
        nagetive = true;
        x = -x;
    }

    //Step 2 : 分離個位數
    let result = 0;
    result = x % 10;
    x = (x - result) / 10;

    //Step 3 : 分離剩餘位數
    let temp = 0;
    while(x)
    {
        temp = x % 10;
        x = (x - temp) / 10;
        result = (result * 10 ) + temp;
    }

    //Step 4 : 判斷是否overflow
    if(result > (Math.pow(2, 31)) - 1 || result < Math.pow(-2, 31))
    {
        return 0;
    }

    //Step 5 : 若輸入為負數則加入負號
    if(nagetive)
    {
        result = -result;
    }

    return result;
}

console.log(reverse(-123456));

