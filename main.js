function insertfunctions(){
    let fname = document.getElementById('name').value;
    let email = document.getElementById('emails').value;
    let pass = document.getElementById('pass').value;
    let re_pass = document.getElementById('re-pass').value;
    let mobilenumber = document.getElementById('mobilenumber').value;
    let dob = document.getElementById('dob').value;

let confirmPassword ="";
    if(pass==re_pass){
        confirmPassword=pass;
      

    if (fname == "" || fname == null ){
    alert('Name must be filled')
    return false;
    }

    if (email == "" || email == null ){     
    alert('email must be filled')
    return false;
    }

    if (pass == "" || pass == null ){
    alert('Password must be filled')
    return false;
    }
    
    if (re_pass == "" || re_pass == null ){
    alert('Confirm Your Password')
    return false;
    }

    if (mobilenumber == "" || mobilenumber == null ){
    alert('Mobilenumber must be filled')
    return false;
    }

    if (dob == "" || dob == null ){
    alert('Date of birth must be filled')
    return false;
    }
}   

else{
    alert("Password does not match");
} 

            // for connect Register page to Login page 
    location.href='http://127.0.0.1:5500/loginpage.html';

 

localStorage.setItem('fullname', fname);
localStorage.setItem('email', email);
localStorage.setItem('Password', confirmPassword);
localStorage.setItem('mobnumber', mobilenumber);
localStorage.setItem('dob', dob);



}


// for connecting LOGIN PAGE to with PROFILE PAGE -->

function insertfunction2(){
    debugger
    let a=document.getElementById('username2').value;
    let b=document.getElementById('passcode2').value;
      
    let user2=localStorage.getItem('fullname');
    let passwordd=localStorage.getItem('Password');

    let checkusername2 ="";
    let checkpassword2 ="";

    if(a==user2){
       checkusername2=a;

       if(b==passwordd){
           checkpassword2=b;
           location.href='http://127.0.0.1:5500/profilepage.html';
       }else{
           alert("password does not match");
       }

      }else{
        alert("username does not match");
      }

}
// for connecting LOGIN PAGE to with PROFILE PAGE "ENDS" -->









function profileData(){
    
    let getfname = localStorage.getItem('fullname');
    if(getfname==null){
        location.href = "http://127.0.0.1:5500/loginpage.html";
    }
    else{
        document.getElementById('fname').innerHTML=getfname;

        let getmaildata = localStorage.getItem('email');
        document.getElementById('mailid').innerHTML= getmaildata;
    
        let getdateofbirth = localStorage.getItem('dob');
        document.getElementById('dateofbirth').innerHTML= getdateofbirth;
    
        let getcellnumbers = localStorage.getItem('mobnumber');
        document.getElementById('cellnumber').innerHTML= getcellnumbers;  
    }

}


function logout(){
    localStorage.clear();
    location.href='http://127.0.0.1:5500/registration.html';
}