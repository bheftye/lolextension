function getRss(event){
   
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById("elemento").innerHTML= JSON.parse(xmlhttp.responseText);
        }
      }
    xmlhttp.open("GET","http://brentheftye.mx/rss/index.php",true);
    xmlhttp.send();
}

window.addEventListener('load', getRss);

