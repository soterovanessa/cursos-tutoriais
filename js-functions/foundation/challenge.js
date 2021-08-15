//Create a range function
// range(5) -> [1, 2, 3, 4, 5]
// range(6, 11) -> [6, 7, 8, 9, 10, 11]
// range(10, 19, 2) -> [10, 12, 14, 16, 18]
// range(6, 2) -> [6, 5, 4, 3, 2]
// range(8, -3, 4) -> [8, 4, 0]



 function range(a, b, s){
  const nums = []
    for (let i = 1; i <= a; i++){
        nums.push(i)
    }
    return nums
 }
 // range(5) -> [1, 2, 3, 4, 5]
console.log(range(5))

function range6(a, b, s){
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b

    const nums = []
      for (let i = n1; i <= n2; i++){
          nums.push(i)
      }
      return nums
   }
   // range(6, 11) -> [6, 7, 8, 9, 10, 11]
  console.log(range6(6, 11))

  function range10(a , b, s = 1 ){
      const n1 = b === undefined ? 1 : a
      const n2 = b === undefined ? a : b
      

      const nums = []
      for (let i = n1; i <= n2; i += s){
          nums.push(i)
      }
      return nums
  }
  // range(10, 19, 2) -> [10, 12, 14, 16, 18]
  console.log(range10(10, 19, 2))

  function range62(a , b, s = 1 ){
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)
    

    const nums = []
    for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step){
        nums.push(i)
    }
    return nums
}
// range(6, 2) -> [6, 5, 4, 3, 2]
console.log(range62(6, 2))

// range(8, -3, 4) -> [8, 4, 0]
console.log(range62(8, -3, 4))