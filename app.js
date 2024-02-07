const inputxx=document.getElementById("inputxx");
const mysubmit=document.getElementById("mysubmit");
const myresult=document.getElementById("myresult");
let age;
mysubmit.onclick=function(){
    age = inputxx.value;
    age=Number(age);

    if(age>=100){
        myresult.textContent=`you are too old to enter the site`;

    }
    else if(age>=18){
        myresult.textContent=`you are old enough to enter the website`;
    }
    else if(age==0){
        myresult.textContent=`you are just born`;
    }
    else if(age<0){
        myresult.textContent=` you are not human hahaha`;
    }
    else
    {
        myresult.textContent=`you have to be 18+ to enter the site`;
    }
}
