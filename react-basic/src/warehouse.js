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
    },
    {
        "firstName":"Eniyaa",
        "lastName":"S",
        "userName":"eniyaa",
        "contact":765456789,
        "email":"eniyaa@gmail.com",
        "pass":"eniyaa"
    },
    {
        "firstName":"Kavin",
        "lastName":"Kumar",
        "userName":"kavin",
        "contact":765456789,
        "email":"kavin@gmail.com",
        "pass":"kumar"
    },
    {
        "firstName":"Bharani",
        "lastName":"Kesavan",
        "userName":"bharani",
        "contact":765456789,
        "email":"bharani@gmail.com",
        "pass":"bharani"
    },
    {
        "firstName":"Bharathi",
        "lastName":"S",
        "userName":"bharathi",
        "contact":765456789,
        "email":"bharathi@gmail.com",
        "pass":"bharathi"
    },
    {
        "firstName":"Anandha Kumar",
        "lastName":"D",
        "userName":"anandhakumar",
        "contact":765456789,
        "email":"anandhakumar@gmail.com",
        "pass":"anandhakumar"
    }
]

export const openAccount=(profile)=>{
    accounts.push(profile)
    alert(profile.userName+" has signed up")
}

export const fetchAll=()=>{
    return accounts
}