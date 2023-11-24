document.addEventListener("DOMContentLoaded",function(){
    
    let parts=['motor','atomic a pack','tools and aluminum sections','low resistance wiring','power supply','Damage equitment'];
    let random=Math.floor(Math.random() * (parts.length-1));
    console.log(random,parts[random]);


    document.getElementById("robot_message").innerHTML="";
    let temp=parts[random];
    sessionStorage.setItem("findPart", temp);
    document.getElementById("robot_message").innerHTML=`Robot: you will have to bring me the ${temp}`;
    setTimeout(()=>{
        window.location.href='../sub-pages/parts.html';
        },"10000");




})