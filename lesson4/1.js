/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 *
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {
    get salary() {
        let today = new Date();
        let lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.ceil((lastDay.getTime() - today.getTime()) / (oneDay)) > 20 ? 'good salary' : 'bad salary';
    }
};

// Решение

person.salary; // good salary

exports.person = person;
