const authenticate=()=>{
    var isValid=true
    
    var ferr=document.getElementById("errfname")
    var lerr=document.getElementById("errlname")
    var cerr=document.getElementById("errcontact")
    var merr=document.getElementById("erremail")
    var perr=document.getElementById("errpass")

    var fname=document.forms['signup'].fname.value
    var lname=document.forms['signup'].lname.value
    var mobile=document.forms['signup'].mobile.value
    var mail=document.forms['signup'].mail.value
    var pass=document.forms['signup'].pass.value
    var conpass=document.forms['signup'].conpass.value

    try{
        if(fname==""){
            throw "First name shouldn't empty"
        }
        else if(!(/[A-Za-z]/).test(fname)){
            throw "First name invalid"
        }
    }
    catch(message){
        ferr.innerHTML=message
        isValid=false
    }


    try{
        if(lname==""){
            throw "Last name shouldn't empty"
        }
        else if(!(/[A-Za-z]/).test(lname)){
            throw "Last name invalid"
        }
    }
    catch(message){
        lerr.innerHTML=message
        isValid=false
    }

    try{
        if(mobile==""){
            throw "contact shouldn't empty"
        }
        else if(!(/[0-9]{10,}/).test(mobile)){
            throw "invalid contact"
        }
    }
    catch(message){
        cerr.innerHTML=message
        isValid=false
    }

    try{
        if(mail==""){
            throw "EMail shouldn't empty"
        }
        else{
            const atPos=mail.indexOf('@')
            const dotPos=mail.indexOf('.')
            if(!(atPos>1 && (dotPos-atPos)>3)){
                throw "Invalid email"
            }
        }
    }
    catch(message){
        merr.innerHTML=message
        isValid=false
    }

    try{
        if(pass==""||conpass==""){
            throw "Password's empty"
        }
        else if(pass!=conpass){
            throw "Password mismatch"
        }
        else if(!(/(?=.*[A-Z])(?=.*[@!#*])[A-Za-z0-9@!#*]{8,}/).test(pass)){
            throw "Invalid password"
        }
    }
    catch(message){
        perr.innerHTML=message
        isValid=false
    }

    return isValid

}