(function () {
    function setCookie(c_name,value,expiredays){var exdate=new Date();var domain_parts=window.location.host.split('.');var len=domain_parts.length;var domain='';if(len>=2){domain='.'+domain_parts[len-2]+'.'+domain_parts[len-1];}else{domain='.mugeda.com';}exdate.setDate(exdate.getDate()+expiredays);document.cookie=c_name+"="+escape(value)+((expiredays==null)?"":";expires="+exdate.toGMTString())+"; domain="+domain+";path=/";}
    if (/vt=(\w+)\&?/.test(location.search)) {
        var versionTag = RegExp.$1;
        setCookie('__mugeda_vid',versionTag,60*60*24*3600);
    } else {
        setCookie('__mugeda_vid','',-3600);
    }
    window['Mugeda'] = window['Mugeda'] || {};
    window['Mugeda']['data'] = window['Mugeda']['data'] || {};

    var stageDom = document.getElementById((window._mrmcp || {})['script_id'] || "Mugeda_5a28db30347a1966a369a568")

    _mrmcp = (typeof _mrmcp == 'undefined') ? {} : _mrmcp;
_mrmcp['campaign_id'] = 'none';
_mrmcp['owner_id'] = '5a28b0b0347a190b7f5a7958';
_mrmcp['creative_id'] = '5a28db30347a1966a369a568';
_mrmcp['ga_url'] = _mrmcp['ga_url'] || (('https:' == document.location.protocol ? 'https://' : 'http://') + 'card.mugeda.com/weixin/card/ga.js');
_mrmcp['width'] = _mrmcp['width'] || 320;
_mrmcp['height'] = _mrmcp['height'] || 520;
_mrmcp['type'] = 'smart';
_mrmcp['title'] = '丰联资讯 祝您圣诞快乐';
_mrmcp['track_bot'] = 'http://cdn.mugeda.com/media/pages/track/track_20131030.html';
var version = _mrmcp['version'] = _mrmcp['version'] != null ? _mrmcp['version'] : '_0.11.47';
var w = _mrmcp['width'];
var h = _mrmcp['height'];
if (!_mrmcp['creative_path']) {
    var scripts = document.getElementsByTagName('script');
    var src = scripts[scripts.length - 1].getAttribute('src');
    if (src == null || src.lastIndexOf('/') < 0) {
        var href = location.protocol +'//' + location.host + location.pathname;
        _mrmcp['creative_path'] = href.substr(0, href.lastIndexOf('/') + 1);
    }
    else
        _mrmcp['creative_path'] = src.substr(0, idx + 1);
}

if (_mrmcp['host']){
    var pathNames = ['creative_path', 'common_path'];
    for (var i = 0, l = pathNames.length; i < l; i ++) {
        var pathName = pathNames[i];

        if (_mrmcp[pathName]) {
            var pathOriStr = _mrmcp[pathName];
            var pattern = /^(?:(\w+):\/\/)?(?:(\w+):?(\w+)?@)?([^:\/\?#]+)(?::(\d+))?(\/[^\?#]+)?(?:\?([^#]+))?(?:#(\w+))?/;
            var r = pattern.exec(pathOriStr);

            _mrmcp[pathName] = [];
            for (var j = 0, k = _mrmcp['host'].length; j < k; j ++) {
                var host = _mrmcp['host'][j];
                var s = '';
                //if(r[1]) s += r[1] + ':'; //http
                //s += '//';
                //if(r[2]) s += r[2] + ':'; //username
                //if(r[3]) s += r[3] + '@'; //password
                s += host; //host
                if (r[6]) s += r[6];
                if (r[7]) s += '?' + r[7];
                if (r[8]) s += '#' + r[8];
                _mrmcp[pathName].push(s);
            }
        }
    }
}

    "bar-start";
window.Mugeda = window.Mugeda || { data: {}};
window.Mugeda.loadProcessHandle = window.Mugeda.loadProcessHandle || {};
Mugeda.isMobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);

Mugeda.loadProcessHandle.bar = function (opt) {
    opt = opt || {};
    var loadInfo = opt.loadInfo;
    var thisAni = opt.thisAni;

    this.type = 'bar';
    this.dom = opt.stageDom || thisAni.dom;
    loadInfo.backgroundImage = loadInfo.backgroundImage || ''//'http://ww3.sinaimg.cn/large/6efa645cjw1emifo2gt0dj21kw11x4la.jpg';
    loadInfo.backgroundColor = loadInfo.backgroundColor || 'black'//'yellow';
    loadInfo.logoImage = loadInfo.logoImage || ''//'http://ww3.sinaimg.cn/large/6efa645cjw1emifo2gt0dj21kw11x4la.jpg';
    loadInfo.progressColor = loadInfo.progressColor || '#d60';
    loadInfo.progressBackground = loadInfo.progressBackground || '#fff';
    loadInfo.progressPosition = loadInfo.progressPosition || '20';
    loadInfo.messageText = loadInfo.messageText || '';
    loadInfo.messageColor = loadInfo.messageColor || '#fff';
    loadInfo.messageSize = loadInfo.messageSize || 12;
    loadInfo.textLoading = parseInt(loadInfo.textLoading) || 0;
    loadInfo.logoWidth = Math.round(((loadInfo.logoWidth || 124) / (opt.thisAni.width / this.dom.parentNode.offsetWidth) * 100)) / 100;
    this.loadInfo = loadInfo;
};


Mugeda.loadProcessHandle.bar.prototype.init = function (stage, pos) {
    if (this.inited) return;
    this.inited = true;
    var ln = this.loadInfo;
    var backStr = ln.backgroundColor;
    if (ln.backgroundImage) {
        backStr += " url('" + ln.backgroundImage + "') center center";
    }

    var text = ln.messageText;
    if (ln.textLoading) {
        text += ' <span class="mugeda_point1">.</span><span class="mugeda_point2">.</span><span class="mugeda_point3">.</span>';
    }

    if(pos == null){
        pos = ['top:0;left:0;width:100%;height:100%;'];
    }

    var html = '<div style="' + pos[0] + 'z-index:20;position:absolute;background:' + backStr + ';background-repeat:no-repeat;background-size:' + (Mugeda.isMobile ? 'cover' : 'contain')+';">' +
                    '<div style="position:absolute;top:' + ln.progressPosition + '%;width:100%">';
    if (ln.logoImage) {
        html += '<div style="text-align:center;"><img width="' + ln.logoWidth + '" src="' + ln.logoImage + '"/></div>';
    }
    html += '<div style="width:85px;height:2px;border-radius:3px;margin:12px auto;background:' + ln.progressBackground + ';"><div class="process_mugeda" style="width:0;height:100%; background:' + ln.progressColor + ';"></div></div>'
    html += '<div style="text-align:center;padding: 6px;color:' + ln.messageColor + ';font-family:\'Microsoft YaHei\' SimHei Arial; font-size:' + ln.messageSize + 'px;">' + text + '</div>'
    html += '<div>';
    var dom = document.createElement('div');
    dom.innerHTML = html;
    this.node = dom.childNodes[0];
    this.dom.parentNode.appendChild(this.node);
    this.prevPercent = 0;

    if (ln.textLoading) {
        var num = 0;
        var that = this;
        var p0 = this.node.querySelectorAll('.mugeda_point1')[0];
        var p1 = this.node.querySelectorAll('.mugeda_point2')[0];
        var p2 = this.node.querySelectorAll('.mugeda_point3')[0];
        var setPoint = function () {
            p0.style.visibility = num > 0 ? 'visible' : 'hidden';
            p1.style.visibility = num > 1 ? 'visible' : 'hidden';
            p2.style.visibility = num > 2 ? 'visible' : 'hidden';
            num++;
            if (num == 4) num = 0;
            if (!that.isOver) setTimeout(setPoint, 1000);
        }

        setPoint();
    }

};
Mugeda.loadProcessHandle.bar.prototype.update = function (num, all, opt) {
    
    opt = opt || {};
    
    var isTotal = opt.isTotal;
    if (!this.secArr) {
        var percent = 25 * num / all;
        if (num === all) {
            this.secArr = true;
        }
    }
    else {
        percent = 25 + 75 * num / all;
        if (num === all) {
            delete this.secArr;
        }
    }

    if (isTotal) percent = Math.floor(num / all * 100);

    if (percent > this.prevPercent) {
        this.node.querySelectorAll('.process_mugeda')[0].style.width = Math.min(100, percent) + '%';
        this.prevPercent = percent;
    }

};
Mugeda.loadProcessHandle.bar.prototype.remove = function () {
    //return;
    var self = this;
    setTimeout(function(){
       self.isOver = true;
       self.prevPercent = 0;
       self.node.parentNode.removeChild(self.node);  
    }, 0)
};
window.lineSplit = "bar-end";

var loadProcessHandleInstance = Mugeda['loadProcessHandleInstance'] = new Mugeda['loadProcessHandle']['bar']({
    'loadInfo': JSON.parse("{\"textLoading\":\"1\",\"messageText\":\"載入中\",\"messageSize\":\"12\",\"messageColor\":\"rgba(71, 102, 115, 1)\",\"progressColor\":\"rgba(218, 57, 3, 1)\",\"progressBackground\":\"#FFF\",\"backgroundColor\":\"#000\",\"backgroundImage\":\"5a333c3e347a196e8077c472.png\",\"logoImage\":\"5a333c3e347a196ea550aec9.png\",\"progressPosition\":\"20\",\"logoWidth\":\"200\",\"style\":\"bar\"}"),
    'thisAni': {
        'dom': null,
        'width': 320
    },
    'stageDom': stageDom
});

if(['auto', 'landscape', 'portrait'].indexOf("portrait") == -1) {
    loadProcessHandleInstance.init();
    var loadInitNum = 0;
    var loadInterval = setInterval(function () {
        loadProcessHandleInstance.update(loadInitNum, 100, {isTotal: true});
        if (++loadInitNum > 10) clearInterval(loadInterval);
    }, 100);
}

    //window['Mugeda']['Loader'] = function (a, b, d, e, f, g) {
window['Mugeda']['Loader'] = function (dom, hasScript, _mrmcp) {
    var that = this;
    that._mrmcp = _mrmcp;
    that.crid = _mrmcp['creative_id'];
    that.dom = dom;
    that.resDir = _mrmcp['creative_path'] || "";
    that.playerLoc = _mrmcp['common_path'] || that.resDir;

    var isArray = function(o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    };

    var getServerIndex = function(str, total){
        var len = str.length, sum = 0;
        for(var i = 0; i < len && i < 6; i++){
            sum += str.charCodeAt(len - i);
        }
        return sum & total;
    };

    if(!isArray(that.resDir)) that.resDir = [that.resDir];
    if(!isArray(that.playerLoc)) that.playerLoc = [that.playerLoc];


    var cachedLoadList = [];
    var setTimeHandle = null;
    var finalCallback = null;
    var loadRes = function(type, file, deps, index){
        if(type == 0){
            var pathList = that.playerLoc;
        }
        else{
            pathList = that.resDir;
        }
        file = file == 'mugeda_smart_renderer_core' + version + '.js'  ?   'mugeda_smart_renderer' + version + '.js' : file;
        var path = pathList[getServerIndex(file, pathList.length)];
        var filePath = path + file;

        cachedLoadList[index == null ? cachedLoadList.length: index] = {file: filePath, deps: deps, loaded: 0};

        if(!setTimeHandle){
            setTimeHandle = setTimeout(function(){
                setTimeHandle = null;
                var loadNextGroup = function(){
                    var notLoadedList = cachedLoadList.filter(function(item){return item.loaded < 2});
                    if(notLoadedList.length == 0) {
                        finalCallback()
                    }
                    else{
                        notLoadedList.forEach(function(item){
                            if(item.loaded != 0) return;
                            if(item.deps.some(function(depIndex){
                                return cachedLoadList[depIndex].loaded < 2;
                            })){
                                return;
                            }
                            var sc = document.createElement('script');
                            sc.src = item.file;
                            item.loaded = 1;
                            sc.onload = function(){
                                item.loaded = 2;
                                loadNextGroup();
                            };
                            sc.onerror = function(){
                                item.loaded = 3;
                                console.log('err ' + item.file);
                                loadNextGroup();
                            };
                            document.getElementsByTagName("head")[0].appendChild(sc);
                        });
                    }
                };
                loadNextGroup();
            }, 0);
        }

    };


    if(!Mugeda['css3PlayerLoaded']) {
        
            loadRes(0, "mugeda_smart_renderer_core" + version + ".js", [], 0);
        
        loadRes(0, "mugeda_utils" + version + ".js", [0]);
        loadRes(1, that.crid + ".js?publishTime=1513761041024", []);
        finalCallback = that.start.bind(that);
    }
};
Mugeda.Loader.prototype.start = function () {
    if (2 == Mugeda.css3PlayerLoaded) {
        var a = document.createElement("div");
        var node = this.dom;
        while (node) {
            if (node.tagName && node.tagName.toLowerCase() == 'body'){
                break;
            }
            else {
                node = node.parentNode;
            }
        }
        if (node) {
            this.dom.parentNode.insertBefore(a, this.dom);
        }
        else if (document.body) {
            var track = document.getElementById('mugeda_track');
            track.parentNode.appendChild(a);
        }
        if (_mrmcp['width'] != null) {
            Mugeda.data['id_' + this.crid].wt = _mrmcp['width'];
            Mugeda.data['id_' + this.crid].ht = _mrmcp['height'];
        }
        Mugeda['startAnimation']("id_" + this.crid, false ? "actions_" + this.crid + ".js?publishTime=1513761041024" : "", a, this.resDir, this.name, null, this._mrmcp)
    }
    else {
        Mugeda.creationToBeLoad = Mugeda.creationToBeLoad || [];
        Mugeda.creationToBeLoad.push(this)
    }
};



    var loader = new Mugeda.Loader(stageDom, false, window._mrmcp || {});
    loader.loadProcessHandleInstance = loadProcessHandleInstance;

    var track_pixel = "";
    var pixels = _mrmcp['additional_pixels']||[];
    if(_mrmcp['impression_pixel']) pixels.push(_mrmcp['impression_pixel']);
    for(var pIndex = 0; pIndex < pixels.length; pIndex++) {
        var pixel = pixels[pIndex];
        var valid = pixel.indexOf('%TRACKURL%') < 0;
        if(valid){
            var parTag = pixel.indexOf('?') < 0 ? '?' : '&';
            pixel += parTag + "ts=" + (new Date()).getTime();
            var search = window.location.search;
            if (search){
                var params = search.split('?')[1];
                pixel += "&" + params;
            }
            track_pixel += "<img id='external_impression_tracker' style='display:none' src='"+pixel+"' />";
        }
    }

    
    var trackString = "\n<div id=\'mugeda_track\'>\n<script>\nvar _mrmma_campid = \'none\';\nvar _mrmma_urid = \'5a28b0b0347a190b7f5a7958\';\nvar _mrmma_crid = \'5a28db30347a1966a369a568\';\nvar _mrmma_title = \'丰联资讯 祝您圣诞快乐\';\nvar _mrmma_circle = \'mugeda\';\nvar _mrmma_width = \"320\";\nvar _mrmma_height = \"520\";\nvar _mrmma_type = \'smart\';\nvar title = \'丰联资讯 祝您圣诞快乐\';\ntitle = title.substr(0, Math.min(title.length, 32));\nvar _mrmma_var1 = \'campid=none&urid=5a28b0b0347a190b7f5a7958&crid=5a28db30347a1966a369a568\';\nvar _mrmma_var2 = \'circle=mugeda&type=smart&width=320&height=520&display=normal&title=\' + title;\nvar isLocal = !window.location || !window.location.host;\n<\/script>\n\n\n<script type=\'text\/javascript\'>\nvar ua = (function () {\nvar replacer = { \'Linux\': \'$L\', \'Windows\\\\s*Phone\': \'$W\', \'Windows\\\\s*NT\': \'$N\', \'Mac\\\\s*OS\': \'$O\', \'Android\': \'$A\', \'Mozilla\': \'$M\', \'Gecko\': \'$G\', \'Trident\': \'$T\', \'AppleWebKit\': \'$K\', \'Chrome\': \'$C\', \'Safari\': \'$S\', \'KHTML\': \'$H\', \'Version\': \'$V\', \'iPhone\': \'$I\', \'Mobile\': \'$B\', \'Build\': \'$b\', \'like\': \'$l\', \'MicroMessenger\': \'$g\', \'MugedaCard\': \'$m\', \';\\\\s+\': \';\', \',\\\\s+\': \',\', \'\\\\s+\\\\(\': \'(\', \'\\\\)\\\\s+\': \')\', \'\\\\s+\\\\[\': \'[\', \'\\\\]\\\\s+\': \']\', \'\\\\s*(\\\\$\\\\w+)\\\\s*\': \'$1\' };\nvar s = navigator.userAgent;\nfor (r in replacer) {\ns = s.replace(new RegExp(r, \'ig\'), replacer[r]);\n}\nreturn s;\n})();\nfunction getClientName() {\nvar ua = navigator.userAgent.toLowerCase();\nif (\/MicroMessenger\/i.test(ua)) return \'weixin\';\nelse if (window.mucard != null) return \'AppVer1\';\nelse if (ua.indexOf(\'mugedacard\') >= 0) return \'AppVer2\';\nelse return \'other\';\n}\nvar _gaq = _gaq || [];\nif(isLocal){\nvar track_url = \'http:\/\/cdn.mugeda.com\/media\/pages\/track\/track_20131030.html\' + \'?\' + _mrmma_var1 + \'&\' + _mrmma_var2;\nvar tracker = document.createElement(\'iframe\');\ntracker.id = \'5a28db30347a1966a369a568\';\ntracker.src = track_url;\ntracker.style.display = \'none\';\ntracker.style.width = \'1px\';\ntracker.style.height = \'1px\';\nvar s = document.body.appendChild(tracker);\n}else{\n_gaq.push([\'_setAccount\', \'UA-38551434-1\']);\n_gaq.push([\'_setCustomVar\', 1, \'Identity Tags\', (typeof _mrmma_var1 == \'undefined\') ? \'none\' : _mrmma_var1]);\n_gaq.push([\'_setCustomVar\', 2, \'Property Tags\', (typeof _mrmma_var2 == \'undefined\') ? \'none\' : _mrmma_var2]);\n_gaq.push([\'_setCustomVar\', 3, \'Client\', getClientName()]);\n_gaq.push([\'_setCustomVar\', 4, \'User Agent\', ua]);\n_gaq.push([\'_trackPageview\']);\n(function() {\nvar ga = document.createElement(\'script\');\nga.type = \'text\/javascript\';\nga.async = true;\nga.src = _mrmcp[\'ga_url\'];\nvar s = document.getElementsByTagName(\'script\')[0];\ns.parentNode.insertBefore(ga, s);\n})();\n}\n<\/script>\n\n<\/div>\n" + track_pixel;
    if (document.readyState == 'complete' || document.readyState == 'interactive') {
        var div = document.createElement('div');
        div.innerHTML = trackString;
        loader.dom.parentNode.appendChild(div);
        var scripts = div.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            if (scripts[i].src !== '') {
                script.src = scripts[i].src;
            } else {
                script.text = scripts[i].text;
            }
            scripts[i].parentNode.removeChild(scripts[i]);
            i--;
            loader.dom.parentNode.appendChild(script);
        }
    }
    else {
        document.write(trackString);
    }
    if(_mrmcp['render_mode']!='embedded'&&_mrmcp['render_mode']!='inline'){
        document.body.style.margin='0px';
        document.body.style.padding='0px';
        document.body.style.overflow='hidden';
        document.body.style.backgroundColor='rgba(238, 238, 238, 1)';
    }
})();
