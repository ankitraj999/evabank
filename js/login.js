var username;
function getdetail(form){
    // window.open("../page/finalPg.html","_blank");
    if(form.checkValidity()){
       username=form[0].value;
      var password=form[1].value;
      
      if(localStorage.getItem(username)!=null){
        var data=localStorage.getItem(username);
        var datavalue=data.split(",");
        //alert(datavalue[0]);
        // debugger;
        if(datavalue[0]==password){
            //alert("you are in getdetail");
            //alert(datavalue[0]);
            
          window.open("../page/finalPg.html","_blank");
            localStorage.setItem("name",username);

        }else{
            alert("password incorrect");
        }
        
     }
     else{
         alert("username does not exit !! Register ");
     }

    }

}
function getData(){
    //debugger;
   // alert(username);
    var name = localStorage.getItem("name");
    var data=localStorage.getItem(name);
    
    var datavalue=data.split(",");
    var customerId=datavalue[1];
     
    var firstName=datavalue[2];
    var LastName=datavalue[3];
    var address=datavalue[4];
    
    var age=datavalue[5];
    var acType=datavalue[6];

    var acNo=datavalue[7];
    var balance=datavalue[8];
    document.getElementById("cusId").innerHTML=customerId;
    document.getElementById("fNam").innerHTML=firstName;
    document.getElementById("lNam").innerHTML=LastName;
    document.getElementById("add").innerHTML=address;
    document.getElementById("age").innerHTML=age;
    document.getElementById("acType").innerHTML=acType;
    document.getElementById("acNum").innerHTML=acNo;
    document.getElementById("opBal").innerHTML=balance;


}

function addVal(){
    var add=prompt("Add amount in your account");
    
    var name = localStorage.getItem("name");
    var data=localStorage.getItem(name);
    var datavalue=data.split(",");
    var existBal=datavalue[8];
    alert(add);
    
    alert(existBal);

    if(add==""){
        alert("add value");
    }else{
    var totalBalance=parseInt(add)+parseInt(existBal);
    alert(totalBalance);
    var password=datavalue[0];
    var customerId=datavalue[1];
    var firstName=datavalue[2];
    var LastName=datavalue[3]
    var address=datavalue[4];
    var age=datavalue[5];
    var acType=datavalue[6];
    var acNo=datavalue[7];
    
    var array=[password,customerId,firstName,LastName,address,age,acType,acNo,totalBalance];
    localStorage.setItem(name,array);
     
  alert("Amount added successfully");
  
}

}
function subVal(){
    
    var sub=prompt("widraw amount from your account");
    var name = localStorage.getItem("name");
    var data=localStorage.getItem(name);
    var datavalue=data.split(",");
    var existBal=datavalue[8];
    alert(sub);
    alert(existBal);
    if(sub==""){
        alert("enter value");}
        else{
    if(sub<existBal){
        var totalBalance=parseInt(existBal)-parseInt(sub);
        
        var password=datavalue[0];
        var customerId=datavalue[1];
        var firstName=datavalue[2];
        var LastName=datavalue[3]
        var address=datavalue[4];
        var age=datavalue[5];
        var acType=datavalue[6];
        var acNo=datavalue[7];
        
        var array=[password,customerId,firstName,LastName,address,age,acType,acNo,totalBalance];
        localStorage.setItem(name,array);
        alert("Wtihdrawn successfullly");
        alert("Remaining Balance is: "+totalBalance);

    }
    else{
        alert("Can't withdraw . Balance is low !")
    }
  
     
}  



}
