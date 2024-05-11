function changestyle(){
    if(document.getElementById("mybutton").innerText==="Dark")
    {
        document.getElementById("mybutton").innerText="Light";
        document.body.style.backgroundColor="#ffffff";
        document.getElementById("h").style.color="black";
    }
    else 
    {
        document.getElementById("mybutton").innerText="Dark";
        document.body.style.backgroundColor="#1d1c1c";
        document.getElementById("h").style.color="white";
    }
}