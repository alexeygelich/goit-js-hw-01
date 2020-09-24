let total = 0
let message = ""

while (true) {
  let input = prompt("Введите число")

  if (input === null) {
    break
  }

  input = Number(input)
  let isANumber = Number.isNaN(input)
  if (isANumber) {
    message = "Было введено не число, попробуйте еще раз"
    alert(message)
    continue
  }
  total += input
}
message = `Общая сумма чисел равна ${total}`
console.log(message)
