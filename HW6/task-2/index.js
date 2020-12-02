window.addEventListener('DOMContentLoaded', function() {
  const bands = [{
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
    label: 'Pink Floyd',
  },
  {
    value: 'Queen',
    label: 'Queen',
  }];
  
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
  
  
  dropdownList(bands, 'Led Zeppelin');
});
