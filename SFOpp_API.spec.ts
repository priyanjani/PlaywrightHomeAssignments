import test, { expect } from '@playwright/test'


let access_Token:any
let instance_Url:any
let token_type:any
let SFopp_id:any


test("SF OPPortunity E2E",async({request})=>{


//generate token


//removed code to upload in git


const res=await tokenResponse.json()
console.log(res)
access_Token=res.access_token
instance_Url=res.instance_url
token_type=res.token_type



//post request -> Account


const accResponse=await request.post(`${instance_Url}/services/data/v59.0/sobjects/Opportunity`,{


    headers:{
        "Content-Type":"application/json",
        "Authorization":`${token_type} ${access_Token}`
    },
    data:{
         "Name":"Opportunity Anjani",
        "CloseDate":"2025-03-15",
        "StageName":"Prospecting"
    }
})


const accRes=await accResponse.json()
console.log(accRes)
SFopp_id=accRes.id
console.log("Post request"+accResponse.status())
expect(accResponse.status()).toBe(201)

//get request 
const getrequest = await request.get(`${instance_Url}/services/data/v59.0/sobjects/Opportunity/${SFopp_id}`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${token_type} ${access_Token}`
    }
})
    const getaccres = await getrequest.json()
    console.log(getaccres)
    console.log("Get request"+getrequest.status())
    expect(getrequest.status()).toBe(200)

    //patch request
    const patchrequest = await request.patch(`${instance_Url}/services/data/v59.0/sobjects/Opportunity/${SFopp_id}`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${token_type} ${access_Token}`
    },
    data:{
         "Name":"Opportunity Anjani Update",
        "StageName":"Qualification"
    }
})
    // const patchaccres = await patchrequest.json()
    // console.log(patchaccres)
    console.log("Patch request"+patchrequest.status())
    expect(patchrequest.status()).toBe(204)

    //delete request
     const deleterequest = await request.delete(`${instance_Url}/services/data/v59.0/sobjects/Opportunity/${SFopp_id}`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${token_type} ${access_Token}`
    }
})
    
    console.log("Delete request"+deleterequest.status())
    expect(deleterequest.status()).toBe(204) 
})