let Btn=document.querySelector('button');
Btn.addEventListener("click",Msg);

function Msg(){
      let name=prompt("Enter name of the student");
      Btn.textContent="My name is : "+name;
}