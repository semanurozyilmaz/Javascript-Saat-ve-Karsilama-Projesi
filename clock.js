let fullName = prompt("İsminizi Giriniz: ")
document.getElementById('myName').innerHTML = fullName

function clock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes() ;
    let second = date.getSeconds();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = days[date.getDay()]
    document.getElementById("myClock").innerHTML= `${hour}:${minute}:${second} ${day}`
}

setInterval("clock()", 1000); 
