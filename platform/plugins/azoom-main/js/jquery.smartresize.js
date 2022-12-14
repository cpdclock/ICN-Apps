/* debouncing function from John Hann http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods */
(function(h, b) {
    var g = function(a, b, d) {
        var c;
        return function() {
            var e = this,
                f = arguments;
            c ? clearTimeout(c) : d && a.apply(e, f);
            c = setTimeout(function() {
                d || a.apply(e, f);
                c = null
            }, b || 100)
        }
    };
    jQuery.fn[b] = function(a) {
        return a ? this.bind("resize", g(a)) : this.trigger(b)
    }
})(jQuery, "smartresize");