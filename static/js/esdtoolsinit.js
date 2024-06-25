var EsdToolbarInit={};

EsdToolbarInit.path = "https://www.yunmd.net/toolbar/allToolvarV5/";
EsdToolbarInit.toolbarOpenStatus = null;

EsdToolbarInit.loadScript = function(func){
	var esd_jquery_js = document.createElement('script'); 
	esd_jquery_js.setAttribute('type', 'text/javascript'); 
	esd_jquery_js.setAttribute('src', EsdToolbarInit.path+'jquery.js'); 
	esd_jquery_js.setAttribute('charset', 'utf-8'); 
	esd_jquery_js.onload = function(){
		var esd_base64_js = document.createElement('script'); 
		esd_base64_js.setAttribute('type', 'text/javascript'); 
		esd_base64_js.setAttribute('src', EsdToolbarInit.path+'base64.js'); 
		esd_base64_js.setAttribute('charset', 'utf-8'); 
		esd_base64_js.onload = function(){
			var esd_soundmanager2_js = document.createElement('script'); 
			esd_soundmanager2_js.setAttribute('type', 'text/javascript'); 
			esd_soundmanager2_js.setAttribute('src', EsdToolbarInit.path+'soundmanager2.js'); 
			esd_soundmanager2_js.setAttribute('charset', 'utf-8'); 
			esd_soundmanager2_js.onload = function(){
				var esd_pinyin_js = document.createElement('script'); 
				esd_pinyin_js.setAttribute('type', 'text/javascript'); 
				esd_pinyin_js.setAttribute('src', EsdToolbarInit.path+'pinyin.js'); 
				esd_pinyin_js.setAttribute('charset', 'utf-8'); 
				esd_pinyin_js.onload = function(){
					var esd_handleInnerIframe_js = document.createElement('script'); 
					esd_handleInnerIframe_js.setAttribute('type', 'text/javascript'); 
					esd_handleInnerIframe_js.setAttribute('src', EsdToolbarInit.path+'handleInnerIframe.js'); 
					esd_handleInnerIframe_js.setAttribute('charset', 'utf-8'); 
					esd_handleInnerIframe_js.onload = function(){
						var esd_toolbar_js = document.createElement('script'); 
						esd_toolbar_js.setAttribute('type', 'text/javascript'); 
						esd_toolbar_js.setAttribute('src', EsdToolbarInit.path+'toolbar.js'); 
						esd_toolbar_js.setAttribute('charset', 'utf-8'); 
						esd_toolbar_js.setAttribute('id', 'ESDWebAppToolbar'); 
						document.head.appendChild(esd_toolbar_js);
						esd_toolbar_js.onload = function(){
							if(func!=null){
								func();
							}
						};
					};	
					document.head.appendChild(esd_handleInnerIframe_js);	
				};
				document.head.appendChild(esd_pinyin_js);	
			};
			document.head.appendChild(esd_soundmanager2_js);	
		};	
		document.head.appendChild(esd_base64_js);
	};	
	document.head.appendChild(esd_jquery_js);
};

EsdToolbarInit.getCookie = function(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') 
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) 
            return c.substring(nameEQ.length, c.length);
    }
    return null;
};
EsdToolbarInit.setCookie = function(name, value, days){
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
};

EsdToolbarInit.init = function(){
	EsdToolbarInit.toolbarOpenStatus = EsdToolbarInit.getCookie("wzaIsOn");
	if(EsdToolbarInit.toolbarOpenStatus=="true"||EsdToolbarInit.toolbarOpenStatus==true){
		EsdToolbarInit.loadScript(null);
	}else{
		$(document).on("click","#toolbarSwitch",function(){
			EsdToolbarInit.loadScript(null);
			EsdToolbarInit.setCookie("wzaIsOn", "true", 10);
			$(this).off("click");
		});
		$(document).on("keydown","#toolbarSwitch",function(e){
			if (e.keyCode == 13) {
				EsdToolbarInit.setCookie("wzaIsOn", "true", 10);
				EsdToolbarInit.setCookie("readScreen", true, 10);
				EsdToolbarInit.setCookie("speakVolume", 0, 10);
				EsdToolbarInit.loadScript(function(){
					EsdToolbar.readScreen.init();
					jq_t("#toolbar").hide();
					jq_t("#toolbarHtml").show("fast",function(){
						jq_t("#toolbarPage2").show();
						if(EsdToolbar.statusmagnifier == "on"){
							EsdToolbar.magnifier.toolbarMagnifier();
						}
					});
					jq_t("body").css("padding-top", "98px");
					EsdToolbar.rebuild();
					EsdToolbar.isOpen = true;
				});
				$(this).off("keydown");
				return false;
			}
		});
	}
}
EsdToolbarInit.init();




