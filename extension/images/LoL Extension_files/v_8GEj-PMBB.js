/*!CK:1551207004!*//*1426003806,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["NY1A9"]); }

__d("DeveloperSiteSaveNotifier",["$","CSS","cx","DOM","UIPagelet"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={notifyAndReload:function(m,n,o,p){this.reloadPageletInRelativeElement(m,n,o,p);window.scrollTo(0,0);this.notify();},notify:function(){this.toggleSaveBannerWithTimeout(5000);},reloadPageletInRelativeElement:function(m,n,o,p){this._reloadPagelet(m,j.find(n,o),p);},reloadPageletByID:function(m,n,o){this._reloadPagelet(m,g(n),o);},_reloadPagelet:function(m,n,o){var p={usePipe:true,subdomain:'developers',jsNonblock:true};k.loadFromEndpoint(m,n,o,p);},toggleSaveBanner:function(){h.toggleClass(j.find(document,'div.'+"_5kdv"),"_5kdw");},toggleSaveBannerWithTimeout:function(m){this.toggleSaveBanner();setTimeout(this.toggleSaveBanner,m);}};e.exports=l;},null);
__d("DevappAlert",["$","CSS","csx","cx","DOM"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={select:function(m){k.scry(document,"div._61q").forEach(function(p){h.removeClass(p,"_61q");});var n=g('alert_'+m);h.addClass(n,"_61q");h.removeClass(n,"_5rw");var o=g('mainPanelWrapper');h.setClass(o,"_a2r");},updateUnreadBadge:function(m){var n=k.scry(document,"li.active span._5b7");if(n.length>0){k.replace(n[0],m);}else{var o=k.scry(document,"li.active div._5b5");if(o.length)k.insertAfter(o[0],m);}}};e.exports=l;},null);