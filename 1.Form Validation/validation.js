function validationForm()
{
    if(document.getElementById("uname").value==""){
        alert("Enter your name");
        document.myform.username.focus();
    }else if(document.getElementById("pass").value==""){
        alert("Enter your password");   
        document.myform.password.focus();
    }
    else if(validatePassword()){
        alert("Enter Password");
        document.myform.password.focus();
    }
    else if(document.getElementById("email").value==""){
        alert("Enter your Email ID");
        document.myform.emailID.focus();}
    else if(validateEmail()){
        alert("Enter a valid email");
        document.myform.emailID.focus();
    }
    else if(validatePhone())
    {
        alert("Enter a valid phone number");
        document.myform.phone.focus();
    }
    else if(validateCity()){
        alert("Enter a City Name");
        document.myform.city.focus();

    }
    
    else{
        validateUser();
     } 
}
    
   function validateUser(){
    var resname = ["Pavan", "Ram", "Seeta"];
        urname = document.getElementById("uname").value;
        flag = 0;
        for(var i = 0; i<resname.length; i++)
        {
            if (!urname.localeCompare(resname[i])){
            alert("Username already exist, please give another one");
            flag = 0;
            break;
        }
        else
        {
            flag = 1;
        }
        }
            if (flag == 1){
            resname.push(urname);
            alert("Registration is successful");

            document.myform.submit();

        }
            
   }
   function validatePassword(){
    
            var str = document.getElementById("pass").value; 
            if (str.match(/[a-z]/g) && str.match( 
                    /[A-Z]/g) && str.match( 
                    /[0-9]/g) && str.match( 
                    /[^a-zA-Z\d]/g) && str.length >= 8) 
                return false;
    
            else 
                return true; 
    
   }

   function validateEmail()  
    {
    var str = document.getElementById("email").value; 
            if (str.match(/@/g)  )
                return false;
    
            else 
                return true; 
} 
function validateAge(){
    var str = document.getElementById("age1").value; 
    if(str.match(/[0-9]/g))
        return false;
        else
        return true;
}

function validatePhone()
{
    var str = document.getElementById("phone").value; 
    if(str.match(/[0-9999999999]/g))
    return false;
    else
    return true;

}
function validateCity(){
    var str = document.getElementById("city").value;
    return false;
}

