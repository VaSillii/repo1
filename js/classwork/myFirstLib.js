;(function() {
    window.myFirstLib = {
        remove: function(arr, index) {
            arr.splice(index,1);
            return arr;
        },
        repeat: function(arr, count){
            let result = "";
            for (let i = 0; i < count; i++){
                result += arr;
            }
            return result;
        },
        pluck: function(arr,nameProp){
            let result = [];
            for (var i = 0; i < arr.length; i++){
                if (arr[i] instanceof Object && arr[i][nameProp] !== undefined) {
                    result.push(arr[i][nameProp]);    
                }
            };
            return result;
        }
    };   
}());