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

    resImg = function() {
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
    };

    colymn = function() {
        var a = window.innerWidth,
            b = window.innerHeight,
            c = document.querySelectorAll("*"),
            d = document.querySelectorAll(".colymn-clearfix"),
            margin = 4,
            pp = 300,
            pl = 300,
            tp = 440,
            tl = 640,
            dt = 1024,
            hd = 1440;

        // remove all clearing divs
        for (var z = 0; z < d.length; z++) {
            d[z].parentNode.removeChild(d[z]);
        }

        function rep(pr) {
            return RegExp(pr + "-(col|center)-", "g");
        }

        function rez(p) {
            return RegExp(p + "-center-\\d+(px|em)", "g");
        }

        function reg(pre, mid) {
            return RegExp(pre + "-" + mid + "-\\d+-\\d+", "g");
        }

        function testy(alpha) {
            return alpha.test(q[g].className);
        }

        function matchy2(gamma) {
            return q[g].className.match(gamma).toString().match(/(\d+|px|em)/g);
        }

        function lfr(delta) {
            var j = matchy2(delta);
            var bv = j[0] / j[1] * ((100 + margin) - margin * j[1]) + margin * j[0] - margin;
            var par = parseFloat(q[g].parentNode.style.width);
            var tet = 100 / par * -(bv + margin) + "%";
            return tet;
        }

        function wid(qas) {
            var n = matchy2(qas);
            var amm = (n[0] * 100) / (n[1]) - ((n[1] - n[0]) * margin / n[1]) + "%";
            return amm;
        }

        function svgg(c) {
            while (c.nodeName !== "svg" && (c = c.parentNode) && c.nodeName !== "svg");
            return !!c;
        }
        var mmm = 0;
        for (var x = 0; x < c.length; x++) {
            if (!svgg(c[x])) {
                var q = c[x].children;
                for (var g = 0; g < q.length; ++g) {
                    var m = q[g].style;
                    var joe = "xx";
                    if ((a > pp) && (b > a) && (testy(rep("pp")))) {
                        joe = "pp";
                    }
                    if ((a > pl) && (a > b) && (testy(rep("pl")))) {
                        joe = "pl";
                    }
                    if ((a > tp) && (b > a) && (testy(rep("tp")))) {
                        joe = "tp";
                    }
                    if ((a > tl) && (a > b) && (testy(rep("tl")))) {
                        joe = "tl";
                    }
                    if ((a > dt) && (testy(rep("dt")))) {
                        joe = "dt";
                    }
                    if ((a >= hd) && (testy(rep("hd")))) {
                        joe = "hd";
                    }
                    var ss = reg(joe, "left"),
                        rr = reg(joe, "right"),
                        tt = reg(joe, "(col|offset)"),
                        uu = reg(joe, "(left|right)"),
                        yy = reg(joe, "center"),
                        zz = reg(joe, "col"),
                        ll = rep("\\w+"),
                        vv = rez(joe);

                    // resets
                    if (testy(ll)) {
                        m.position = "relative";
                        m.display = "block";
                        m.marginRight = 0;
                        m.marginLeft = 0;
                        m.float = "none";
                        m.width = 100 + "%";
                    }

                    // if fixed width
                    if (testy(vv)) {
                        var we = matchy2(vv);
                        m.display = "block";
                        m.marginRight = "auto";
                        m.marginLeft = "auto";
                        m.float = "none";
                        m.width = we[0] + we[1];
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
                        if (matchy2(zz)[0] === "0") {
                            m.display = "none";
                        }

                        // if not left or right
                        if (!testy(uu)) {

                            // if not offset
                            var yu = matchy2(tt);
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

                                // if first and offset
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
                        }
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
        }
        helperize();
        resImg();
    };
    a(function() {
        colymn();
    });
})();
