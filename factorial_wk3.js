function factorial(n)
{
    let result = 1
    //check given no is not a negative no
    if (n>0)
    {
        for(i=2;i<=n;i++){
            result=result*i
        }
         return result
         console.log(result)
    }
    else{
        console.log("Number is negative no")
    }
       
}
console.log(factorial(7))
factorial(-8)