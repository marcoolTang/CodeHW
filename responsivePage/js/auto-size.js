/**
 * Created by lovo_bdk on 15-12-17.
 */
!(function(win, doc){
     var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize =40*(width / 504) + "px");
        };//          html的字体大小  =  屏幕大小 / 设计图的大小
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
}(window, document));
