// array/list >> push, pop, filter, map
kart=[
    "Wrist Watch",
    "Cloths",
    "Laptop",
    "Shoe",
    "Mobile",
    "Accessories",
    "Ear Puds",
    "PS 5",
    "Analogs",
    "Monitors",
    "GPU",
    "SSD"
]

// CRUD Application
// fun name, parameter, return type, function call >> events

// function insert(newItem){
//     kart.push(newItem)
//     document.getElementById("acknowledge").value=newItem+" has added to the kart"
// }

// arrow function  const identifier=()=>{}
// create
const insert=(newItem)=>{
    kart.push(newItem)
    document.getElementById("acknowledge").value=newItem+" has added to the kart"
    document.getElementById('myrecords').innerHTML=""
}

// read
const readAll=()=>{
    var contents=""
    kart.map((items)=>{
        contents+="<tr><td>"+items+"</td></tr>"
    })
    document.getElementById('myrecords').innerHTML=contents
}

// read 
const readFew=(phrase)=>{
    var contents=""
    kart.map((items)=>{
        if(items.includes(phrase))
            contents+="<tr><td>"+items+"</td></tr>"
    })
    document.getElementById('myrecords').innerHTML=contents
}

// update


var myindex=-1
const selects=()=>{
    var specific=document.getElementById('item').value
    kart.map((data,index)=>{
        if(data==specific)
            myindex=index
    })
    document.getElementById('acknowledge').value=specific+" has selected to replace"
}

const change=()=>{
    document.getElementById('acknowledge').value=""
    var newOne=document.getElementById('item').value

    kart[myindex]=newOne

    document.getElementById('acknowledge').value=specific+" has replaced by "+newOne

}

// delete
const erase=()=>{
    document.getElementById('myrecords').innerHTML=""
    var toBeDeleted=document.getElementById('item').value
    // kart=kart.filter((val)=>{
    //     return val!=toBeDeleted
    // })
    //kart.pop(toBeDeleted)
    kart=kart.filter((val,pos)=>{
        return pos!=toBeDeleted
    })
}

const enters=()=>{
    document.getElementById('myrecords').style.fontSize='45px'
}