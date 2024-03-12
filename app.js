let data=[{name:"Jordy Broke",Email:"jbroke2@gmail.com",img:"profile1.jpg",type:"contact"},
          {name:"Tamara Junior",Email:"tamaraj@gmail.com",img:"profile2.jpg",type:"contact"},
          {name:"Terry McGuire",Email:"mcterryg@gmail.com",img:"profile3.jpg",type:"contact"},
          {name:"John Bahil",Email:"jbahil@gmail.com",img:"profile4.jpg",type:"contact"},
          {name:"Family",Email:"Mom,Dad,sister",img:"profile5.jpg",type:"group"},
          {name:"Office",Email:"Sir,Mam",img:"profile6.jpg",type:"group"},
          {name:"Friends",Email:"",img:"profile7.jpg",type:"group"}
        ];



let contactsDiv=document.querySelector(".contacts");            
let groupDiv=document.querySelector(".groups"); 
let main=document.getElementById("main");
function load(data){
 
    groupDiv.classList.add("disNone");       
    data.forEach(element => {
        if(element.type=="contact"){
            creatChatBox(element,contactsDiv);
        }
        else{
            creatChatBox(element,groupDiv);
        }
    });
}
load(data);

function creatChatBox(chatData,div){
    let chat=document.createElement("div");

    //profile picture
    let profile=document.createElement("img");
    profile.src=chatData.img;


    //name
    let infodiv=document.createElement("div");
    infodiv.classList.add("info");
    let name=document.createElement("p");
    name.innerText=chatData.name;
    name.classList.add("name");
    let email=document.createElement("p");
    email.innerText=chatData.Email;
    email.classList.add("email");
    infodiv.appendChild(name);
    infodiv.appendChild(email);
    
    //send
    let btn=document.createElement("div");
    btn.classList.add("send");
    let icon=document.createElement("i");
    icon.classList.add("fa-regular");
    icon.classList.add("fa-paper-plane")
    let iconName=document.createElement("p");
    iconName.innerText="Send";
    btn.appendChild(icon);
    btn.appendChild(iconName);
    let subDiv=document.createElement("div")
    subDiv.classList.add("subDiv");
    subDiv.appendChild(profile);
    subDiv.appendChild(infodiv);
    chat.appendChild(subDiv);
    chat.appendChild(btn);
    div.appendChild(chat);

}

let selectedDiv=contactsDiv;
let selectedNav=document.querySelector(".initial");
selectedNav.classList.add("selectedNav");
let switchBtn=document.querySelectorAll(".switch");
switchBtn.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(item.innerText=="Groups"){
            selectedDiv.classList.add("disNone");
            selectedNav?selectedNav.classList.remove("selectedNav"):null;
            groupDiv.classList.remove("disNone");
            selectedDiv=groupDiv;
            item.classList.add( "selectedNav");
            selectedNav=item;

        }
        else{
            selectedDiv.classList.add("disNone");
            selectedNav?selectedNav.classList.remove("selectedNav"):null;
            contactsDiv.classList.remove("disNone");
            selectedDiv=contactsDiv;
            item.classList.add( "selectedNav");
            selectedNav=item;
        }
    })
})
