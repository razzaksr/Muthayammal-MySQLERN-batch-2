const express = require('express')
const parser = require('body-parser')
const mysql = require('mysql2')

const base = mysql.createConnection({
    database:"muthayammal",
    port:3306,
    user:"root",
    password:"Razak@123"
})

const app = express()
app.use(parser.urlencoded({extended:true}))
app.use(parser.json())

base.connect(()=>{
    console.log("Db connected successfully")
})

app.get('/api/bytyperate/:category/:rate',async(req,res)=>{
    const sql="select * from mec_apps where app_category=? and app_ratings>=?"
    base.query(sql,[req.params.category,req.params.rate],(err,records)=>{
        if(err)
            res.status(500).json({error:`${err}`})
        else if(records.length==0)
            res.status(404).json({error:"No apps found"})
        else
            res.status(200).json({message:records})
    })
})

app.put('/api/rank/:app/:rate',async(req,res)=>{
    const sql="update mec_apps set app_ratings=app_ratings+?/app_downloads where app_name=?"
    base.query(sql,[req.params.rate,req.params.app],(err,ack)=>{
        if(err)
            res.status(500).json({error:`${err}`})
        else if(ack.affectedRows==0)
            res.status(404).json({error:"No apps found"})
        else
            res.status(200).json({message:`${req.params.rate} rating done for ${req.params.app}`})
    })
})

app.get('/api/users/:count',async(req,res)=>{
    const sql="select * from mec_apps where app_downloads>=?"
    base.query(sql,[req.params.count],(err,records)=>{
        if(err)
            res.status(500).json({error:`${err}`})
        else if(records.length==0)
            res.status(404).json({error:"No apps found"})
        else
            res.status(200).json({message:records})
    })
})

app.get('/api/type/:category',async(req,res)=>{
    const sql="select * from mec_apps where app_category=?"
    base.query(sql,[req.params.category],(err,records)=>{
        if(err)
            res.status(500).json({error:`${err}`})
        else if(records.length==0)
            res.status(404).json({error:"No apps found"})
        else
            res.status(200).json({message:records})
    })
})

app.get('/api/published/:vendor',async(req,res)=>{
    const sql="select * from mec_apps where app_vendor like ?"
    base.query(sql,['%'+req.params.vendor+'%'],(err,records)=>{
        if(err)
            res.status(500).json({error:`${err}`})
        else if(records.length==0)
            res.status(404).json({error:"No apps found"})
        else
            res.status(200).json({message:records})
    })
})

app.get('/api/:name',async(req,res)=>{
    const sql="select * from mec_apps where app_name=?"
    base.query(sql,[req.params.name],(err,records)=>{
        if(err)
            res.status(500).json({error:`${err}`})
        else if(records.length==0)
            res.status(404).json({error:"No apps found"})
        else
            res.status(200).json({message:records})
    })
})

app.put('/api/download/:app/',async(req,res)=>{
    const sql="update mec_apps set app_downloads=app_downloads+1 where app_name=?"
    base.query(sql,[req.params.app],(err,ack)=>{
        if(err)
            res.status(500).json({error:`${err}`})
        else if(ack.affectedRows==0)
            res.status(404).json({error:"invalid app"})
        else
            res.status(200).json({message:"App has downloaded"})
    })
})

app.post('/api/publish',async(req,res)=>{
    const{name,vendor,category}=req.body
    const sql = 'insert into mec_apps(app_name,app_vendor,app_category) values(?,?,?)'
    base.query(sql,[name,vendor,category],(err,acknowledgement)=>{
        if(err)
            res.status(500).json({error:`${err} is occured`})
        else if(acknowledgement.affectedRows==0)
            res.status(201).json({error:'Record has not inserted'})
        else
            res.status(200).json({message:"App has published in store"})
    })
})

app.get('/api/viewall',async(req,res)=>{
    base.query('select * from mec_apps',(err,records)=>{
        if(err)
            res.status(500).json({error:`${err} is occured`})
        else if(records.length==0)
            res.status(404).json({error:'No records found'})
        else
            res.status(200).json({message:records})
    })
})

app.get('/gettables',async(req,res)=>{
    base.query('show tables',(err,results)=>{
        if(err)
            res.status(500).json({error:`${err} is occured`})
        else if(results.length==0)
            res.status(404).json({error:'No tables found'})
        else
            res.status(200).json({message:results})
    })
})


app.listen(1234,()=>{
    console.log("Server working!!!!!!!!!")
})