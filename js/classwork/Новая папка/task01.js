/*
 Дана строка, изображающая целое число. Вывести сумму цифр этого числа. 
*/

function calc(x,y){
    var e = (1 + Math.pow(Math.sin(x + y),2) / (2 +Math.abs(x - 2 * x / (1 - x**2*y**2))) + x;
   
    return e;  
}

describe("check calc e = f(x,y)", function(){
    it("positive", function(){
        var rez = calc(2,3);
        expect(rez).toBe(4);
    });
    it("negative", function(){
        var rez = calc(null, Infinity);
        expect(rez).toBeNaN();
    });
});