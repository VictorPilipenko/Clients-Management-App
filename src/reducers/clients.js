/*
 * The clients reducer will always return an array of clients no matter what
 * You need to return something, so if there are no clientss then just return an empty array
 * */


export default function () {

  // 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'clients.json'
xhr.open('GET', `${process.env.PUBLIC_URL}/clients.json`, false);

// 3. Отсылаем запрос
xhr.send();


var array;

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status !== 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
   array = JSON.parse(xhr.responseText); 
}
return array;







  


}