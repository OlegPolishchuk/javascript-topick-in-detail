

export const userObj = {
    '0' : 'Dimysh',
    '1' : 'Natasha',
    '2' : 'Valera',
    '3' : 'Katya'
}
type UsersType = {
    [key: string] : {id: number, name: string}
}

export const users: UsersType = {
    '101' : {id: 10, name: 'Dimysh'},
    '32156485' : {id: 32156485, name: 'Natasha'},
    '10112' : {id: 1011, name: 'Valera'},
    "5" : {id: 5, name: 'Katya'}
}
// пришел новый объект, мы хотим его добавить в users
const newUser = {id: 12313, name: 'Igor'}
// добавляем
users[newUser.id.toString()] = newUser
// Пользователи с одинаковыми id !!! последний заменит предыдущий !!

export const userArray = [
    {id: '101', mame: 'Dimysh'},
    {id: '32156485', mame: 'Natasha'},
    {id: '10112', mame: 'Valera'},
    {id: '5', mame: 'Katya'}
]

// Добавить в обычный массив array.push()
// Но лучше не менять исходынй массив, так что делаем userArray = [...userArray, newUser]