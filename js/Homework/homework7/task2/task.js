function funcY(x){
    return 1 / x + Math.sqrt(x);  
}

describe("task_01 funcY", function(){
    let x = 1;
	var result = 2;
    var msg = "Вычисление функции f(x) при заданном значении x: " + x + " результат 2";
    it(msg, function(){
        var rez = funcY(x);
        expect(x).not.toBe(0);
        expect(rez).toBe(2);
        expect(rez).not.toBe(2);
    });
});