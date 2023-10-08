let arr = [1,2,2,3,3,4,4,5,5,5]

const countMode = (arr) =>{
 const newArr = {};

 arr.forEach(noOfCount => {
    if (newArr[noOfCount]) {
        newArr[noOfCount] += 1;
    } else {
        newArr[noOfCount] = 1;
    }
});
    return newArr
}
result = countMode(arr);
console.log(result);