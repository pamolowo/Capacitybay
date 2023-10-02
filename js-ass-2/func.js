let Array1 = [15, 30, 45, 60]
let Array2 = [5, 6, 3, 10]
const product = []

const myProduct = ()=>{
    if (Array1.length === Array2.length){
        for(let i=0; i < Array1.length; i++){
            product.push(Array1[i] * Array2[i])
        }
        return product
    }
 
    else{
       return "Mission impossible"
    }
      
}    

result = myProduct()
console.log(result)