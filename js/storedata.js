function savedata(form){
    if(form.checkValidity()){
       
     var customerId=form[0].value;
     
     var firstName=form[1].value;
     var LastName=form[2].value;
     var address=form[3].value;
     
     var age=form[4].value;
     var acType=form.radio.value;
     var username=form[7].value;
     
     var password=form[8].value;
     var acNo=form[9].value;
     var balance=form[10].value;
     
     
    //  alert(type(localStorage.getItem(username)));
     
     if(localStorage.getItem(username)==null){
        var array=[password,customerId,firstName,LastName,address,age,acType,acNo,balance];
        localStorage.setItem(username,array);
        alert("Registered successfully !!");
        
     }
     else{
         alert("username already exit !! Register again");
     }
    


        

   
    

}}
function home(){
    window.open("../index.html");
}