const functions = require('./functions')

// -> toBe matching primitive types (not objects)
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

// -> assertNotEquals
test('Adds 2 + 2 to Not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

// -> assertNull
test('Is null equals null', () => {
    expect(functions.isNull()).toBeNull()
})

// -> assertFalse
test('checkValue i false', () => {
    expect(functions.checkValue(0)).toBeFalsy()
})

// toEqual, matches content of objects and arrays
test('Should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({firstName: 'Brad', lastName: 'Traversy'})
})


// Less than, greater than
test('should be under 1600', () => {
    const load1 = 800
    const load2 = 700
    expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Arrays
test('Admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
})

// Working with async data
test('Uses fetch name should be Leanne Graham', () => {
    expect.assertions(1)    // veryfy a certain number of calls
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham')
    }) 
})

// Check for THRUTHY or FALSEY values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the oposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsey matches anything that an if statement treats as false

