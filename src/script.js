let constantClient = confirm('Вы являетесь постоянным клиентом?')
constantClient ? 30 : 10;
let discount = constantClient ? 30 : 10;
alert(`Ваша скидка ${discount}%`);