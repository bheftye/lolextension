

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
          $("#share_button").removeClass("hidden-xs");
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
  /*var blob = generate();
  var base64data;*/

  /*var xmlhttp;
  if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }
  else{// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      console.log(xmlhttp.responseText);
    }
  }*/

  html2canvas(document.body, {
    onrendered: function(canvas) {
      var dataURL = canvas.toDataURL();
      //ar params = "img="+dataURL;
      //xmlhttp.open("POST","http://localhost:8888/lolextension/servidor/img_handler.php",true);
      //xmlhttp.send(params);
      console.log(dataURL);
      var data = new FormData;
          data.append('img', dataURL);

        jQuery.ajax({
          type: "POST",
          async: false,
          contentType: false,
          processData:false,
          cache:false,
          url: "http://localhost:8888/lolextension/servidor/img_handler.php",
          data: data,
          success: function(data) {
              console.log(data);
          }
        });
    }
  });

}

(function (exports) {
    function urlsToAbsolute(nodeList) {
        if (!nodeList.length) {
            return [];
        }
        var attrName = 'href';
        if (nodeList[0].__proto__ === HTMLImageElement.prototype 
        || nodeList[0].__proto__ === HTMLScriptElement.prototype) {
            attrName = 'src';
        }
        nodeList = [].map.call(nodeList, function (el, i) {
            var attr = el.getAttribute(attrName);
            if (!attr) {
                return;
            }
            var absURL = /^(https?|data):/i.test(attr);
            if (absURL) {
                return el;
            } else {
                return el;
            }
        });
        return nodeList;
    }

    function screenshotPage() {
        urlsToAbsolute(document.images);
        urlsToAbsolute(document.querySelectorAll("link[rel='stylesheet']"));
        var screenshot = document.documentElement.cloneNode(true);
        var b = document.createElement('base');
        b.href = document.location.protocol + '//' + location.host;
        var head = screenshot.querySelector('head');
        head.insertBefore(b, head.firstChild);
        screenshot.style.pointerEvents = 'none';
        screenshot.style.overflow = 'hidden';
        screenshot.style.webkitUserSelect = 'none';
        screenshot.style.mozUserSelect = 'none';
        screenshot.style.msUserSelect = 'none';
        screenshot.style.oUserSelect = 'none';
        screenshot.style.userSelect = 'none';
        screenshot.dataset.scrollX = window.scrollX;
        screenshot.dataset.scrollY = window.scrollY;
        var script = document.createElement('script');
        script.textContent = '(' + addOnPageLoad_.toString() + ')();';
        screenshot.querySelector('body').appendChild(script);
        var blob = new Blob([screenshot.outerHTML], {
            type: 'text/html'
        });
        return blob;
    }

    function addOnPageLoad_() {
        window.addEventListener('DOMContentLoaded', function (e) {
            var scrollX = document.documentElement.dataset.scrollX || 0;
            var scrollY = document.documentElement.dataset.scrollY || 0;
            window.scrollTo(scrollX, scrollY);
        });
    }

    function generate() {
       return screenshotPage();
    }
    exports.screenshotPage = screenshotPage;
    exports.generate = generate;
})(window);

