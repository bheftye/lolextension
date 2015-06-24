

function getSummonerInfo(){

    document.getElementById("elemento").innerHTML= '';
    if(!$("#share_button").hasClass("hidden-xs"))
      $("#share_button").addClass("hidden-xs");

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
            try{
              var response = JSON.parse(xmlhttp.responseText);

              if(response){
                if(response.success){
                  document.getElementById("elemento").innerHTML= response.response;
                  if($("#share_button").hasClass("hidden-xs"))
                    $("#share_button").removeClass("hidden-xs");
                }
                else{
                  document.getElementById("elemento").innerHTML= '<br> <div style="color:white;font-size:16px"> '+response.response+'</div>';
                  if(!$("#share_button").hasClass("hidden-xs"))
                    $("#share_button").addClass("hidden-xs");
                }
              }
              
            }catch(e){
              console.log(e.message,xmlhttp.responseText);
            }
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

document.addEventListener('DOMContentLoaded', function() {
    var submit_button = document.getElementById('share_button');
    // onClick's logic below:
    submit_button.addEventListener('click', function() {
        shareSearch();
    });
});

function shareSearch(){
  $("form").hide();
  html2canvas(document.body, {
    onrendered: function(canvas) {
      var dataURL = canvas.toDataURL();
      
      console.log(dataURL);
      var data = new FormData;
          data.append('img', dataURL);

        jQuery.ajax({
          type: "POST",
          async: false,
          contentType: false,
          processData:false,
          cache:false,
          url: "http://brentheftye.mx/lolextension/servidor/img_handler.php",
          data: data,
          success: function(data) {
             if(data.indexOf("Unable") != -1 || data == ""){}
              social_img = JSON.parse(data);
              social_img = social_img.replace("./","/");
              shareFacebook();
          }
        });
    }
  });

}

var social_title = "League of Legends Extension";
var social_img = "";

function shareFacebook(){
    console.log("http://brentheftye.mx/lolextension/servidor"+social_img);
    window.open("https://www.facebook.com/dialog/feed?app_id=910381132337065&display=popup&caption="+encodeURIComponent(social_title)+"&link="+"http://brentheftye.mx/lolextension/servidor"+social_img+"&redirect_uri="+"http://brentheftye.mx/lolextension/servidor"+social_img+"&picture="+encodeURIComponent("http://brentheftye.mx/lolextension/servidor"+social_img), "Share Facebook",'height=300,width=600');
}

window.onload = function(){ // this could be done faster with the livequery() plugin for jquery
elt = document.createElement('iframe');
elt.id = 'facebook_load_frame';
elt.src = 'http://brentheftye.mx/lolextension/servidor/iframe.html';
document.getElementsByTagName('body')[0].appendChild(elt);
};
// Message passing API from David Walsh at http://davidwalsh.name/window-iframe
// Create IE + others compatible event handler
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
// Listen to message from child window
eventer(messageEvent,function(e) {
 console.log("Connection status: "+e.data.connectStatus+"; UserID: "+e.data.userID+"; AccessToken: "+e.data.accessToken);
 //This is the data from the Facebook SDK
},false);

