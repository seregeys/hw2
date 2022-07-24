// условные операторы if else
// switch
//тернарные операторы: ? и :

/*1. Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
городе %Город% и работаю в компании %Компания%. Мои контактные данные:
%Телефон%, %Почта%.».*/

let name = prompt ('ваше имя');
console.log (name);

let age = prompt('возраст');
console.log (age);

let city = prompt('город проживания');
console.log (city);

let company = prompt ('организация в которой выработаете');
console.log (company);

let phone = prompt ('ваш номер телефоан');
console.log (phone);

let email = prompt ('ваш электрооный ящик');
console.log (email);

alert ('«Меня зовут '+name+ '. Мне ' +age+ ' лет. Я проживаю в городе ' +city+ ' и работаю в компании ' +company+ '. Мои контактные данные: '
+phone+ ', ' +email+'.».');


/*2. Определите по введенному возрасту (исп. значение из задания 1) год рождения.
Выведите на экран «%Имя% родился в %Год% году.».*/

age = prompt('год рождения', 1986);
console.log (age);

alert ('' +name+ ' родился в ' +age+ ' году.');

/*3. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

str = '123456';
	if ((str[0]+str[1]+str[2]) == (str[3]+str[4]+str[5]))
		console.log ('Да');
	else
    console.log ('Нет');

/*4. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3.*/

let a = 1;
    if (a > 0)
    console.log ('Верно');
    else
    console.log ('Неверно');

let a1 = 0;
    if (a1 > 0)
    console.log ('Верно');
    else
    console.log ('Неверно');

let a2 = -3;
    if (a2 > 0)
    console.log ('Верно');
    else
    console.log ('Неверно');

/*5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
квадрат.*/

let a3 = 10,
    b = 2,
    sum = a3+b,
    min = a3-b,
    pr = a3*b,
    ch = a3/b;
console.log (sum);
console.log (min);
console.log (pr);
console.log (ch);
    if (a3+b > 1) {
    console.log ((a3+b)*(a3+b))};

/*6. Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
'Неверно'.*/

let a4 = 10,
    b1 = 2;
if (2> a4 < 11 || 6<= b1 < 14)
    {console.log ('Верно');
}   else {console.log ('Неверно');}

/*7. В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает 
это число (в первую, вторую, третью или четвертую). */

let n = 20;
if (n >= 0 && n <= 14) {
	console.log ('В первую четверть.');
}
if (n >= 15 && n <= 30) {
	console.log('Во вторую четверть.');
}
if (n >= 31 && n <= 45) {
	console.log('В третью четверть.');
}
if (n >= 46 && n <= 59) {
	console.log('В четвертую четверть.');
}

/*8. В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду 
месяца попадает это число (в первую, вторую или третью). */

let day = 10;
if (day >= 0 && day <= 9) {
	console.log ('В первую декаду месяца.');
}
if (day >= 10 && day <= 19) {
	console.log('Во вторую декаду месяца.');
}
if (day >= 20 && day <= 31) {
	console.log('В третью декаду месяца.');
}

/*9. Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы 
(условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты 
вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, 
недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», 
соответственно.*/

let day1 = 1,
    year = 365 * day1,
    month = year/12,
    week = month/4,
    hour = day1/24,
    minute = hour/60,
    second = minute/60;
console.log (year);
console.log (month);
if (month < year && week < year && hour < year && minute < year && second < year) {
    console.log ('Меньше года')
}
if (week < month && hour < month && minute < month && second < month) {
    console.log ('Меньше месяца')
}
if (hour < week && minute < week && second < week) {
    console.log ('Меньше недели')
}
console.log (week);
if (week < month && hour < month && minute < month && second < month) {
    console.log ('Меньше месяца')
}
if (hour < week && minute < week && second < week) {
    console.log ('Меньше недели')
}
console.log (hour);
if (hour < week && minute < week && second < week) {
    console.log ('Меньше недели')
}
console.log (minute);
console.log (second);

/*10. Напишите скрипт, который по введенному дню (исп. значение переменной из 8 
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и 
т.д.). Скрипт определение поры года написать через switch. */

let day2 = 360;

if (day2 >= 0 && day2 <= 31) {
	console.log ('Месяц январь');
    console.log ('Зима');
} if (day2 >= 32 && day2 <= 62) {
	console.log ('Месяц февраль');
    console.log ('Зима');
} if (day2 >= 63 && day2 <= 93) {
	console.log ('Месяц март');
    console.log ('Весна');
} if (day2 >= 94 && day2 <= 124) {
	console.log ('Месяц апрель');
    console.log ('Весна');
} if (day2 >= 125 && day2 <= 155) {
	console.log ('Месяц май');
    console.log ('Весна');
}
if (day2 >= 156 && day2 <= 186) {
	console.log ('Месяц июнь');
    console.log ('Лето');
}
if (day2 >= 187 && day2 <= 217) {
	console.log ('Месяц июль');
    console.log ('Лето');
}
if (day2 >= 218 && day2 <= 248) {
	console.log ('Месяц август');
    console.log ('Лето');
}
if (day2 >= 249 && day2 <= 279) {
	console.log ('Месяц сентябрь');
    console.log ('Осень');
}
if (day2 >= 280 && day2 <= 310) {
	console.log ('Месяц октябрь');
    console.log ('Осень');
}
if (day2 >= 311 && day2 <= 341) {
	console.log ('Месяц ноябрь');
    console.log ('Осень');
}
if (day2 >= 342 && day2 <= 365) {
	console.log ('Месяц декабрь');
    console.log ('Зима');
}
