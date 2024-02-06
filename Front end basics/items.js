stock=[
    {
        "proName":"Pavilion 123",
        "proBrand":"HP",
        "proPrice":67000
    },
    {
        "proName":"Vostro",
        "proBrand":"Dell",
        "proPrice":45000
    }
]

const deleteOne=()=>{
    var name=document.getElementById('proName').value
    stock=stock.filter((each)=>{
        return each.proName!=name
    })
}

const updateOne=()=>{
    var name=document.getElementById('proName').value
    var brand=document.getElementById('proBrand').value
    var price=document.getElementById('proPrice').value
    stock.map((each,pos)=>{
        if(each.proName==name){
            stock[pos].proName=name
            stock[pos].proBrand=brand
            stock[pos].proPrice=price
            alert(name+" has updated")
            return
        }
    })
}

const readFew=()=>{
    document.getElementById("viewport").innerHTML=""
    var name=document.getElementById('proName').value
    var brand=document.getElementById('proBrand').value
    var price=document.getElementById('proPrice').value
    if(name!=""&&brand==""&&price==""){
        var contents=""
        stock.map((each)=>{
            if(name.includes(each.proName))
                contents+="<tr><td>"+each.proName+"</td><td>"+each.proBrand+"</td><td>"+each.proPrice+"</td></tr>"
        })
        document.getElementById("viewport").innerHTML=contents
    }
    else if(name==""&&brand!=""&&price==""){
        var contents=""
        stock.map((each)=>{
            if(brand.includes(each.proBrand))
                contents+="<tr><td>"+each.proName+"</td><td>"+each.proBrand+"</td><td>"+each.proPrice+"</td></tr>"
        })
        document.getElementById("viewport").innerHTML=contents
    }
    else if(name==""&&brand==""&&price!=""){
        var contents=""
        stock.map((each)=>{
            if(each.proPrice>=price)
                contents+="<tr><td>"+each.proName+"</td><td>"+each.proBrand+"</td><td>"+each.proPrice+"</td></tr>"
        })
        document.getElementById("viewport").innerHTML=contents
    }
    else{
        alert("Unable to read")
    }
}

const addOne=()=>{
    var name=document.getElementById('proName').value
    var brand=document.getElementById('proBrand').value
    var price=document.getElementById('proPrice').value
    var item={"proName":name,"proBrand":brand,"proPrice":price}
    stock.push(item)
    alert(name+" has added to the stock")
    document.getElementById('proName').value=""
    document.getElementById('proBrand').value=""
    document.getElementById('proPrice').value=""
}

const viewAll=()=>{
    var contents=""
    stock.map((each)=>{
        contents+="<tr><td>"+each.proName+"</td><td>"+each.proBrand+"</td><td>"+each.proPrice+"</td></tr>"
    })
    document.getElementById("viewport").innerHTML=contents
}