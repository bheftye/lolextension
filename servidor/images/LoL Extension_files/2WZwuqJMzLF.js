/*!CK:23191870!*//*1434388667,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["eSWCV"]); }

__d("DeveloperAppColorPicker",["Event","Style"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j,k){if(k.trim()===''){h.set(j,'backgroundColor','transparent');return;}h.set(j,'backgroundColor','#'+k);}e.exports={bindColorPickerInputAndPreview:function(j,k){var l=j.value;i(k,l);g.listen(j,'input',function(event){var m=new RegExp(("^[0-9a-fA-F]{"+j.value.length+"}$"));if(m.test(j.value)){l=j.value;i(k,j.value);}else{j.value=l;i(k,'');}});}};},null);
__d("DeveloperAppDisableInstaller",["Event","DOM"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();var i={init:function(j,k){var l=h.find(j,'input'),m=h.find(k,'input');this.updateEnable(l,m);g.listen(j,'click',function(){i.updateEnable(l,m);});},updateEnable:function(j,k){k.disabled=j.checked;if(j.checked)k.checked=true;}};e.exports=i;},null);
__d("DeveloperAppOptionalField",["CSS","cx","DOM","Event"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={init:function(l,m,n){n=n||[];var o=i.find(l,'input');this.updateVisibility(o,m,n);m.concat(n).forEach(function(p){return g.addClass(p,"_5tcg");});j.listen(o,'click',function(){k.updateVisibility(o,m,n);});},_updateVisibilityElems:function(l,m){m.forEach(function(n){return g.conditionClass(n,"_5q5h",l);});},updateVisibility:function(l,m,n){this._updateVisibilityElems(!l.checked,m);this._updateVisibilityElems(l.checked,n);}};e.exports=k;},null);
__d("DeveloperAppPlatformSelector",["Animation","CSS","DeveloperAppPlatform","DevsiteVitalsConstants","Grid.react","React","XUIText.react","cx","cssVar"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=k.GridItem,q=l,r=q.PropTypes,s=l.createClass({displayName:"DeveloperAppPlatformSelector",propTypes:{onSelect:r.func.isRequired,animateOnSelect:r.bool,visiblePlatforms:r.array.isRequired,disabledPlatforms:r.array},_onClick:function(t){if(this._platformDisabled(t))return;if(this.props.animateOnSelect===false)return this.props.onSelect(t);var u=l.findDOMNode(this.refs[(""+t+"-image")]);h.toggle(l.findDOMNode(this.refs[(""+t+"-selected-image")]));h.toggleClass(u,'active');new g(u).to('opacity',0).duration(600).ondone(function(){return this.props.onSelect(t);}.bind(this)).go();new g(l.findDOMNode(this.refs[(""+t+"-label")])).to('color',"#5890ff").duration(600).go();},_platformDisabled:function(t){return (this.props.disabledPlatforms&&this.props.disabledPlatforms.indexOf(t)!=-1);},render:function(){var t=this.props.visiblePlatforms.map(function(u){return (l.createElement(p,{className:(("_5s9l")+(this._platformDisabled(u)?' '+"disabled":'')),"data-vitals":j.CARD_LINK+' , '+i.labels[u],onClick:this._onClick.bind(this,u),key:u},l.createElement("div",{className:"_5uuz"},l.createElement("div",{"data-platform":u,className:"_5s9m selected active hidden_elem",ref:(""+u+"-selected-image")}),l.createElement("div",{"data-platform":u,className:"_5s9m",ref:(""+u+"-image")})),l.createElement(m,{weight:"bold",size:"medium",display:"block",className:"mtm",ref:(""+u+"-label")},i.labels[u])));}.bind(this));return (l.createElement(k,{cols:4,fixed:true,className:"_5s9o"},t));}});e.exports=s;},null);
__d("DevsiteBasicSettings",["CSS","DOM","DOMScroll","Vector","$","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m={updateAddPlatformButton:function(){g.conditionShow(k('add-platform-button'),m.getHiddenPlatformCards().length);},getAddedPlatformCards:function(){return h.scry(document,'div.'+"_5t1j"+':not(.hidden_elem)');},getHiddenPlatformCards:function(){return h.scry(document,'div.'+"_5t1j"+'.hidden_elem');},removePlatform:function(n){g.hide(n);m.getPlatformCheckbox(n).checked=false;m.updateAddPlatformButton();},addPlatform:function(n){var o=h.find(document,'div.'+m.getPlatformCardClass(n));g.show(o);m.getPlatformCheckbox(o).checked=true;m.updateAddPlatformButton();var p=j.getScrollPosition(),q=j.getElementPosition(o),r=new j(p.x,q.y-100,'document');i.scrollTo(r);g.addClass(o,"_5tqe");g.addClass(o,"_5tqf");setTimeout(function(){g.removeClass(o,"_5tqf");},4000);},getPlatformCheckbox:function(n){return h.find(n,'input[type="checkbox"][name="platforms[]"]');},getPlatformCardClass:function(n){switch(n){case 'android':return "_59f_";case 'ios':return "_59g1";case 'playstation':return "_59g5";case 'xbox':return "_59g6";case 'web':return "_59g7";case 'canvas':return "_59g9";case 'windows':return "_59gt";case 'page_tab':return "_59g-";}}};e.exports=m;},null);
__d("DeveloperAppPlatformSelectorDialog",["React","ReactLayeredComponentMixin","DeveloperAppPlatformSelector","DevsiteBasicSettings","Image.react","XUIButton.react","XUIDialog.react","XUIDialogBody.react","XUIDialogCancelButton.react","XUIDialogFooter.react","XUIDialogTitle.react","fbt","cx","ix","DevsiteVitalsConstants"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){b.__markCompiled&&b.__markCompiled();var v=g,w=v.PropTypes,x=g.createClass({displayName:"DeveloperAppPlatformSelectorDialog",mixins:[h],getInitialState:function(){return {dialogShown:false,disabledPlatforms:[]};},propTypes:{visiblePlatforms:w.array.isRequired},render:function(){return (g.createElement(l,{type:"button",size:"xxlarge",rel:"async","data-vitals":u.CARD_LINK+' , '+u.ADD_PLATFORM,image:g.createElement(k,{src:t('/images/ui/x/image/plus.png')}),label:r._("Agregar plataforma"),onClick:function(event){return this.show();}.bind(this)}));},_onSelect:function(y){this.hide();setTimeout(function(){j.addPlatform(y);},450);},renderLayers:function(){return {dialog:g.createElement(m,{shown:this.state.dialogShown,width:680,modal:true,layerHideOnBlur:false},g.createElement(q,{showCloseButton:false},r._("Selecciona la plataforma")),g.createElement(n,{className:"_5t1i"},g.createElement("img",{height:"1",width:"1",src:"https://sact.atdmt.com/action/fuspmg_GamesCanvasSettings"+"Page_1"}),g.createElement(i,{onSelect:this._onSelect,visiblePlatforms:this.props.visiblePlatforms,disabledPlatforms:this.state.disabledPlatforms,animateOnSelect:false})),g.createElement(p,null,g.createElement(o,{"data-vitals":u.CARD_LINK+' , '+u.CANCEL_ADD})))};},show:function(){var y=[];j.getAddedPlatformCards().forEach(function(z){return y.push(j.getPlatformCheckbox(z).getAttribute('value'));});this.setState({dialogShown:true,disabledPlatforms:y});},hide:function(){this.setState({dialogShown:false});}});e.exports=x;},null);
__d("DevsiteExternalPlatformCard",["DevsiteBasicSettings","Event"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(j,k){"use strict";h.listen(k,'click',function(event){g.removePlatform(j);return false;});}e.exports=i;},null);