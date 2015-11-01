(function() {

    function a(b, c) {
        var d = [window.innerWidth];
        return window.addEventListener("resize", function() {
            var e = window.innerWidth,
                f = d.length;
            d.push(e);
            if (d[f] !== d[f - 1]) {
                clearTimeout(c);
                c = setTimeout(b, 200);
            }
        }), b;
    }

    helperize = function() {
        var a = window.innerWidth,
            b = document.getElementsByTagName("body")[0].style,
            c = document.querySelectorAll(".fullscreen,.fullheight"),
            d = document.querySelectorAll(".middlize,.vmid"),
            e = document.querySelectorAll(".icovr");

        b.fontSize = a / 600 + 15 + "px";
        b.lineHeight = a / 8e3 + 1.4;

        for (var z = 0; z < c.length; z++) {
            c[z].style.minHeight = window.innerHeight + "px";
        }

        for (var y = 0; y < d.length; y++) {
            d[y].style.top = (d[y].parentNode.offsetHeight - d[y].offsetHeight) / 2 + "px";
            d[y].parentNode.style.position = "relative";
        }

        for (var x = 0; x < e.length; x++) {
            if (!document.querySelectorAll(".icovr-cont").length) {
                var div = document.createElement("div");
                div.className = "icovr-cont";
                e[x].parentNode.insertBefore(div, e[x]).appendChild(e[x]);
            }
            var f = e[x].parentNode.offsetWidth,
                g = e[x].parentNode.offsetHeight,
                h = f / g,
                i = e[x].naturalWidth,
                j = e[x].naturalHeight,
                k = i / j,
                l = e[x].style;
            if (h >= k) {
                l.width = "100%";
                l.height = "auto";
                l.top = (g - j / (i / f)) / 2 + "px";
                l.left = 0;
            }
            if (k > h) {
                l.width = "auto";
                l.height = "100%";
                l.top = 0;
                l.left = (f - i / (j / g)) / 2 + "px";
            }
        }
    };

    ResImg = function() {
        var images = document.getElementsByTagName('img');
        if (images.length === 0) {
            return;
        }
        var hasAttr = function(el, attrName) {
            return el.hasAttribute(attrName);
        };
        var retina = window.devicePixelRatio ? window.devicePixelRatio : 1;
        for (var i = 0; i < images.length; i++) {
            var image = images[i],
                container = retina * image.parentNode.offsetWidth,
                srcAttr = 'data-src',
                baseAttr = (retina && hasAttr(image, 'data-src-base2x')) ? 'data-src-base2x' : 'data-src-base';
            if (!hasAttr(image, srcAttr)) {
                continue;
            }
            var basePath = hasAttr(image, baseAttr) ? image.getAttribute(baseAttr) : '',
                queries = image.getAttribute(srcAttr),
                queries_array = queries.split(',');
            for (var j = 0; j < queries_array.length; j++) {
                var query = queries_array[j].replace(':', '||').split('||'),
                    condition = query[0],
                    response = query[1],
                    conditionpx,
                    bool;
                if (condition.indexOf('<') !== -1) {
                    conditionpx = condition.split('<');
                    if (queries_array[(j - 1)]) {
                        var prev_query = queries_array[(j - 1)].split(/:(.+)/),
                            prev_cond = prev_query[0].split('<');
                        bool = (container <= conditionpx[1] && container > prev_cond[1]);
                    } else {
                        bool = (container <= conditionpx[1]);
                    }
                } else {
                    conditionpx = condition.split('>');
                    if (queries_array[(j + 1)]) {
                        var next_query = queries_array[(j + 1)].split(/:(.+)/),
                            next_cond = next_query[0].split('>');
                        bool = (container >= conditionpx[1] && container < next_cond[1]);
                    } else {
                        bool = (container >= conditionpx[1]);
                    }
                }
                if (bool) {
                    var isCrossDomain = response.indexOf('//') !== -1 ? 1 : 0,
                        new_source;
                    if (isCrossDomain === 1) {
                        new_source = response;
                    } else {
                        new_source = basePath + response;
                    }
                    if (image.src !== new_source) {
                        image.setAttribute('src', new_source);
                    }
                    break;
                }
            }
            image.addEventListener("load", helperize);
        }
    }

    colymn = function() {

        var a = window.innerWidth,
            b = window.innerHeight;
        var c = document.querySelectorAll("*"),
            d = document.querySelectorAll(".colymn-clearfix"),
            margin = 4,
            pp = 300,
            pl = 300,
            tp = 440,
            tl = 640,
            dt = 1024,
            hd = 1440;

        for (var z = 0; z < d.length; z++) {
            d[z].parentNode.removeChild(d[z]);
        }

        function reg(pre, mid) {
            return RegExp(pre + "-" + mid + "-\\d+-\\d+", "g");
        }

        function testy(alpha) {
            return alpha.test(q[g].className);
        }

        function matchy(gamma) {
            return q[g].className.match(gamma).toString().match(/\d+/g);
        }

        function lfr(delta) {
            var j = matchy(delta);
            var bv = j[0] / j[1] * ((100 + margin) - margin * j[1]) + margin * j[0] - margin;
            var par = parseFloat(q[g].parentNode.style.width);
            var tet = 100 / par * -(bv + margin) + "%";
            return tet;
        }

        function wid(qas) {
            var n = matchy(qas);
            var amm = (n[0] * 100) / (n[1]) - ((n[1] - n[0]) * margin / n[1]) + "%";
            return amm;
        }

        var mmm = 0;
        for (var x = 0; x < c.length; x++) {
            var q = c[x].children;

            for (var g = 0; g < q.length; ++g) {

                var m = q[g].style;

                var joe = "xx";

                if ((a > pp) && (b > a) && (testy(reg("pp", "c\\w+")))) {
                    joe = "pp";
                }
                if ((a > pl) && (a > b) && (testy(reg("pl", "c\\w+")))) {
                    joe = "pl";
                }
                if ((a > tp) && (b > a) && (testy(reg("tp", "c\\w+")))) {
                    joe = "tp";
                }
                if ((a > tl) && (a > b) && (testy(reg("tl", "c\\w+")))) {
                    joe = "tl";
                }
                if ((a > dt) && (testy(reg("dt", "c\\w+")))) {
                    joe = "dt";
                }
                if ((a >= hd) && (testy(reg("hd", "c\\w+")))) {
                    joe = "hd";
                }

                var ss = reg(joe, "left");
                var rr = reg(joe, "right");
                var tt = reg(joe, "(col|offset)");
                var uu = reg(joe, "(left|right)");
                var yy = reg(joe, "center");
                var zz = reg(joe, "col");
                var ll = reg(joe, "(col|center)");

                if (testy(ll)) {
                    m.position = "relative";
                    m.display = "block";
                    m.marginRight = 0;
                    m.marginLeft = 0;
                    m.float = "none";
                    m.width = 100 + "%";
                }

                // if center type
                if (testy(yy)) {
                    m.width = wid(yy);
                    m.float = "none";
                    m.marginRight = "auto";
                    m.marginLeft = "auto";
                }

                // if column type
                if (testy(zz)) {
                    m.width = wid(zz);
                    m.float = "left";
                    m.marginLeft = margin + "%";

                    if (matchy(zz)[0] === "0") {
                        m.display = "none";
                    }


                    // if not left or right
                    if (!testy(uu)) {

                        var yu = matchy(tt);

                        // if not offset
                        if (!yu[2]) {
                            yu[2] = 0;
                            yu[3] = 1;
                        }

                        // if first
                        if (mmm <= 0.01) {
                            m.marginLeft = 0;
                        }

                        // if type offset
                        if (yu[2]) {
                            var vat = yu[2] / yu[3] * ((100 + margin) - margin * yu[3]) + margin * yu[2];
                            m.marginLeft = vat + margin + "%";

                            if (mmm <= 0.01) {
                                m.marginLeft = vat + "%";
                            }
                        }
                        mmm += (yu[0] / yu[1]) + (yu[2] / yu[3]);

                        // if last column in row
                        if (mmm >= 0.99) {
                            mmm -= 1;
                            var n = document.createElement("div");
                            n.style.clear = "both";
                            n.className = "colymn-clearfix";
                            q[g].parentNode.insertBefore(n, q[g].nextSibling);
                        }
                    } // end if not left or right


                    // if type left
                    if (testy(ss)) {
                        m.marginRight = margin + "%";
                        m.marginLeft = lfr(ss);
                    }

                    // if type right

                    if (testy(rr)) {
                        m.float = "right";
                        m.marginLeft = margin + "%";
                        m.marginRight = lfr(rr);
                    }
                }
            }
        }
        helperize();
        ResImg();
    };
    a(function() {
        colymn();
    });
})();
