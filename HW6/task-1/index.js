// Исходные данные
let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
];

function sorter(array, title, userName) {
    let result = array.filter(el => el[title] === userName);
    return result;
}

console.log(sorter(objects, 'surname', 'Васильев'));
console.log(objects);
