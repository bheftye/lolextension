

function getSummonerInfo(){

    if($("#summname").val() != ""){
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
      //var params = "summ="+$("#summname").val()+"&serv="+$("#server").val();
      //console.log("summ="+$("#summname").val()+"&serv="+$("#server").val());

      xmlhttp.open("GET","http://localhost:8888/lolextension/servidor/index.php?summ="+$("#summname").val()+"&serv="+$("#server").val(),true);
      xmlhttp.send();
    } 

    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    var submit_button = document.getElementById('submit_button');
    // onClick's logic below:
    submit_button.addEventListener('click', function() {
        getSummonerInfo();
    });
});