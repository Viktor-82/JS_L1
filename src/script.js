'use strict';

/* Определяет четные и нечетные цифры */
/* for (let i=0; i<=10; i++) {
     let result = i % 2
     if (i<1) {
         console.log(i + ' - это ноль');
     } else if (result) {
         console.log(i + ' - нечетное число');
     } else {
         console.log(i + ' - четное число');
     };
}; */


/* Выводим данные в консоль */
/* const post = {
    author: 'John',// <=
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: 'Alex',
            text: 'lorem ipsum',
            rating: {
                likes: 10,
                dislikes: 2,// <=
            }
        },
        {
            userId: 5,// <=
            userName: 'Jane',
            text: 'lorem ipsum 2',// <=
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text); */


/* Применяем скидку 15% */
/* const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(element => {
    console.log(`Цена товара ${element.id} только сегодня ${element.price*0.85} рублей с учетом скидки 15% `);
}); */


/* Делаем новый массив из существующего по признаку наличия фото.
Сортируем товары по цене.
 */
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            '1.jpg',
            '2.jpg',
        ]
    },
    {
        id:5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            '3.jpg'
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let actualProducts = products.filter(function (element) {
    /* Если просто написать element.photos.length > 0 будет ошибка. Поэтому отдельно проверяем есть ли элемент photos в объекте и больше ли нуля его длинна */
    if (element.photos && element.photos.length > 0)
    return element;
});
/* Длинный вариант записи сортировки */
/* let sortActualProducts = actualProducts.sort(function(price1, price2){
    if (actualProducts[0].price > actualProducts[1].price) {
    return -1;
    }
    if (actualProducts[1].price > actualProducts[0].price) {
    return 1;
    }
    return 0;
});
 */
 
/* Короткий вариант записи сортировки */
let sortActualProducts = actualProducts.sort(function(item1, item2){
    return item1.price - item2.price;
});

console.log(actualProducts); 

