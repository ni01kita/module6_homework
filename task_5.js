/*Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.*/

const func = (x, n) =>{
    let c = Math.pow(x, n)
    console.log(c)
}

func(2, 4)