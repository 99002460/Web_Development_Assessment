function selectDevice(){

    var sel = document.getElementById("mydevice");
    if(sel.value == 'Laptop'){
    document.getElementById("mydiv").innerHTML="Lenovo<br>Sony<br>HP<br>";
     }else if(sel.value == 'TV'){
    document.getElementById("mydiv").innerHTML="Iphone<br>Samsung<br>Sony";
     }else if(sel.value == 'Mobile'){
    document.getElementById("mydiv").innerHTML="Redmi<br>moto<br>Samsung<br>Realme<br>Oppo<br>Iphone";
     }else{
    document.getElementById("mydiv").innerHTML="";
     }
     }