// 玄猫之道 · WebView 检测
// 在所有需要 Google 登录的页面引入此文件
(function(){
  const ua = navigator.userAgent.toLowerCase();
  const isWebView =
    /wv|webview/.test(ua) ||
    (/android/.test(ua) && /version\/[\d.]+.*chrome\/[\d.]+/.test(ua)) ||
    (/iphone|ipad/.test(ua) && !/safari/.test(ua) && /applewebkit/.test(ua)) ||
    /micromessenger/.test(ua) ||   // 微信
    /fbav|fban/.test(ua) ||        // Facebook
    /line\//.test(ua) ||           // LINE
    /instagram/.test(ua);          // Instagram

  if(!isWebView) return;

  // 等 DOM 加载后再替换
  function showWarning(){
    const url = location.href;
    document.body.innerHTML = '';
    document.body.style.cssText = 'margin:0;padding:0;background:#0e0c0a;min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:"Noto Serif SC",serif';
    document.body.innerHTML = `
      <div style="padding:40px 28px;text-align:center;max-width:400px">
        <div style="font-size:48px;margin-bottom:20px">🐾</div>
        <div style="font-size:18px;font-weight:300;color:#e8c97a;letter-spacing:.1em;margin-bottom:12px">
          请用浏览器打开
        </div>
        <div style="font-size:13px;color:rgba(232,220,200,0.55);line-height:1.9;margin-bottom:24px">
          Google 登录不支持在<br>微信、WhatsApp 等应用内打开<br><br>
          请复制以下链接，在<br>
          <span style="color:#d4a843">Chrome</span> 或 <span style="color:#d4a843">Safari</span> 浏览器中打开
        </div>
        <div style="background:#1a1612;border:0.5px solid rgba(212,168,67,0.3);border-radius:8px;padding:12px 16px;font-size:12px;color:#d4a843;word-break:break-all;margin-bottom:20px;cursor:pointer"
          onclick="navigator.clipboard&&navigator.clipboard.writeText('${url}').then(()=>this.textContent='已复制 ✓')"
          title="点击复制">
          ${url}
        </div>
        <div style="font-size:11px;color:rgba(232,220,200,0.3);font-style:italic">
          点击上方链接可复制
        </div>
      </div>`;
  }

  if(document.body){
    showWarning();
  } else {
    document.addEventListener('DOMContentLoaded', showWarning);
  }
})();
