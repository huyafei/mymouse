window.onload=function(){
    fakeProgress(0, sb)
};
function setSB(v, el) {
    var ie5 = (document.all  &&  document.getElementsByTagName);
    if (ie5 || document.readyState == "complete")     {
        filterEl = el.children[0];
        valueEl = el.children[1];
        filterEl.style.width = v + "%";
        valueEl.innerText = v + "%";
    }
}
function fakeProgress(v, el) {
    if (v > 100){
        document.querySelector("#jz_title").innerText="加载成功，正在跳转...";
        setTimeout(function(){
            location.href = "mouse_index.html";
        },3000);
    }
    else     {
        setSB(v, el);
        window.setTimeout("fakeProgress(" + (++v) + ", document.all['" + el.id + "'])", 20);
    }
}

