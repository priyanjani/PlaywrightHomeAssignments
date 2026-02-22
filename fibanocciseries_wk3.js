function fibanocci(n){
    let a=0
    let b=1
    let next=0
    for (i=0;i<n;i++){
        next=a+b
        a=b
        b=next
    }
    return a
}
console.log(fibanocci(9))
console.log(fibanocci(3))