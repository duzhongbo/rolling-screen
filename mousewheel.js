var mousewheel=(function () {
        var _eventCompat = function(event) {
            var type = event.type;
            if (type == 'DOMMouseScroll' || type == 'mousewheel') {
                event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
            }
            return event;
        };
        return function (el,fn) {
            if(window.addEventListener){
                var type = 'mousewheel';
                if (document.mozHidden !== undefined) {
                    type = "DOMMouseScroll";
                }
                el.addEventListener(type, function(event) {
                    fn.call(this, _eventCompat(event));
                }, false);
            }else{
                el.attachEvent("onmousewheel", function(event) {
                    event = event || window.event;
                    fn.call(el, _eventCompat(event));    
                });                
            }
        }

})();

