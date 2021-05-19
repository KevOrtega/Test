const addOne = (number) => number += 1

const getNewString = (index, string, new_string) => {
    if(index === 0) new_string = string[index]
    if(new_string[new_string.length - 1] !== string[index]) new_string += string[index]
    
    if(index === string.length - 1) return new_string
    
    return getNewString(addOne(index), string, new_string)
}

const Main = (string) => {
    if(typeof string !== 'string') return null

    return getNewString(0, string) 
}

const result = Main('aaaacccccbbcc')

console.log(result)