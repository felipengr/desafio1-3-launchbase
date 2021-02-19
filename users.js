// Parte 1

const users = [
  { name: "Carlos", technologies: ['HTML', 'CSS'], },
  { name: 'Jasmine', technologies: ['Javascript', 'CSS'], },
  { name: 'Tuane', technologies: ['HTML', 'Node.js'] }
]

for (let user of users) {
  console.log(`${user.name} trabalha com ${user.technologies.join(', ')}`)
}

// Parte 2

function ifcss(user) {
  for (let technology of user.technologies) {
    if (technology == 'CSS') return true
  }
  return false
}

for (let i = 0; i < users.length; i++) {
  const userCSS = ifcss(users[i])
  if (userCSS) {
    console.log(`O usuário ${users[i].name} trabalha com CSS`)
  }
}