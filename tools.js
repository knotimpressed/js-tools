// basic allow right click (paste into console):
var elements = document.getElementsByTagName("*");
for(var id = 0; id < elements.length; ++id) { elements[id].oncontextmenu = null; }
// set video speed:
document.querySelector('video').playbackRate = 2.8;