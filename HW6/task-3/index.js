window.addEventListener('DOMContentLoaded', function() {
  let bands = [{
    value: 'AC/DC',
    label: 'AC/DC',
  },
  {
    value: 'Black Sabbath',
    label: 'Black Sabbath',
  },
  {
    value: 'Deep Purple',
    label: 'Deep Purple',
  },
  {
    value: 'Led Zeppelin',
    label: 'Led Zeppelin',
  },
  {
    value: 'Pink Floyd',
  },
  'Queen',
  1919, // Почти 70ые :)
  ];

  // Преобразование массива к соответствующему виду
  function arrayTransformation(array) {

    // Перебираем массив и добавляем нужные объекты и свойства
    for (let el of array) {
      if (typeof el !== 'object') { // При выполнении условия добавляем 
        let obj = {};               // новые объекты в массив со свойством,
        obj.value = el;             // значение которого равно несоответствующему
        array.push(obj);            // элементу массива
      } else if (el.label === undefined) {  // Если у объекта отсутствует второе свойство,
        el.label = el.value;                // то добавляем его со значением равным первому свойству
      }
    }
    
    let result = array.filter(oldEl => typeof oldEl === 'object'); // Создаем новый массив и фильтруем его

    return result;
  }
  
  // Выпадающий список
  function dropdownList(array, property) {
    const select = document.createElement('select'); // Создаем select
    document.body.append(select); // Вкладываем select в <body>
    
    // Создаем цикл for of для перебора текущего массива
    for(let el of array) {
      const option = document.createElement('option'); // Создаем option
      option.value = el.value; // Устанавливаем атрибут value для option
      option.innerHTML = el.label; // Размещаем текст внутри элемента

      if (option.value === property) {
        option.setAttribute('selected', ''); // Выбираем атрибут по умолчанию
      }

      select.append(option); // Вкладываем option в select
    }

    return select; // Возвращаем select
  }
  
  dropdownList(arrayTransformation(bands), 'Led Zeppelin');
});
