// const myCorres = ["html","css","javascript","react","angular"]

//myCorres.forEach( (items) => {
    // console.log(items);
//});

//const itCourse = myCorres.forEach( (value) => {
// console.log(value);
//return value
//})
// console.log(itCourse);
// *******************************************
// Filter -----------------------
// const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNum.filter( (num) => num > 4)
// console.log(newNums);

//  const newNums = myNum.filter( (num) =>{
//  return num > 4

// })
// console.log(newNums);

// ***********************************
// myNum.forEach( (mynum1) => {
//     if(mynum1 > 4){
//         console.log(mynum1);
//     }
// });
// ***********************************
// const newNum =[]
// myNum.forEach( (num2) => {
// if(num2 >4){
//     newNum.push(num2)
// }
// })
// console.log(newNum);
// ***********************************
//example book

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
   //console.log(books);
 // let mybookcode = books.filter( (chose) =>  chose.genre === "History")
//   console.log(mybookcode);
 
let mybkd = books.filter( (bk) => {
    return bk.edition < 2014
        
})
console.log(mybkd);