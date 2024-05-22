let username=document.getElementById("username");
let image=document.getElementById("image");
let email=document.getElementById("email");
let age=document.getElementById("age");
let phone=document.getElementById("phone")
let gender=document.getElementById("gender")

function randomUser(){
    fetch("https://randomuser.me/api")
    .then((res)=>res.json())
    .then((data)=>{
        let temp=data.results[0];
        console.log(temp)
        username.innerHTML=temp.name.first+" "+temp.name.last
        image.src=temp.picture.large;
        email.innerHTML+=" "+temp.email;
        age.innerHTML+=" "+temp.dob.age;
        phone.innerHTML=phone.innerHTML+" "+temp.cell;
        gender.innerHTML = gender.innerHTML+" "+temp.gender;

    })
}

randomUser();