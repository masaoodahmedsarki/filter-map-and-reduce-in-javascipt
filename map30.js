const myNumbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map( (num) => {return num + 10} )
const newNums = myNumbers
.map( (num) => num * 10 )
.map( (num) => num + 1 )
.filter( (num) => num >= 40 )

//console.log(newNums)

const mynums = [1 , 2 , 3]

// const totalNum = mynums.reduce(function (acc , currval ){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval

// }, 0 )
const totalNum = mynums.reduce( (acc,curr) => acc + curr, 0  )
console.log (totalNum)


const shoppingCart = [
    {
         itemName: "JS Course",
         price: 2999
},
    {
         itemName: "py Course",
         price: 999
},
    {
         itemName: "mobile dev Course",
         price: 5999
},
    {
         itemName: "Data Science Course",
         price: 12999
},

];

const pricetoPay = shoppingCart.reduce( (acc, item ) => acc + item.price , 0  )
console.log(pricetoPay)