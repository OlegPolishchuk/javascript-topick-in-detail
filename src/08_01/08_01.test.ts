
type UsersType = {
    [key: string] : {id: number, name: string}
}

 let users: UsersType

beforeEach( ()=> {
    users = {
        '101' : {id: 10, name: 'Dimysh'},
        '32156485' : {id: 32156485, name: 'Natasha'},
        '10112' : {id: 1011, name: 'Valera'},
        "5" : {id: 5, name: 'Katya'}
    }
} )

test('should update corresponding user from user', ()=> {
    users['5'].name = 'Ekaterina'

    expect(users['5']).toEqual( {id: 5, name: 'Ekaterina'} )
})

test('should delete corresponding user from user', ()=> {
    delete users['5']

    expect(users['5']).toBeUndefined()
})

