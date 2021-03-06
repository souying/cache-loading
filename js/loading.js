/*--------------------------------------------------------------------
 *JAVASCRIPT "Loading.js"
 *Version:    1.0.0 - 2017-08-25
 *author:     GU jianwen
 *website:    
 *Licensed 
-----------------------------------------------------------------------*/


;(function(undefined) {
        "use strict"
        var _global;
        // 工具函数
        // 对象合并函数
        function extend(o,n,override) {   //这个会将参数内容合并这个懂的吧 恩 
            for(var key in n){
                if(n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)){
                    o[key]=n[key];
                }
            }
            return o;     
        };
         // 插件构造函数 - 返回数组结构
        function Loading(opt){
            // console.log(this.init)
            this.init(opt);
        };
           //以后内部变量统一前面加 _例如def这个只有内部的变量  ,
        Loading.prototype = {
            constructor: this,
            init:function(opt){
                // 默认参数
                var settings = {
                    elem:'#loading',
                    timeToHideAble:true, // Should check the time to hide
                    timeToHide:800, // Default Time to hide fakeLoader
                    pos:'fixed',// Default Position
                    top:'0px',  // Default Top value
                    left:'0px', // Default Left value
                    width:'100%', // Default width 
                    height:'100%', // Default Height
                    zIndex: '999',  // Default zIndex 
                    bgColor: '#52d3d4', // Default background color
                    spinner:'spinner1', // Default Spinner
                    imagePath:'' // Default Path custom image
                };
                this.settings = extend(settings,opt,true);
                // console.log(this.settings)
                var timeToHideAble = this.settings.timeToHideAble;
                // console.log(timeToHideAble);

                //Customized Spinners
                var Loading1 = '<div class="fl Loading1 Loading"><div></div><div></div><div></div></div>';
                var Loading2 = '<div class="fl Loading2 Loading"><div></div></div>';
                var Loading3 = '<div class="fl Loading3 Loading"><div></div></div>';
                var Loading4 = '<div class="fl Loading4 Loading"><div></div></div>';
                var Loading5 = '<div class="fl Loading5 Loading"><div class="Loading-five"><div></div><div></div><div></div></div></div>';
                var Loading6 = '<div class="fl Loading6 Loading"><div class="Loading-six"><div></div><div></div><div></div></div></div>';
                var Loading7 = '<div class="fl Loading7 Loading"><div class="Loading-seven"><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';
                var Loading8 = '<div class="fl Loading8 Loading"><div class="Loading-eight"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';
                var Loading9 = '<div class="fl Loading9 Loading"><div class="Loading-nine"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';
                var Loading10 = '<div class="fl Loading10 Loading"><div class="Loading-ten"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';
                var Loading11 = '<div class="fl Loading11 Loading"><div></div></div>';
                var Loading12 = '<div class="fl Loading12 Loading"><div class="Loading-12"><div></div><div></div><div></div></div></div>';
                var Loading13 = '<div class="fl Loading13 Loading"><div class="Loading-13"><div></div><div></div><div></div><div></div><div></div></div></div>';
                var Loading14 = '<div class="fl Loading14 Loading"><div class="Loading-14"><div></div><div></div></div></div>';
                var Loading15 = '<div class="fl Loading15 Loading"><div class="Loading-15"><div></div><div></div></div></div>';
                var Loading16 = '<div class="fl Loading16 Loading"><div class="Loading-16"><div></div><div></div></div></div>';
                var Loading17 = '<div class="fl Loading17 Loading"><div class="Loading-17"><div></div><div></div><div></div></div></div>';
                var Loading18 = '<div class="fl Loading18 Loading"><div class="Loading-18"><div></div><div></div><div></div></div></div>';
                var Loading19 = '<div class="fl Loading19 Loading"><div class="Loading-19"><div></div><div></div><div></div></div></div>';
                var Loading20 = '<div class="fl Loading20 Loading"><div class="Loading-20"><div></div><div></div><div></div></div></div>';
                var Loading21 = '<div class="fl Loading21 Loading"><div class="Loading-21"><div></div><div></div><div></div><div></div><div></div></div></div>';
                var Loading22 = '<div class="fl Loading22 Loading"><div class="Loading-22"><div></div><div></div><div></div><div></div><div></div></div></div>';
                var Loading23 = '<div class="fl Loading23 Loading"><div class="Loading-23"><div></div><div></div><div></div><div></div><div></div></div></div>';
                var Loading24 = '<div class="fl Loading24 Loading"><div class="Loading-24"><div></div><div></div><div></div><div></div><div></div></div></div>';
                var Loading25 = '<div class="fl Loading25 Loading"><div class="Loading-25"><div></div><div></div><div></div><div></div></div></div>';
                var Loading26 = '<div class="fl Loading26 Loading"><div class="Loading-26"><div></div></div></div>';
                var Loading27 = '<div class="fl Loading27 Loading"><div class="Loading-27"><div></div></div></div>';
                var Loading28 = '<div class="fl Loading28 Loading"><div class="Loading-28"><div></div><div></div><div></div><div></div><div></div></div></div>';
                var Loading29 = '<div class="fl Loading29 Loading"><div class="Loading-29"><div></div><div></div><div></div></div></div>';
                var Loading30 = '<div class="fl Loading30 Loading"><div class="Loading-30"><div></div><div></div></div></div>';
                var Loading31 = '<div class="fl Loading31 Loading"><div class="Loading-31"><div></div><div></div></div></div>';
                var Loading32 = '<div class="fl Loading32 Loading"><div class="Loading-32"><div></div><div></div></div></div>';
                var Loading33 = '<div class="fl Loading33 Loading"><div class="Loading-33"><div></div></div></div>';
                var Loading34 = '<div class="fl Loading34 Loading"><div class="Loading-34"><div></div></div></div>';
                var Loading35 = '<div class="fl Loading35 Loading"><div class="Loading-35"><div></div></div></div>';
                var Loading36 = '<div class="fl Loading36 Loading"><div class="Loading-36"><div></div></div></div>';
                var Loading37 = '<div class="fl Loading37 Loading"><div class="Loading-37"><div></div><div></div></div></div>';
                var Loading38 = '<div class="fl Loading38 Loading"><div class="Loading-38"><div></div></div></div>';
                var Loading39 = '<div class="fl Loading39 Loading"><div class="Loading-39"><span></span><span></span><span></span><span></span><span></span></div></div>';
                var Loading40 = '<div class="fl Loading40 Loading"><div class="Loading-40"><div></div><div></div><div></div><div></div></div></div>';
                var Loading41 = '<div class="fl Loading41"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
                var Loading42 = '<div class="fl Loading42"><div class="Loading-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="Loading-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="Loading-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
                var Loading43 = '<div class="fl Loading43"><div class="dot1"></div><div class="dot2"></div></div>';
                var Loading44 = '<div class="fl Loading44"></div>'; 
                var Loading45 = '<div class="fl Loading45"><div class="cube1"></div><div class="cube2"></div></div>'; 
                var Loading46 = '<div class="fl Loading46"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'; 
                var Loading47 = '<div class="fl Loading47"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'; 
                var Loading48 = '<div class="fl Loading48"><div class="sk-Loading sk-Loading-three-bounce"><div class="sk-bounce1"></div><div class="sk-bounce2"></div><div class="sk-bounce3"></div></div></div>';
                // end
                var el = document.querySelector(this.settings.elem);
                // console.log(el)
                el.style.position = this.settings.pos;
                el.style.width = this.settings.width;
                el.style.height = this.settings.height;
                el.style.top = this.settings.top;
                el.style.left = this.settings.left;
                // end
                    var a = this.settings.spinner;
                    // console.log(a)
                        switch (a) {
                            case 'Loading1':
                                    el.innerHTML= Loading1;
                                break;
                            case 'Loading2':
                                    el.innerHTML= Loading2;
                                break;
                            case 'Loading3':
                                    el.innerHTML = Loading3;
                                break;
                            case 'Loading4':
                                    el.innerHTML = Loading4;
                                   break;
                            case 'Loading5':
                                    el.innerHTML = Loading5;
                                   break;
                            case 'Loading6':
                                    el.innerHTML = Loading6;
                                   break;
                            case 'Loading7':
                                    el.innerHTML = Loading7;
                                   break;
                            case 'Loading8':
                                    el.innerHTML = Loading8;
                                   break;
                            case 'Loading9':
                                    el.innerHTML = Loading9;
                                   break;
                            case 'Loading10':
                                    el.innerHTML = Loading10;
                                   break;
                            case 'Loading11':
                                    el.innerHTML = Loading11;
                                   break;
                            case 'Loading12':
                                    el.innerHTML = Loading12;
                                   break;
                            case 'Loading13':
                                    el.innerHTML = Loading13;
                                   break;
                            case 'Loading14':
                                    el.innerHTML = Loading14;
                                   break;
                            case 'Loading15':
                                    el.innerHTML = Loading15;
                                   break;
                            case 'Loading16':
                                    el.innerHTML = Loading16;
                                   break;
                            case 'Loading17':
                                    el.innerHTML = Loading17;
                                   break;
                            case 'Loading18':
                                    el.innerHTML = Loading18;
                                   break;
                            case 'Loading19':
                                    el.innerHTML = Loading19;
                                   break;
                            case 'Loading20':
                                    el.innerHTML = Loading20;
                                   break;
                            case 'Loading21':
                                    el.innerHTML = Loading21;
                                   break;
                            case 'Loading22':
                                    el.innerHTML = Loading22;
                                   break;
                            case 'Loading23':
                                    el.innerHTML = Loading23;
                                   break;
                            case 'Loading24':
                                    el.innerHTML = Loading24;
                                   break;
                            case 'Loading25':
                                    el.innerHTML = Loading25;
                                   break;
                            case 'Loading26':
                                    el.innerHTML = Loading26;
                                   break;
                            case 'Loading27':
                                    el.innerHTML = Loading27;
                                   break;
                            case 'Loading28':
                                    el.innerHTML = Loading28;
                                   break;
                            case 'Loading29':
                                    el.innerHTML = Loading29;
                                   break;
                            case 'Loading30':
                                    el.innerHTML = Loading30;
                                   break;
                            case 'Loading31':
                                    el.innerHTML = Loading31;
                                   break;
                            case 'Loading32':
                                    el.innerHTML = Loading32;
                                   break;
                            case 'Loading33':
                                    el.innerHTML = Loading33;
                                   break;
                            case 'Loading34':
                                    el.innerHTML = Loading34;
                                   break;
                            case 'Loading35':
                                    el.innerHTML = Loading35;
                                   break;
                            case 'Loading36':
                                    el.innerHTML = Loading36;
                                   break;
                            case 'Loading37':
                                    el.innerHTML = Loading37;
                                   break;
                            case 'Loading38':
                                    el.innerHTML = Loading38;
                                   break;
                            case 'Loading39':
                                    el.innerHTML = Loading39;
                                   break;
                            case 'Loading40':
                                    el.innerHTML = Loading40;
                                   break;
                            case 'Loading41':
                                    el.innerHTML = Loading41;
                                   break;
                            case 'Loading42':
                                    el.innerHTML = Loading42;
                                   break;
                            case 'Loading43':
                                    el.innerHTML = Loading43;
                                   break;
                            case 'Loading44':
                                    el.innerHTML = Loading44;
                                   break;
                            case 'Loading45':
                                    el.innerHTML = Loading45;
                                   break;
                            case 'Loading46':
                                    el.innerHTML = Loading46;
                                   break;
                            case 'Loading47':
                                    el.innerHTML = Loading47;
                                   break;
                            case 'Loading48':
                                    el.innerHTML = Loading48;
                                   break;
                            default:
                                el.innerHTML = Loading1;
                            }

                    var _self = this;     //这里的this是整个对象

                        //Add customized loader image
                    if (this.settings.imagePath !='') {
                        el.innerHTML='<div class="fl"><img style="width:100px;height:100px;" src="'+this.settings.imagePath+'"></div>';
                        _self.centerLoader();
                    }
                    //Return Styles 
                    el.style.backgroundColor = this.settings.bgColor
                    el.style.zIndex = this.settings.zIndex

                    _self.centerLoader();
                    if (this.settings.timeToHideAble) {
                        //Time to hide funLoader
                        // console.log(_self)
                        setTimeout(function(){_self.fadeOut(el);}, this.settings.timeToHide);
                    };

                    window.location.onload = function(){
                        
                        if (!timeToHideAble){
                            _self.loadStop();
                        }else{
                            _self.centerLoader();
                             window.onresize = function(){
                                _self.centerLoader();
                             };
                        }
                    };

        
            },
            centerLoader:function(){
                var winW = document.body.clientWidth;
                var winH = window.screen.availHeight;
                var fl = document.querySelector('.fl');
                var spinnerW = fl.offsetWidth;
                var spinnerH = fl.offsetHeight;
                console.log(winH)
                console.log(spinnerH)
                fl.style.position = 'absolute';
                fl.style.left = (winW/2)-(spinnerW/2)+'px';
                fl.style.top = (winH/2)-(spinnerH/2)+'px';
                // console.log(fl.style.top)
            },
            loadStop:function(){
                // console.log(this);
                setTimeout(function(){this.fadeOut(el);}, this.settings.timeToHide);
            },
            fadeOut:function(el,time){ 
                if(el.style.opacity === ""){  
                    el.style.opacity = 1;  
                }  
                if(el.style.display === "" || el.style.display === 'none'){  
                    el.style.display = 'block';  
                }  
              
                var t = setInterval(function(){  
                    if(el.style.opacity > 0){  
                        el.style.opacity = parseFloat(el.style.opacity)-0.01;  
                    }  
                    else{  
                        // clearInterval(t);  
                        el.style.display = 'none'  
                    }  
                },time/100);  
            },
        }

       // 最后将插件对象暴露给全局对象
        _global = (function(){ return this || (0, eval)('this'); }());
        if (typeof module !== "undefined" && module.exports) {
            module.exports = Loading;
        } else if (typeof define === "function" && define.amd) {
            define(function(){return Loading;});
        } else {
            !('Loading' in _global) && (_global.Loading = Loading);
        }
    }());

// var Loading = new Loading({
    //     selector:$('.item_right_top1 .item_right_num_main'),
        
    // });