;(function(){
	//Функция генерации числа игрового поля
	function getRandomNumber(arr){
		var randomIndex = getRandomNamberInInterval(0, arr.length - 1);
		return arr.splice(randomIndex, 1)[0];
	}

	//Функция генерация числа в заданном интервале
	function getRandomNamberInInterval(min, max){
		return Math.round(Math.random()*(max - min) + min);
	}
	
	//Функция генерации стиля
	function getRandomStyle(){
		return 'font-size:' + getRandomNamberInInterval(15, 35) + ';color:' + getRandomColor() + ';';
	} 
	
	//Функция генерации цвета текста
	function getRandomColor(){
		return 'rgb('+ getRandomNamberInInterval(0,255) + ',' + getRandomNamberInInterval(0,255) + ','
			+ getRandomNamberInInterval(0,255) +')';
	}
	
	//Переменная для хранения номера текущей ячейки, которую надо найти
	var currenNumber = 1;
	
	window.myUtils = {
		//Функция создания игрового поля
		createGamePlace:function(tableId, n){
			var generalElement = document.getElementById(tableId);			
			//Формируем массив чисел для наполнения таблицы чисел
			var arrNumbers = [];
			for(var i = 1; i <= n*n; i++){
				arrNumbers.push(i);
			}
			//Создаем игровое поле (i-тая строка, j-столбец)
			var elementTable = document.createElement('table');
			var elementTBody = document.createElement('tbody');
			for(var i = 0; i < n; i++){
				var elementTr = document.createElement('tr');
				for(var j = 0; j < n; j++){
					var elementTd = document.createElement('td');
					elementTd.style = getRandomStyle();
					elementTd.innerHTML = getRandomNumber(arrNumbers);
					elementTr.appendChild(elementTd);					
				}
				elementTBody.appendChild(elementTr);
			}
			elementTable.appendChild(elementTBody);
			generalElement.appendChild(elementTable);
            
            var currNum = 1;
            var dataStart = Date.now();
            
            generalElement.onclick = function(e) {
                if (parseInt(e.target.tagName) === "TD") {
                    e.target.style.backgroundColor = "red";
                    currNum++;
                    if (currNum === n * n + 1) {
                        alert('Время игры: ' + (Date.now() - dateStart) + 'ms');
                    }
                }
            }
		}		
	};	
}());