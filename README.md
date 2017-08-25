# cache-loading
<p>cache-loading.js是一款轻量级的 无依赖炫酷页面预加载Loading特效插件----目前48种效果也可以加载自己的gif图片。它能帮助我们创建一个全屏遮罩效果的旋转loading效果来模拟页面预加载过程。</p>

> [博客地址](http://www.jiaoyiba.cc)

[![NPM](https://nodei.co/npm/gulp-imageisux.png)](https://www.npmjs.com/package/cache-loading/)

<h3>使用方法</h3>
<p>在&lt;head&gt;标签中引入cache-loading.css文件。</p>

<p><link rel="stylesheet" href="yourPath/cache-loading.css"></p>
<p>在&lt;body&gt;标签中写入默认div：&lt;div id="loading"&gt;&lt;/div&gt;</p>
<p>在页面底部引入cache-loading.min.js文件。</p>
<p><script src="yourPath/cache-loading.min.js"></p>

<h4>基本使用方法：</h4>
<pre>
<p><script type="text/javascript"></p>
<p>new loading({})</p>
<p></script></p>
</pre>
<h4>带参数调用：</h4>
<pre>
<code><p>&lt;script type="text/javascript"&gt;</p>
    new loading = ({
    
            timeToHide:1200, //Time in milliseconds for fakeLoader disappear   你的loading需要显示的时间
            zIndex:999, // Default zIndex    z-index层
            spinner:"loading1",//Options: 'loading1', 'loading2', 'loading3', 'loading4', 'loading5', 'loading6',......, 'loading48' 共48种特效
            bgColor:"#2ecc71", //Hex, RGB or RGBA colors  遮罩背景颜色
            imagePath:"yourPath/customizedImage.gif" //你的gif图片路径  可选
            
    });
     </script>;
</code>
</pre>
<h4>可用参数</h4>
<p>  ● timeToHidenumbers：fakeLoader消失的时间，单位毫秒。</p>
<p>  ● zIndex：默认的zIndex。</p>
<p>  ● spinner：可选的spinner：'loading1', 'loading2', 'loading3', 'loading4', 'loading5', 'loading6',......, 'loading48'。</p>
<p>  ● bgColor：全屏遮罩的背景颜色。可以是hex、RGB 或 RGBA 颜色值。</p>
<p>  ● imagePath：如果你想自定义图片，使用该选项。</p>
  
  <h1>What is cache-loading.js</h1>
<p>
cache-loading.js is a lightweight helps you create an animated spinner with a fullscreen loading mask to simulate the page preloading effect.
</p>
<h1>Bower?</h1>
<p>Me too :) cache-loading.js is available as a Bower package. Just run</p>
<pre>bower install fakeloader</pre>

<h1>1. Include in HTML Document</h1>
<p style="margin:0px;">Include in the top of your &lt;body&gt; tag </p>
<pre><p>&lt;div id="loading"&gt;&lt;/div&gt;</p></pre>
</br></br>
<h1>2. Include Styles</h1>
<p>Inside &lt;head&gt; tag </p>
<pre><p>&lt;link rel="stylesheet" href="yourPath/cache-loading.css"&gt;</p></pre>
<h1>3. Include Folowing Libraries</h1>
<p>JQuery reference and the cache-loading.js</p>
<pre>
<p>&lt;script src="yourPath/cache-loading.min.js"&gt;</p>
</pre>

<h1>4. Basic Initialize</h1>
<p>Include in bottom of your  &lt;body&gt; tag</p>
<pre>
<code>
    &lt;script type="text/javascript"&gt;
        new loading = ({})
    &lt;/script&gt;
</code>
</pre>

<h1>5. Options</h1>
<pre>
<code><p>&lt;script type="text/javascript"&gt;</p>
    new loading = ({
    
            timeToHide:1200, //Time in milliseconds for fakeLoader disappear
            zIndex:999, // Default zIndex
            spinner:"loading1",//Options: 'loading1', 'loading2', 'loading3', 'loading4', 'loading5', 'loading6',......, 'loading48' 
            bgColor:"#2ecc71", //Hex, RGB or RGBA colors
            imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image
            
    });
     &lt;/script&gt;
</code>
</pre>