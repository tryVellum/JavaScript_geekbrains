// 1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2, увеличиваем а на +1, присваеваем результат с
d = b++; alert(d);           // 1, значение b присваем с, потом увеличиваем b на +1
c = (2+ ++a); alert(c);      // 5, 2 + (1 + a{2}) = 5
d = (2+ b++); alert(d);      // 4, 2 + (b{2}) = 4, после увеличиваем b на +1
alert(a);                    // 3
alert(b);                    // 3
// Почему код даёт именно такие результаты?

// 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); // 5

// 3
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

var a = getRandomInt(-50, 51), b = getRandomInt(-50, 51);

if ((a >= 0) && (b >= 0)){
    alert ('вычитание ' + a + ' & ' + b + ' = ' + (a - b));
} else if ((a <= 0) && (b <= 0)){
    alert ('умножение ' + a + ' & ' + b + ' = ' + (a * b))
} else{
    alert('сложение ' + a + ' & ' + b + ' = ' + (a + b))
};

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. 
a = getRandomInt(0, 16);
alert('Рандомный а = ' + a)
switch (a){
    case 1:
        alert(a);
        ++a;
    case 2:
        alert(a);
        ++a;
    case 3:
        alert(a);
        ++a;
    case 4:
        alert(a);
        ++a;
    case 5:
        alert(a);
        ++a;
    case 6:
        alert(a);
        ++a;
    case 7:
        alert(a);
        ++a;
    case 8:
        alert(a);
        ++a;
    case 9:
        alert(a);
        ++a;
    case 10:
        alert(a);
        ++a;
    case 15:
        alert('Вот и всё');
        break;
    default:
        alert('уУуУу ' + a);
}

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции 
// выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch)
function mathOperation(arg1, arg2, operation){
    let c;
    switch(operation.toLowerCase()){
        case 'сложение':
        case 'плюс':
        case '+':
            c = arg1 + arg2;
            return c;
        case 'вычитание':
        case 'минус':
        case '-':
            c = arg1 - arg2;
            return c;
        case 'умножение':
        case 'перемножение':
        case '*':
            c = arg1 * arg2;
            return c;
        case 'деление':
        case ':':
        case '/':
            c = arg1 / arg2;
            return c;
        default:
            alert('Давай полегче')
            return false;
    }
}

//  7. *Сравнить null и 0. Попробуйте объяснить результат.
let my_null = null;
let my_zero = 0;
alert((my_null === my_zero) + ' or ' + (my_zero == my_null)); // safari 13.1.2 (false or false)
// Значение null представляет отсутствие какого-либо объектного значения, 0 - же, это число

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
function power(val, pow){
    if (pow === 0) {
        return val;
    }
    else {
        return val * power(val, pow - 1);
    }
}
alert (power(2, 9))
