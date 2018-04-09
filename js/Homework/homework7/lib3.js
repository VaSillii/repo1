;(function() {
    window.lib3 = {
        minValue: function(arr) {
            let len = arr.length;
            let min = arr[0];
            for (let i = 1; i < len; i++) 
                if (arr[i] < min) 
                    min = arr[i];
            return min;
        },
        maxValue: function(arr){
            let len = arr.length;
            let max = arr[0];
            for (let i = 1; i < len; i++) 
                if (arr[i] > max) 
                    max = arr[i];
            return max;
        },
        meanValue: function(arr){
            let len = arr.length;
            let sum = 0;
            for (let i = 1; i < len; i++) 
                sum += arr[i]; 
            return sum / len;
        },
        cloneValue: function(arr){
            let arr1 = [];
            let len = arr.length;
            for (let i = 0; i < len; i++) {
                arr1[i] = arr[i];
            }
            return arr1;
        },
    }
}
());