var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(e){e.fn.jcarousel=function(k){var k=e.extend({stopAutoSlideAfterLoop:false,minResizeWidth:1000,autoResize:false,hoverItem:false,inSliding:false,direction:"horizontal",loop:false,dispItems:1,nextBtn:"<span>Next</span>",prevBtn:"<span>Previous</span>",autoSlide:false,autoSlideInterval:4000,delayAutoSlide:4000,combinedClasses:false,effect:"slide",slideEasing:"swing",animSpeed:2000,equalWidths:"true",itemMargin:42,start:0,itemWidth:0,fadeWhenSliding:false,initialSlide:function(){return true},beforeSlide:function(){},afterSlide:function(){},onHoverItem:function(){}},k);return this.each(function(){var n={$elts:{},params:k,launchOnLoad:[]};n.$elts.carousel=e(this).addClass("js");n.$elts.content=e(this).find("ul").css({position:"absolute",top:0});n.$elts.li=e("li",n.$elts.content);n.$elts.hover=false;n.$elts.hoverItem="";n.$elts.wrap=n.$elts.content.parent();n.steps={distance:1,start:k.start,first:0,count:n.$elts.content.find(">*").length};n.$elts.li.each(function(q){e(this).attr("id","carousel-"+q)});var m=null;var l=n.$elts.content.find(">*:eq(0)");var o=l.outerWidth();if(o==0&&n.params.itemWidth>0){n.itemWidth=n.params.itemWidth;n.$elts.content.find(">*").css({width:n.itemWidth+"px"})}else{n.itemWidth=parseInt(o)+parseInt(k.itemMargin)}if(k.loop){m=n.$elts.li.slice(n.steps.count-k.dispItems-1+1).clone();var p=n.$elts.li.slice(0,k.dispItems).clone();m.each(function(){var q=e(this).attr("id");e(this).attr("id","copy-"+q)});p.each(function(){var q=e(this).attr("id");e(this).attr("id","copy-"+q)});n.$elts.content.prepend(m).append(p);n.$elts.li=e("li",n.$elts.content);n.steps.start+=parseInt(k.dispItems);n.steps.first=n.steps.start;n.$elts.content.css("left",-(n.itemWidth*n.steps.first)+"px");n.steps.count=n.$elts.content.find(">*").length}if(n.params.autoResize){j(n);e(window).resize(function(){j(n)})}n.stopAutoSlideAfterLoop=false;n.functionQueueInterval=null;n.functionQueues=[];n.itemInSliding=false;if(n.params.hoverItem){n.$elts.li.hover(function(q){n.params.onHoverItem("enterItem",e(this))},function(q){n.params.onHoverItem("leaveItem",e(this))});n.$elts.content.hover(function(q){if(n.stopAutoSlideAfterLoop||!n.autoSlide){return}clearTimeout(e(this).data("leave"));e(this).data("enter",setTimeout(function(){var r=a(i,this,[n]);n.functionQueues.push(r);d(n)},1000))},function(q){if(n.stopAutoSlideAfterLoop||!n.autoSlide){return}clearTimeout(e(this).data("enter"));e(this).data("leave",setTimeout(function(){var r=a(c,this,[n]);n.functionQueues.push(r);d(n)},1000))})}n.steps.last=n.steps.count-1;n.$elts.prevBtn=n.$elts.carousel.find(k.prevBtn);n.$elts.nextBtn=n.$elts.carousel.find(k.nextBtn);b(n,function(q){n.steps.distance=1;f(q,this,n)});e(function(){if(k.direction=="vertical"){n.contentWidth=n.itemWidth}else{if(k.equalWidths){n.contentWidth=n.itemWidth*n.steps.count}else{n.contentWidth=(function(){var r=0;n.$elts.content.find(">*").each(function(){r+=e(this).outerWidth()});return r})()}}n.$elts.content.width(n.contentWidth);n.itemHeight=l.outerHeight();if(k.direction=="vertical"){n.$elts.content.css({height:n.itemHeight*n.steps.count+"px"});n.$elts.content.parent().css({height:n.itemHeight*n.params.dispItems+"px"})}else{}n.$elts.content.css("left",-(n.itemWidth*n.steps.first)+"px");g(n);e.each(n.launchOnLoad,function(r,t){t()});n.$elts.carousel.touchwipe({direction:"h",wipeLeft:function(){n.$elts.nextBtn.click()},wipeRight:function(){n.$elts.prevBtn.click()},preventDefaultEvents:true,checkMoving:true});var q=window.setInterval(function(){if(n.params.initialSlide(n.steps.first,n.$elts.content,function(r){h(r,n)},function(r){n.params.autoSlide=false;i(n)})){window.clearInterval(q);if(n.params.autoSlide){window.setTimeout(function(){n.autoSlideInterval=null;c(n)},n.params.delayAutoSlide)}}},1000)})})};function a(l,k,m){return function(){l.apply(k,m)}}function d(k){if(k.functionQueues.length>0){window.setTimeout(function(){while(k.functionQueues.length>0){(k.functionQueues.shift())()}},0)}}function c(k){if(k.params.hoverItem){k.params.onHoverItem("leaveItems",null)}if(k.autoSlideInterval!=null){i(k)}if(!k.params.autoSlide){return}k.autoSlideInterval=window.setInterval(function(){if(k.stopAutoSlideAfterLoop){i(k);return}if(!k.itemInSliding){k.$elts.nextBtn.click()}},k.params.autoSlideInterval)}function i(k){if(k.params.hoverItem){k.params.onHoverItem("enterItems",null)}window.clearInterval(k.autoSlideInterval);k.autoSlideInterval=null}function h(m,l){l.slideInStop=true;l.slideInStart=false;i(l);var k=l.$elts.content.find(">*:eq("+l.steps.first+")");var o=0;var p=k.attr("id");var r=p.lastIndexOf("-");var n=p.length;if(r!=-1){o=parseInt(p.substr(r+1,n-r))}var q=(m-o);l.steps.distance=q;if(q>0){f(null,l.$elts.nextBtn,l)}else{if(q<0){f(null,l.$elts.prevBtn,l)}}}function f(u,m,r){var w=e(m);var z=w.data("firstStep");var v=[];var q=[];switch(r.params.effect){case"no":r.params.beforeSlide(r.steps.first,z,r.params.dispItems,r.$elts.content);r.itemInSliding=true;if(r.params.direction=="vertical"){r.$elts.content.css("top",-(r.itemHeight*z)+"px")}else{r.$elts.content.css("left",-(r.itemWidth*z)+"px")}r.params.afterSlide(z,r.$elts.content);break;case"fade":r.params.beforeSlide(r.steps.first,z,r.params.dispItems,r.$elts.content);r.itemInSliding=true;if(r.params.direction=="vertical"){r.$elts.content.hide().css("top",-(r.itemHeight*z)+"px").fadeIn(r.params.animSpeed,function(){r.params.afterSlide(z,r.$elts.content)})}else{r.$elts.content.hide().css("left",-(r.itemWidth*z)+"px").fadeIn(r.params.animSpeed,function(){r.params.afterSlide(z,r.$elts.content)})}break;default:var o=r.steps.first;var t=z;if(r.params.loop){var A=0;if(z<=r.steps.start-r.params.dispItems){o=z=(r.steps.count+z)-r.params.dispItems;if(r.params.direction=="vertical"){r.$elts.content.css("top",-(r.itemHeight*z)+"px")}else{r.$elts.content.css("left",-(r.itemWidth*z)+"px")}t=z=z-r.params.dispItems}else{if(z>=r.steps.count-r.params.dispItems+1){o=z=(r.params.dispItems-(r.steps.count-z));if(r.params.direction=="vertical"){r.$elts.content.css("top",-(r.itemHeight*z)+"px")}else{r.$elts.content.css("left",-(r.itemWidth*z)+"px")}t=z=z+r.params.dispItems}}if(t+r.params.dispItems>=r.steps.count-r.params.dispItems+1){if(r.params.stopAutoSlideAfterLoop){if(!r.stopAutoSlideAfterLoop){r.stopAutoSlideAfterLoop=true;i(r)}}}}if(r.steps.distance>1){z+=(r.steps.distance-1)*r.params.dispItems;t=z}else{if(r.steps.distance<-1){z+=(r.steps.distance+1)*r.params.dispItems;t=z}}r.itemInSliding=true;r.params.beforeSlide(o,t,r.params.dispItems,r.$elts.content);if(r.params.fadeWhenSliding){for(var n=o;n<o+r.params.dispItems;n++){v.push(r.$elts.li[n])}for(var n=t;n<t+r.params.dispItems;n++){q.push(r.$elts.li[n])}}if(r.params.direction=="vertical"){r.$elts.content.stop().animate({top:-(r.itemHeight*z)+"px"},r.params.animSpeed,r.params.slideEasing,function(){r.params.afterSlide(z,r.$elts.content)})}else{if(r.params.fadeWhenSliding){if(jQuery.fxqueue("toutglobal").playing!=undefined){jQuery.fxqueue("toutglobal").stop()}for(var n=0;n<v.length;n++){e(v[n]).find(".tout_content").css({opacity:1,filter:""});e(v[n]).find(".tout_content").animate({opacity:0},{duration:r.params.animSpeed,easing:r.params.slideEasing,scope:"s01",queue:"toutglobal"})}r.$elts.content.stop().animate({left:-(r.itemWidth*z)+"px"},{duration:r.params.animSpeed,easing:r.params.slideEasing,complete:function(){r.params.afterSlide(z,r.$elts.content);r.itemInSliding=false},step:function(B,C){},scope:"s01",queue:"toutglobal"});for(var n=0;n<q.length;n++){e(q[n]).find(".tout_content").css({opacity:0});e(q[n]).find(".tout_content").animate({opacity:1,filter:""},{duration:r.params.animSpeed,easing:r.params.slideEasing,scope:"s01",queue:"toutglobal"})}}else{var l=t-o;var y=false;var p=null;if(l>1){y=true;var x=r.$elts.content.find(">*:eq("+o+")");var k=r.$elts.content.find(">*:eq("+t+")");p=x.next();k.before(x);r.$elts.content.css("left",-(r.itemWidth*(t-1))+"px")}else{if(l<-1){y=true;var x=r.$elts.content.find(">*:eq("+o+")");var k=r.$elts.content.find(">*:eq("+t+")");p=x.prev();k.after(x);r.$elts.content.css("left",-(r.itemWidth*(t+1))+"px")}}r.$elts.content.stop().animate({left:-(r.itemWidth*z)+"px"},{duration:r.params.animSpeed,easing:r.params.slideEasing,complete:function(){if(y){if(l>1){p.before(x)}else{if(l<-1){p.after(x)}}}r.params.afterSlide(z,r.$elts.content);r.itemInSliding=false}})}}}r.steps.first=z;g(r)}function g(k){k.$elts.prevBtn.data("firstStep",k.steps.first-k.params.dispItems);k.$elts.nextBtn.data("firstStep",k.steps.first+k.params.dispItems);if(k.$elts.prevBtn.data("firstStep")<0){if(k.params.loop&&k.steps.count>k.params.dispItems){k.$elts.prevBtn.trigger("enable")}else{k.$elts.prevBtn.trigger("disable")}}else{k.$elts.prevBtn.trigger("enable")}if(k.$elts.nextBtn.data("firstStep")>=k.steps.count){if(!k.params.loop){k.$elts.nextBtn.trigger("disable")}}else{k.$elts.nextBtn.trigger("enable")}}function b(l,k){l.$elts.nextBtn.add(l.$elts.prevBtn).bind("enable",function(){var m=e(this).bind("click",k).removeClass("disabled")}).bind("disable",function(){var m=e(this).unbind("click").addClass("disabled")})}function j(l){var k=e(window).width();k-=3;if(k<l.params.minResizeWidth){k=l.params.minResizeWidth}l.$elts.li.css({width:k+"px"});l.$elts.wrap.css({width:k+"px"});var m=l.$elts.wrap.parent();window.setTimeout(function(){while(m.attr("id")!="page"){m.css({width:k+"px"});m=m.parent()}l.itemWidth=k;var n=0;l.$elts.content.find(">*").each(function(){n+=e(this).outerWidth()});l.$elts.content.css({width:n+"px",left:-(l.itemWidth*l.steps.first)+"px"})},0)}})(jQuery);(function(c){var a=function(e){return{name:e,isFxQueue:true,paused:false,playing:null,shouldStart:function(){return(this.playing==null||!this.paused)},pause:function(){if(!this.playing){return false}((this.playing.isScope)?this.playing:this.playing.elem).stop();this.paused=true;return true},stop:function(){if(!this.playing){return false}((this.playing.isScope)?this.playing:this.playing.elem).stop();this.playing=null;this.paused=false;this.length=0;return true},start:function(){if(this.playing&&this.paused){this.playing();this.paused=false;return true}else{if(this.length&&!this.playing){this.playing=this[0];c(document).dequeue(this.name);return true}}return false},getScope:function(f){if(this.playing&&this.playing.isScope&&this.playing.called==f){return this.playing}for(var g=0;g<this.length;g++){if(this[g].isScope&&this[g].called==f){return this[g]}}return false},dequeue:function(g){if(!this.playing){return false}if(this.playing.isScope){var j=this.playing.items;for(var h=0;h<j.length;h++){if(g==j[h].elem[0]&&!j[h].finished){j[h].finished=true;this.playing.finishedItems++}}if(this.playing.finishedItems<j.length){return false}}else{if(this.playing.elem&&this.playing.elem[0]!=g){return false}}var f=this;setTimeout(function(){f.playing=f[0];c(document).dequeue(f.name)},this.playing.postDelay);return true}}};var b=function(e){var f=function(){for(var g=0;g<f.items.length;g++){f.items[g]()}};f.called=e;f.isScope=true;f.finishedItems=0;f.stop=function(){for(var g=0;g<f.items.length;g++){f.items[g].elem.stop()}};f.items=[];return f};var d=c.fn.animate;c.fn.animate=function(j,f,i,l){if(!this.length){return this}var o=(typeof f=="object")?f:c.speed(f,i,l);var e=c.extend({queue:"fx",position:"end",limit:-1,preDelay:0,postDelay:0,complete:null},o);if(!e.queue||e.queue=="fx"){return d.apply(this,arguments)}var g=e.queue;var h=c(document).queue(e.queue);if(!h.isFxQueue){c.extend(h,a(g))}e.queue=false;var k=function(){e.complete=function(){h.dequeue(this);if(c.isFunction(k.users_complete)){return k.users_complete.apply(this,arguments)}};setTimeout(function(){k.elem.animate(j,e)},k.preDelay)};k.elem=this;k.preDelay=e.preDelay||0;k.postDelay=e.postDelay||0;k.users_complete=f.complete||l;var n=h.getScope(e.scope);if(n){n.items.push(k);if(h.playing==n){k()}return this}if(e.limit<0||h.length<e.limit){var m=null;if(e.scope){m=b(e.scope);m.items.push(k)}else{m=k}if(e.position=="end"){h.push(m)}else{if(e.position=="front"){h.splice(1,0,m)}}if(h.shouldStart()){h.start()}return this}};c.extend({fxqueue:function(e){return c(document).queue(e)}})})(jQuery);(function(a){a.fn.touchwipe=function(c){var b={direction:"h",min_move_y:20,min_move_x:20,wipeLeft:function(){},wipeRight:function(){},wipeTop:function(){},wipeBottom:function(){},preventDefaultEvents:true,checkMoving:false,checkMinMove:false,e:{}};if(c){a.extend(b,c)}this.each(function(){var f,d;var j=false;function i(){this.removeEventListener("touchmove",g);f=null;d=null;j=false}function g(n){b.e=n;if(b.preventDefaultEvents){n.preventDefault()}if(b.checkMoving){if(!j){return}}if(b.direction=="h"){var k=n.touches[0].pageX;var m=f-k;if(Math.abs(m)>=b.min_move_x||!b.checkMinMove){i();if(m>0){b.wipeLeft()}else{b.wipeRight()}}f=k}else{var o=n.touches[0].pageY;var l=d-o;if(Math.abs(l)>=b.min_move_y||!b.checkMinMove){i();if(l>0){b.wipeTop()}else{b.wipeBottom()}}d=o}}function h(k){b.e=k;if(k.touches.length==1){if(b.direction=="h"){f=k.touches[0].pageX}else{d=k.touches[0].pageY}j=true}}function e(k){k.cancelable&&k.preventDefault();return false}if(this.addEventListener){this.addEventListener("touchstart",h,false);this.addEventListener("touchmove",g,false)}else{if(this.attachEvent){this.attachEvent("touchstart",g);this.attachEvent("touchmove",g)}}});return this}})(jQuery);HN.Home=new function(){var self=this;var bannerConfigs=[];var waitBannerLoaded=true;var allBannerAreLoaded=true;var inInitialRunning=false;var loopHotSpotEffect=false;var showBannerPaging=false;var showBannerSlideControls=true;var bannerInSliding=false;var toutInSliding=false;var queues=[];var banners=[];var navigateQueues=[];var navigateQueueInterval=null;var lastToutInWaitingSlide=null;var stopSlideCallBack=null;this.onHoverTout=function(event,tout){if(toutInSliding){if(event=="enterItem"){lastToutInWaitingSlide=tout}return}if(tout!=null&&tout.length>0){var id=tout.attr("id");var $tout_content=tout.find(".tout_content");var $learn_more=tout.find(".learn_more");if(event=="enterItem"){$tout_content.stop().animate({height:"225px",bottom:0},{speed:100,easing:"swing"});$learn_more.stop().css({opacity:0,display:"block"});$learn_more.animate({opacity:1},{speed:100})}else{if(event=="leaveItem"){$learn_more.stop().css({opacity:1,display:"block"});$learn_more.animate({opacity:0},{speed:100,complete:function(){$learn_more.css({display:"none"})}});$tout_content.stop().animate({height:"193px",bottom:0},{speed:100,easing:"swing"})}}}else{if(event=="enterItems"){}else{lastToutInWaitingSlide=null}}};this.addBannerConfig=function(id,data){bannerConfigs[id]=data;if(id=="config"){waitBannerLoaded=bannerConfigs[id]["checkLoadedBannersBeforeSliding"];loopHotSpotEffect=bannerConfigs[id]["loopHotSpotEffect"];showBannerPaging=bannerConfigs[id]["showBannerPaging"];showBannerSlideControls=bannerConfigs[id]["showBannerSlideControls"]}};this.waitUntilAllBannerLoaded=function(content){allBannerAreLoaded=false;var lis=$("li",content);var totalBanner=lis.length;var countBannerLoaded=0;if(banners.length==0){lis.each(function(i){var $bannerImage=$(this).find("> img");if($bannerImage.length==0){var imagePath=$(this).css("background-image").replace(/url\(['"]?([^\)'"]+)['"]?\)/,"$1");$bannerImage=$("<img/>").attr("src",imagePath)}banners.push($bannerImage)})}for(var i=0;i<banners.length;i++){var $img=banners[i];if($img.length>0){if($img[0].complete=="true"||$img[0].complete==true){countBannerLoaded++}else{$img.load(function(){countBannerLoaded++})}}}var bannerLoadedInterval=null;bannerLoadedInterval=window.setInterval(function(){if(countBannerLoaded>=totalBanner){window.clearInterval(bannerLoadedInterval);allBannerAreLoaded=true}},500)};this.extractId=function(lastSeparateChar,elementId){var id="";var pos=elementId.lastIndexOf(lastSeparateChar);var length=elementId.length;if(pos!=-1){id=elementId.substr(pos+1,length-pos)}return id};this.showBannerPaging=function(idx,content,navigateTo){var $parent=content.parent();var $item=content.find(">*:eq("+idx+")");var currentIdx=HN.Home.extractId("-",$item.attr("id"));var lis=content.find("> li").not('li[id*="copy"]');var totalRealBanner=0;if(lis.length>0){totalRealBanner=lis.length}var spotPagingContainer=$("#spotPagingContainer");var spotControl=null;if(spotPagingContainer.length>0){spotPagingContainer.hover(function(e){e.stopPropagation()},function(e){});var spotControlHtml='<div class="spot_slider_control">';spotControlHtml+="</div>";spotPagingContainer.append(spotControlHtml);spotControl=spotPagingContainer.find(".spot_slider_control")}var spotControlWidth=0;if(spotControl!=null&&spotControl.length>0){for(var i=0;i<totalRealBanner;i++){if(currentIdx==i){var spot=$('<div id="spot-'+i+'" class="spot actived"><a href="javascript:void(0);"></a></div>')}else{var spot=$('<div id="spot-'+i+'" class="spot"><a href="javascript:void(0);"></a></div>')}spot.bind("click",function(){var idx=HN.Home.extractId("-",$(this).attr("id"));navigateQueues.push(idx);if(navigateQueueInterval==null){navigateQueueInterval=window.setInterval(function(){if(navigateQueues.length==0){window.clearInterval(navigateQueueInterval);navigateQueueInterval=null}else{if(!bannerInSliding){navigateTo(navigateQueues.pop())}}},50)}});spotControl.append(spot);spotControlWidth+=spot.outerWidth(true);if($.browser.msie&&$.browser.version==6){spotControlWidth+=20}}spotControl.css({width:spotControlWidth})}};this.closeLegalTooltip=function(){var $tooltipContent=$(".tooltip-content");$tooltipContent.fadeOut("fast")};this.showLegalTooltip=function(){var $tooltipContent=$(".tooltip-content");$tooltipContent.data("hover",false);$(".tooltip-legal").each(function(){var $this=$(this);var $parent=$this.parent();$(this).hover(function(){clearTimeout($(this).data("leave"));$(this).data("enter",setTimeout(function(){$this.addClass("tooltip-legal-hover");var $style=$parent.find(".tooltip-style");var $text=$parent.find(".tooltip-text");var top=$this.offset().top;var left=$this.offset().left;var style=eval("("+$style.val()+")");top=top+style.t;left=left+style.l;$tooltipContent.css({width:style.w,height:style.h,top:top,left:left,opacity:"0.8",filter:""});$tooltipContent.find(".content").html($text.val());$tooltipContent.fadeIn("fast")},100))},function(){clearTimeout($(this).data("enter"));$(this).data("leave",setTimeout(function(){if($tooltipContent.data("hover")){return}HN.Home.closeLegalTooltip()},500))})});$tooltipContent.hover(function(){$tooltipContent.data("hover",true)},function(){$tooltipContent.data("hover",false);HN.Home.closeLegalTooltip()})};this.toggleBannerSlideControls=function(content){var $parent=content.parent();var $sliderControl=$parent.find(".slider_controls");if($sliderControl.length>0){if(showBannerSlideControls){$sliderControl.show()}else{$sliderControl.hide()}}};this.initialBannerSlide=function(idx,content,navigateTo,stopSlide){navigateTo=navigateTo||function(){};stopSlideCallBack=stopSlide||function(){};if(inInitialRunning){if(allBannerAreLoaded){inInitialRunning=false;return true}else{return false}}else{inInitialRunning=true;allBannerAreLoaded=true;HN.Home.toggleBannerSlideControls(content);if(showBannerPaging){HN.Home.showBannerPaging(idx,content,navigateTo)}if(waitBannerLoaded){HN.Home.waitUntilAllBannerLoaded(content)}HN.Home.showLegalTooltip();if(allBannerAreLoaded){var $item=content.find(">*:eq("+idx+")");var bannerConfig=$('input[name="banner-config"]');if(bannerConfig.length>0){HN.Home.runHotSpotEffect($item,bannerConfig.val())}inInitialRunning=false;return true}else{var initialInterval=window.setInterval(function(){if(allBannerAreLoaded){window.clearInterval(initialInterval);var $item=content.find(">*:eq("+idx+")");var bannerConfig=$('input[name="banner-config"]',$item);if(bannerConfig.length>0){HN.Home.runHotSpotEffect($item,bannerConfig.val())}}},200)}return false}};this.initialToutSlide=function(idx,content,navigateTo,stopSlide){var $li=$("li",content);$li.each(function(){var $learn_more=$(this).find(".learn_more");if($learn_more.length>0){$learn_more.css({opacity:0})}});return true};this.beforeToutSlide=function(idxFrom,idxTo,dispItems,content){toutInSliding=true;var li=content.find(">*");for(var i=idxFrom;i<idxFrom+dispItems;i++){$(li[i]).find(".tout_content").css({height:"193px"});$(li[i]).find(".learn_more").css({opacity:0,display:"none"})}for(var i=idxTo;i<idxTo+dispItems;i++){$(li[i]).find(".tout_content").css({height:"193px"});$(li[i]).find(".learn_more").css({opacity:0,display:"none"})}};this.beforeBannerSlide=function(idxFrom,idxTo,dispItems,content){bannerInSliding=true;var $item=content.find(">*:eq("+idxFrom+")");var $nextItem=content.find(">*:eq("+idxTo+")");var currentIdx=HN.Home.extractId("-",$item.attr("id"));if(loopHotSpotEffect){var $content=$item.find("> div");var spots=$content.find("> div");spots.hide();$content=$nextItem.find("> div");spots=$content.find("> div");spots.hide()}if(loopHotSpotEffect){for(var i=0;i<queues.length;i++){if(jQuery.fxqueue(queues[i]).name!=undefined){jQuery.fxqueue(queues[i]).stop()}}for(var i=0;i<queues.length;i++){HN.Home.removeItemFromArray(queues[i],queues)}}if(showBannerPaging){var spotControl=$(".spot_slider_control");if(spotControl.length>0){var spots=spotControl.find(".spot");var activedSpot=$(spots[currentIdx]);if(activedSpot.length>0&&activedSpot.hasClass("actived")){activedSpot.removeClass("actived")}}}};this.afterBannerSlide=function(idx,content){var needRunEffect=false;var $item=content.find(">*:eq("+idx+")");var currentIdx=HN.Home.extractId("-",$item.attr("id"));if(showBannerPaging){var spotControl=$(".spot_slider_control");if(spotControl.length>0){var spots=spotControl.find(".spot");var activedSpot=$(spots[currentIdx]);if(activedSpot.length>0&&!activedSpot.hasClass("actived")){activedSpot.addClass("actived")}}}if(loopHotSpotEffect){needRunEffect=true}else{var div=$item.find("> div:eq(0)");if(div.css("display")=="none"){needRunEffect=true}}if(needRunEffect){var bannerConfig=$('input[name="banner-config"]',$item);if(bannerConfig.length>0){HN.Home.runHotSpotEffect($item,bannerConfig.val())}}bannerInSliding=false};this.afterToutSlide=function(idx,content){toutInSliding=false;if(lastToutInWaitingSlide!=null){HN.Home.onHoverTout("enterItem",lastToutInWaitingSlide);lastToutInWaitingSlide=true}};this.removeItemFromArray=function(removeItem,arr){arr=jQuery.grep(arr,function(value){return value!=removeItem});return arr};this.runHotSpotEffect=function(banner,configCls){var queueName="hotSpotQueue";var queue="global";if(bannerConfigs[configCls]==undefined){return}var hotspotsConfig=bannerConfigs[configCls]["hotspots"];for(var i=0;i<hotspotsConfig.length;i++){var hotspotConfig=hotspotsConfig[i];var $hotspot=$("."+hotspotConfig.cls,banner);queue="global";if(hotspotConfig.effectGroup!=undefined){queue=hotspotConfig.effectGroup}if($.inArray(queue,queues)==-1){queues.push(queue)}switch(hotspotConfig.effect){case"slideFade":$hotspot.css({left:hotspotConfig.startX,top:hotspotConfig.startY});$hotspot.animate({opacity:"toggle",left:hotspotConfig.endX,top:hotspotConfig.endY},{speed:hotspotConfig.speed,easing:"easeOutBounce",queue:queue,preDelay:hotspotConfig.nextPreDelay});break;case"fadeOut":$hotspot.css({left:hotspotConfig.endX,top:hotspotConfig.endY});$hotspot.fadeOut({speed:hotspotConfig.speed,queue:queue,preDelay:hotspotConfig.nextPreDelay});break;case"fadeIn":$hotspot.css({left:hotspotConfig.endX,top:hotspotConfig.endY});$hotspot.fadeIn({speed:hotspotConfig.speed,queue:queue,preDelay:hotspotConfig.nextPreDelay});break}}for(var i=0;i<queues.length;i++){if(jQuery.fxqueue(queues[i]).name!=undefined){jQuery.fxqueue(queues[i]).start()}}};this.printBannerConfigs=function(){console.log(bannerConfigs)};this.closeZipCodeDialog=function(){var $container=$("#homeBannerContainer");var dialogID="zipcodeDialog";var $dialog=$container.find("#"+dialogID);if($dialog.length>0){$dialog.hide()}};this.confirmZipcode=function(){var $container=$("#homeBannerContainer");var dialogID="zipcodeDialog";var $dialog=$container.find("#"+dialogID);if($dialog.length>0){var $zipInput=$('input[class="postal_code"]',$dialog);if(!IC.Validator.validate("postalCode.us.short",$zipInput.val())||!IC.Validator.validate("required",$zipInput.val())){return}var $vehicleInput=$('input[class="vehicle_model"]',$dialog);var params="";if($vehicleInput.val()!=""){params+="vehicle="+$vehicleInput.val()+"&"}params+="zipcode="+$zipInput.val();window.top.location="/financial-tools/special-offers.aspx?"+params}};this.findSpecialOffer=function(){var $container=$("#homeBannerSliderViewPort");var $zipInput=$('input[class*="postal_code"]',$container);if(!IC.Validator.validate("postalCode.us.short",$zipInput.val())||!IC.Validator.validate("required",$zipInput.val())){return}var params="zipcode="+$zipInput.val();window.top.location="/financial-tools/special-offers.aspx?"+params};this.addZipCodeValidator=function(){var $container=$("#homeBannerSliderViewPort");var defaultText=$("input.postal_code",$container).val();$("input.postal_code",$container).each(function(){if(HN.getPostalCode()){$(this).val(HN.getPostalCode());if(IC.Validator.validate("postalCode.us.short",$(this).val())&&IC.Validator.validate("required",$(this).val())){}}}).bind("keypress",function(e){var code=e.keyCode?e.keyCode:e.which;if(code!=8&&code!=46&&code!=35&&code!=36){if(!IC.Validator.validate("maxLength",$(this).val(),4)){e.preventDefault()}if(!IC.Validator.validate("numeric",String.fromCharCode(code))){e.preventDefault()}}}).bind("keyup",function(e){}).bind("focus",function(e){if($(this).val()==defaultText){$(this).val("")}stopSlideCallBack();$(this).addClass("input_focus")}).bind("blur",function(e){if($(this).val()==""){$(this).val(defaultText)}$(this).removeClass("input_focus")})};this.openZipCodeDialog=function(vehicleModel,offsetObjId){var $container=$("#homeBannerContainer");var dialogID="zipcodeDialog";var $dialog=$container.find("#"+dialogID);if($dialog.length==0){var dialogHtml="";dialogHtml+='<div id="zipcodeDialog" class="zipcodeDialog enter_zip_code" style="position:absolute;">';dialogHtml+='<a href="javascript:void(0)" class="close_button" onclick="javascript:HN.Home.closeZipCodeDialog();">X</a>';dialogHtml+='<p class="content">You can find special offers or rebates for your area</p>';dialogHtml+='<div class="error_summary" style="display: none;"><p></p></div>';dialogHtml+='<input type="hidden" value="" class="vehicle_model"/>';dialogHtml+='<label for="zip_code">ZIP CODE:</label><br /><input type="number" class="postal_code" value=""/>';dialogHtml+='<input type="button" value="GO" class="go_button" onclick="javascript:HN.Home.confirmZipcode();"><span class="zip_code_action_indicator"></span>';dialogHtml+="</div>";$dialog=$(dialogHtml);$container.append($dialog);$container.css({position:"relative"});var $go=$(".go_button",$dialog);$go.attr("disabled",true);$("input.postal_code",$dialog).each(function(){if(HN.getPostalCode()){$(this).val(HN.getPostalCode());if(IC.Validator.validate("postalCode.us.short",$(this).val())&&IC.Validator.validate("required",$(this).val())){$go.attr("disabled",false)}}}).bind("keypress",function(e){var code=e.keyCode?e.keyCode:e.which;if(code!=8&&code!=46&&code!=35&&code!=36){if(!IC.Validator.validate("maxLength",$(this).val(),4)){e.preventDefault()}if(!IC.Validator.validate("numeric",String.fromCharCode(code))){e.preventDefault()}}}).bind("keyup",function(e){if(IC.Validator.validate("postalCode.us.short",$(this).val())&&IC.Validator.validate("required",$(this).val())){$go.attr("disabled",false)}else{$go.attr("disabled",true)}})}if($("#"+offsetObjId,$container).length>0){var offset=$("#"+offsetObjId,$container).offset();var dlgLeft=offset.left-$dialog.width()-10;var dlgTop=offset.top-($dialog.height()/2);$dialog.css({position:"absolute",top:dlgTop+"px",left:dlgLeft+"px"})}else{$dialog.css({position:"absolute",top:"20%",left:"42%"})}$('input[class="vehicle_model"]',$dialog).val(vehicleModel);$dialog.show()}};$(document).ready(function(){HN.Home.addZipCodeValidator()});HN.Omniture=new function(){var b=this;var f={};var a=[];var d=500;var e=null;var c=/\{([^\}]*)\}/g;this.wrapFunction=function(h,g,i){return function(){h.apply(g,i)}};this.setOmnitureData=function(h,g){f[h]=g};this.stripDelimiters=function(g){return g.substring(1,g.length-1)};this.parseStringTemplate=function(j,l){var k=j.match(c);var h;if(k){for(var g=0;g<k.length;g++){h=HN.Omniture.stripDelimiters(k[g]);j=j.replace(k[g],l[h]||"")}}return j};this.setQueueInterval=function(){e=window.setInterval(function(){window.clearInterval(e);e=null;if(a.length>0){(a.shift())()}if(a.length>0){HN.Omniture.setQueueInterval()}},d)};this.track=function(l,h,g,j){var i=HN.Omniture.wrapFunction(HN.Omniture.go,b,[l,h,"track"]);a.push(i);if(g!=undefined){var k=HN.Omniture.wrapFunction(HN.Omniture.redirect,b,[g,j]);a.push(k)}if(!e){HN.Omniture.setQueueInterval()}};this.trackLink=function(l,h,g,j){var i=HN.Omniture.wrapFunction(HN.Omniture.go,b,[l,h,"trackLink"]);a.push(i);if(g!=undefined){var k=HN.Omniture.wrapFunction(HN.Omniture.redirect,b,[g,j]);a.push(k)}if(!e){HN.Omniture.setQueueInterval()}};this.redirect=function(g,h){window.setTimeout(function(){if(h!=""){window.open(g,h)}else{window.location.href=g}},d)};this.go=function(l,h,i){var k=HN.Omniture.createProps(l,h);for(var g in k){var j=k[g];if(j!=""){s[g]=j}else{s[g]=null}}if(k.events==null||k.events==undefined){s.events=null}if(k.linkTrackEvents==null||k.linkTrackEvents==undefined){s.linkTrackEvents=null}if(k.products==null||k.products==undefined){s.products=null}if(k.linkTrackVars==null||k.linkTrackVars==undefined){s.linkTrackVars=null}if(k.pageName==null||k.pageName==undefined){s.pageName=null}if(k.channel==null||k.channel==undefined){s.channel=null}if(i=="track"){if(typeof(s.t)=="function"){s.t()}}else{if(typeof(s.tl)=="function"){s.tl(this,"o",s.pageName)}}};this.createProps=function(q,j){var n=f[q];var m={};m.pageName=n.pageName?n.pageName:"";m.channel=n.channel?n.channel:"";m.pageURL=n.pageURL?n.pageURL:"";m.events=n.events?n.events:"";m.products=n.products?n.products:"";for(var h=1;h<=50;h++){m["prop"+h]=null;m["eVar"+h]=null}if(n.props){for(var l in n.props){m[l]=n.props[l]}}if(n.eVars){for(var k in n.eVars){m[k]=n.eVars[k]}}m.linkTrackVars=n.linkTrackVars?n.linkTrackVars:"";m.linkTrackEvents=n.linkTrackEvents?n.linkTrackEvents:"";if(j){for(var g in m){if(m[g]!=null){m[g]=HN.Omniture.parseStringTemplate(m[g],j)}}}return m}};

}
/*
     FILE ARCHIVED ON 05:43:16 Jul 07, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:38:17 Oct 08, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.643
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.01
  esindex: 0.012
  cdx.remote: 9.303
  LoadShardBlock: 51.838 (3)
  PetaboxLoader3.datanode: 59.914 (4)
  load_resource: 45.229
  PetaboxLoader3.resolve: 34.832
*/