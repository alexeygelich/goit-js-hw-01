const invoice = 100
const stock = 100

let message = ""

if (invoice > stock) {
  message = "На складе недостаточно товаров!"
} else {
  message = "Заказ оформлен, с вами свяжется менеджер"
}

console.log(message)
