export function getSum41 (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  export function getNumberOfEven42 (arr) {
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        number++;
      }
    }
    return number;
  }

  export function getMaxEven45 (...arr) {
    let maxEven = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0 && arr[i] > maxEven) {
        maxEven = arr[i];
      }
    }
    return maxEven;
  }

  export function getPosition(array, Element) {
    for (let i = 0; i < array.length; i++) {
        if(Element == array[i]){
            return i+1;
        }
    }
    return ' L\'element recherché n\'est pas parmi les valeurs rentrées';
}
