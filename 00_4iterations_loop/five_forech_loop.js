const myCourse = ["js","css","php","phython","react"];
// myCourse.forEach( function(val) {
// console.log(val);
// })
myCourse.forEach( (item)=>{
//console.log(item);
})

// function printMe(items) {
//     console.log(items);
// }
// myCourse.forEach(printMe)

// myCourse.forEach( (items , index, arr) =>{
// console.log(items,index,arr);
// })

// myCourse.forEach( (index,items ,  arr) =>{
//     console.log(index,items,arr);
//     })

// array_object-------------------
const mycoursrs = [
    {
    languageNmae:"javascript",
    languageFileName:"js"
}
,{
    languageNmae:"java",
    languageFileName:"java"
},
{
    languageNmae:"html",
    languageFileName:"html"
}
]
mycoursrs.forEach( (items) =>{
    console.log(items.languageNmae);
})