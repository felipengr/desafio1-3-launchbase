const users = [
  {
    name: 'Salvio',
    incomes: [115.3, 48.7, 98.3, 14.4],
    expenditures: [85.3, 13.5, 19.9]
  },
  {
    name: 'Marcio',
    incomes: [24.6, 214.3, 45.3],
    expenditures: [185.3, 12.1, 120.0],
  },
  {
    name: 'Lucia',
    incomes: [9.8, 120.3, 340.2, 45.3],
    expenditures: [450.2, 29.9]
  }
];

function calcBalance(incomes, expenditures) {
  const totalIncomes = sum(incomes)
  const totalExpenditures = sum(expenditures)

  return totalIncomes - totalExpenditures
}

function sum(numbers) {
  let sum = 0

  for (let number of numbers) {
    sum = sum + number
  }
  return sum
}

for (let user of users) {
  const balance = calcBalance(user.incomes, user.expenditures)

  if (balance > 0) {
    console.log(`${user.name} possui saldo POSITIVO de ${balance.toFixed(2)}`)
  } else {
    console.log(`${user.name} possui saldo NEGATIVO de ${balance.toFixed(2)}`)
  }
}