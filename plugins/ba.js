/* eslint-disable */
/*
** Only run on client-side and only in production mode
*/
if (process.env.NODE_ENV === 'production') {
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?ed2280bc41267f841d5fdcd73bf9a50e";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
}
