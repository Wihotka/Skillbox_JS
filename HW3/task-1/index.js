// Исходные данные
const password = '_-a';

// Проверяем надежность пароля (первый вариант)
if (password.length < 4) {
    console.log('Пароль недостаточно надежный');
} else if ((password.indexOf('-') < 0) && (password.indexOf('_') < 0)) {
    console.log('Пароль недостаточно надежный');
} else {
    console.log('Пароль надежный');
};

// Проверяем надежность пароля (второй вариант)
if (password.length < 4) {
    console.log('Пароль недостаточно надежный');
} else if (!password.includes('-') && !password.includes('_')) {
    console.log('Пароль недостаточно надежный');
} else {
    console.log('Пароль надежный');
};