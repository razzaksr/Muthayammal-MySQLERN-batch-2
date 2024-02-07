let accounts=[
    {
        "firstName":"Sabarinathan",
        "lastName":"Sekar",
        "userName":"sabariragu",
        "contact":765456789,
        "email":"sabariragu@gmail.com",
        "pass":"sabari"
    },
    {
        "firstName":"Nandha kumar",
        "lastName":"Sekar",
        "userName":"nandha",
        "contact":765456789,
        "email":"nandharagu@gmail.com",
        "pass":"nandha"
    }
]

export const openAccount=(profile)=>{
    accounts.push(profile)
    alert(profile.userName+" has signed up")
}