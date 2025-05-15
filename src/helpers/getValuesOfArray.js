export const getValuesOfArray = (array) => {
    let string = ''
    array.length > 1 ? 
    string = array.join(', '):
    string = array[0];

    return string 
  }