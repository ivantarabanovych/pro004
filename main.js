var arr = [9, 11, 13, 15, 17, 19, 21, 23, 25, 27];
    function arraySum(array){
        var sum = 0;
        for(var i = 0; i < array.length; i++){
            sum += array[i];
        }
        console.log(sum);
    }
arraySum(arr);