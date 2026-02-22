let numarray =  [2,4,5,2,1,2]
let output=0
for (i=0;i<numarray.length;i++){
    for(j=i+1;j<numarray.length;j++){
        if (numarray[i]===numarray[j])
            output=output+1
        }
    }
console.log(output)