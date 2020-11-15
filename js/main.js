//Функция добавляет атрибут CSS селектора 
//с позиционированием fixed или absolute при получении события scroll обработчика от 
//глобального объекта window.

window.onscroll = function(){
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const o = document.getElementById('stickyHeader');


    if (scrolled > 0) o.setAttribute('class','fix');
    else o.setAttribute('class','header__content');
}

//При клике обработчик полуает от глобального объекта window event
// в event мы проверяем где был клик, если на элементе с соответствующим id
//то мы меняем строку с помощью метода innerHTML, если клик не произошел не на одном
// из элементов id которых мы отслеживаем, то выставляется значение по дефолту.
// Эту функцию можно записать короче, но так она хорошо читаема и сразу понятно что проиходит

window.onclick = function(event) {
    const vector = document.getElementById('vector');
    const testit = document.getElementById('testit');
    const bimeister = document.getElementById('bimeister');

    if(event.target === vector) {
        document.getElementById("title__products").innerHTML="Vector";
    } else if (event.target === testit) {
        document.getElementById("title__products").innerHTML="TestIT";
    } else if (event.target === bimeister) {
        document.getElementById("title__products").innerHTML="BIMeister";
    } else {
        document.getElementById("title__products").innerHTML="Наши продукты";
    }
}

