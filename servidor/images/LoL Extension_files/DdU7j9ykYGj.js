/*!CK:2035339121!*//*1434383145,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["seGg+"]); }

__d("DevappImageSelector",["Event","copyProperties"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j,k,l){g.listen(j,'click',function(){i.getPreviewDialog().show(k,l);});}h(i,{_previewDialog:null,setPreviewDialog:function(j){i._previewDialog=j;},getPreviewDialog:function(){return i._previewDialog;}});e.exports=i;},null);
__d("DeveloperAppAppDetailsImageHandler",["CSS","cx","DOM","Event"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={init:function(l){l.forEach(function(m){var n=i.find(m,'input');j.listen(n,'click',function(event){return this._click(n);}.bind(this));}.bind(this));},_click:function(l){var m=i.find(document,'div.'+"_5try"+("[data-platform=\""+l.value+"\"]"));g.conditionShow(m,l.checked);this._updateScreenshotCardState();this._updateBannerCardState();},_updateBannerCardState:function(){var l=i.scry(document,'div.'+"_59fh"+'.'+"_5trz"+' input'),m=false;l.forEach(function(o){return m=m||o.checked;});var n=i.scry(document,'div.'+"_5trw");n.forEach(function(o){return g.conditionClass(o,"_5trx",!m);});},_updateScreenshotCardState:function(){var l=i.scry(document,'div.'+"_5try"+':not(.hidden_elem)'),m=i.find(document,'div.'+"_5tr-");g.conditionShow(m,l.length);}};e.exports=k;},null);
__d("DeveloperCategorySelector",["CSS"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={init:function(i,j,k){this.handleChange(i,j,k);i.subscribe('change',this.handleChange.bind(this,i,j,k));},handleChange:function(i,j,k){if(i.getValue()!=k){g.hide(j);}else g.show(j);}};e.exports=h;},null);
__d("DeveloperAsyncDialog",["AsyncRequest","copyProperties","CSS","cx","DOM"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();function l(m){this.dialog=m;this.statusElement=k.find(m.getRoot(),'.'+"_2uf");this.contentElement=k.find(m.getRoot(),'.'+"_2ug");}h(l.prototype,{show:function(m,n){this.showStatus();this.dialog.show();new g(m).setMethod('POST').setData(n).setHandler(this._handleData.bind(this)).send();},_handleData:function(m){k.setContent(this.contentElement,m.getPayload());this.hideStatus();},hideStatus:function(m,n){i.show(this.contentElement);i.hide(this.statusElement);},showStatus:function(m,n){i.hide(this.contentElement);i.show(this.statusElement);}});e.exports=l;},null);
__d("DeveloperAppInlineValidation",["CSS","DOM","Event","Parent","Vector","DOMScroll","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n=150,o={registerPopup:function(p,q){i.listen(p,'mouseenter',function(event){var r=j.byClass(p,"_5b_j");if(g.hasClass(r,'valid')||!r.hasOwnProperty('_errors'))return;var s=h.find(q.getContent(),'div.'+"_5p3t");h.setContent(s,h.create('ul',{},r._errors.map(function(t){return h.create('li',{},t);})));});},isInvalid:function(p){return g.hasClass(p,'validated')&&!g.hasClass(p,'valid');},isValid:function(p){return g.hasClass(p,'validated')&&g.hasClass(p,'valid');},setValid:function(p){g.addClass(p,'validated');g.addClass(p,'valid');},setInvalid:function(p,q){p._errors=q;g.addClass(p,'validated');g.removeClass(p,'valid');},clearFlags:function(p){g.removeClass(p,'validated');g.removeClass(p,'valid');},show:function(p,q){if(!q)q=document;var r=null;h.scry(q,'div.'+"_5b_j").forEach(function(s){var t=s.firstChild.firstChild,u=t.getAttribute('class');if(u&&u.indexOf("_59fh")!==-1)t=t.firstChild;var v=t.getAttribute('name');if(!v)v=t.getAttribute('id');if(p.hasOwnProperty(v)){this.setInvalid(s,p[v]);var w=k.getElementPosition(s);if(!r||w<r)r=w;return;}this.clearFlags(s);}.bind(this));if(r){r.y-=n;l.scrollTo(r);}},updateValidations:function(p,q){if(!q)q=document;var r=h.scry(q,'div.'+"_5b_j").some(function(s){return g.hasClass(s,'validated');});if(!r)return;this.show(p,q);},clearAllValidations:function(p){if(!p)p=document;h.scry(p,'div.'+"_5b_j").forEach(function(q){return this.clearFlags(q);}.bind(this));}};e.exports=o;},null);
__d("DevsiteAppUpgradeBanner",["AsyncRequest","DOMEventListener","XDeveloperBannerHideAsyncController"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={init:function(k,l){h.add(k,'click',function(){new g().setMethod('POST').setData({banner:l}).setURI(i.getURIBuilder().getURI()).send();});}};e.exports=j;},null);
__d("DevsiteHeaderFixedElement",["CSS","DOM","DOMEventListener","cx"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={initClose:function(l,m){i.add(m,'click',function(){g.addClass(l.parentNode,"_4h2v");setTimeout(function(){return h.remove(l.parentNode);},1000);});}};e.exports=k;},null);
__d("DevsiteButtonTextField.react",["AsyncRequest","React","URI","XUIButton.react","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=h,n=m.PropTypes,o=h.createClass({displayName:"DevsiteButtonTextField",propTypes:{value:n.string,buttonHidden:n.bool,buttonLabel:n.string,action:n.string,actionType:n.oneOf(['async','link'])},getInitialState:function(){return {value:this.props.value,buttonHidden:this.props.buttonHidden,buttonLabel:this.props.buttonLabel,action:this.props.action,actionType:this.props.actionType};},getDefaultProps:function(){return {buttonHidden:false,buttonLabel:l._("Mostrar")};},_defaultClickHandler:function(event){if(this.state.action)if(this.state.actionType=='link'){new i(this.state.action).go(true);}else new g(this.state.action).setMethod('POST').setHandler(function(p){var q=true;if(typeof p.payload.buttonHidden!=='undefined')q=p.payload.buttonHidden;var r=this.state.action;if(typeof p.payload.action!=='undefined')r=p.payload.action;this.setState({buttonLabel:p.payload.buttonLabel,buttonHidden:q,value:p.payload.value,action:r});}.bind(this)).send();return event.preventDefault();},render:function(){var p=this.state.value,q=null;if(!this.state.buttonHidden)q=h.createElement(j,{type:"button",label:this.state.buttonLabel,onClick:this.props.onClick||this._defaultClickHandler});return (h.createElement("div",{className:"_5e_6 _5rvc"},h.createElement("span",{className:"_5rv9"},p),q));}});e.exports=o;},null);