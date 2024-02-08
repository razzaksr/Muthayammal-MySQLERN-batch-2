const exp = require('express')
const parser = require('body-parser')

const app = exp()
app.use(parser.urlencoded({extended:true}))
app.use(parser.json())

app.listen(1234,()=>{
    console.log("Server is running successfully")
})

// mapping function:
app.get('',async(req,res)=>{
    res.status(200).json({"success":"Thanks for reaching the server!!!"})
})

app.get('/mypass/:mern',async(req,res)=>{
    const user = req.params.mern
    res.status(200).json({"message":`Logged user is ${user}`})
})

app.post('/add',async(req,res)=>{
    //const{profileName,profileCibil,profileProfession,profileLocation}=req.body
    //console.log(JSON.stringify(req.body))
    res.status(201)
})

/*
map(url,callback function>> async)
*/

// function call -> arrow fun