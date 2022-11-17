(function () {
    var s, B, p, d, h, z, o = document.getElementById("js_language").value,
        K = document.getElementById("js_date").value, F = document.getElementById("js_tz").value,
        f = document.getElementById("js_uid").value, n = document.querySelector("#circle_second"),
        b = n.querySelector("text"), l = n.querySelector(".circle-green"), g = l.getTotalLength(),
        E = document.querySelector("#circle_minute"), H = E.querySelector("text"), e = E.querySelector(".circle-green"),
        D = e.getTotalLength(), x = document.querySelector("#circle_hour"), C = x.querySelector("text"),
        a = x.querySelector(".circle-green"), I = a.getTotalLength(), u = document.querySelector("#circle_day"),
        i = u.querySelector("text"), t = u.querySelector(".circle-green"), v = t.getTotalLength(), w, j, r,
        L = window.addEventListener ? "addEventListener" : "attachEvent", c = window[L],
        q = L === "attachEvent" ? "onmessage" : "message";
    c(q, function (M) {
        w = document.getElementById("countdown");
        if (typeof (w) != "undefined" && w != null) {
            if (M.data === "button_over") {
                w.classList.add("hover")
            }
            if (M.data === "button_out") {
                w.classList.remove("hover")
            }
        }
        if (M.data === "js_countdown_size") {
            m()
        }
    }, false);
    z = {
        en: ["Days", "Hours", "Minutes", "Seconds"],
        ru: ["Дней", "Часов", "Минут", "Секунд"],
        cs: ["Dní", "Hodin", "Minut", "Sekund"],
        fr: ["Jours", "Heures", "Minutes", "Secondes"],
        de: ["Tage", "Stunden", "Minuten", "Sekunden"],
        it: ["Giorni", "Ore", "Minuti", "Secondi"],
        ja: ["日", "時", "分", "秒"],
        nl: ["Dagen", "Uren", "Minuten", "Seconden"],
        da: ["Dage", "Timer", "Minutter", "Sekunder"],
        ko: ["일", "시", "분", "초"],
        pl: ["Dni", "Godzin", "Minut", "Sekund"],
        pt: ["Dias", "Horas", "Minutos", "Segundos"],
        es: ["Días", "Horas", "Minutos", "Segundos"],
        sv: ["Dagar", "Timmar", "Minuter", "Sekunder"],
        tr: ["Gün", "Saat", "Dakika", "Saniye"],
        hr: ["Dani", "Sati", "Minute", "Sekundi"],
        uk: ["Днів", "Годин", "Хвилин", "Секунд"],
        ro: ["Zile", "Ore", "Minute", "Secunde"],
        az: ["Günlərdir", "Saat", "Dəqiqə", "Saniyə"],
        af: ["Dae", "Ure", "Minute", "Sekondes"],
        sk: ["Dni", "Hodiny", "Minúty", "Sekundy"],
        bn: ["দিন", "ঘন্টার", "মিনিট", "সেকেন্ড"],
        bg: ["Дни", "Часа", "Минути", "Секунди"],
        be: ["Дзён", "Гадзін", "Хвілін", "Секунд"],
        et: ["Päeva", "Tundi", "Minutit", "Sekundit"],
        ka: ["დღეები", "საათი", "წუთი", "წამი"],
        el: ["Μέρες", "Ωρες", "Λεπτά", "Δευτερόλεπτα"],
        hi: ["दिन", "घंटे", "मिनट", "सेकंड"],
        hu: ["Napok", "Órák", "Percek", "Másodperc"],
        is: ["Dagar", "Klukkustundir", "Fundargerðir", "Sekúndur"],
        ga: ["Laethanta", "Uaireanta", "Miontuairiscí", "Soicind"],
        lv: ["Dienas", "Stundas", "Minūtes", "Sekundes"],
        lt: ["Dienos", "Valandos", "Minutės", "Sekundės"],
        sr: ["Дани", "Сати", "Минута", "Секунде"],
        sl: ["Dnevi", "Ure", "Minute", "Sekunde"],
        uz: ["Kunlar", "Soat", "Daqiqalar", "Soniya"],
        vi: ["Ngày", "Giờ", "Phút", "Giây"]
    };
    h = n.querySelector("text.time_units");
    h.innerHTML = z[o][3];
    d = E.querySelector("text.time_units");
    d.innerHTML = z[o][2];
    p = x.querySelector("text.time_units");
    p.innerHTML = z[o][1];
    B = u.querySelector("text.time_units");
    B.innerHTML = z[o][0];

    function A(S) {
        var P = new Date(S * 1000), M = new Date(), T = P - M, X = {}, O = Math.floor(T / (1000 * 60 * 60 * 24)),
            aa = Math.floor(T / (1000 * 60 * 60)), Z = Math.floor(T / (1000 * 60)), R = Math.floor(T / 1000), ac = O,
            ab = aa - O * 24, W = Z - aa * 60, U = R - Z * 60, Y, ad, V, Q, N;
        N = ac < 31 ? 31 : 365;
        Y = g - (g / 60) * (60 - U);
        ad = D - (D / 60) * (60 - W);
        V = I - (I / 24) * (24 - ab);
        Q = v - (v / N) * (N - ac);
        X.seconds = Y;
        X.minutes = ad;
        X.hours = V;
        X.days = Q;
        return X
    }

    function k(X) {
        var O = new Date(X * 1000), M = new Date(), V = O - M, W = Math.floor(V / (1000 * 60 * 60 * 24)),
            T = Math.floor(V / (1000 * 60 * 60)), P = Math.floor(V / (1000 * 60)), U = Math.floor(V / 1000), S = W,
            Q = T - W * 24, N = P - T * 60, Y = U - P * 60, R = A(X);
        b.innerHTML = Y < 10 ? "0" + Y : Y;
        H.innerHTML = N < 10 ? "0" + N : N;
        C.innerHTML = Q < 10 ? "0" + Q : Q;
        i.innerHTML = S < 10 ? "0" + S : S;
        if (Y === 0) {
            l.setAttribute("stroke-dasharray", 252, g);
            l.classList.toggle("complete");
            R.seconds = g;
            R.minutes -= D / 60
        } else {
            l.classList.remove("complete")
        }
        if (N === 0 && Y === 0) {
            e.setAttribute("stroke-dasharray", D + "," + D);
            R.hours -= I / 24
        }
        if (Q === 0 && N === 0 && Y === 0) {
            a.setAttribute("stroke-dasharray", I + "," + I);
            R.days -= I / 365
        }
        if (S === 0) {
            t.setAttribute("stroke-dasharray", 252 + "," + v)
        }
        R.seconds -= g / 60;
        l.setAttribute("stroke-dasharray", R.seconds + "," + g);
        e.setAttribute("stroke-dasharray", R.minutes + "," + D);
        a.setAttribute("stroke-dasharray", R.hours + "," + I);
        t.setAttribute("stroke-dasharray", R.days + "," + v);
        if (V < 1) {
            clearInterval(s);
            G()
        }
    }

    function G() {
        b.innerHTML = "00";
        H.innerHTML = "00";
        C.innerHTML = "00";
        i.innerHTML = "00";
        l.setAttribute("stroke-dasharray", 0, 252);
        e.setAttribute("stroke-dasharray", 0, 252);
        a.setAttribute("stroke-dasharray", 0, 252);
        t.setAttribute("stroke-dasharray", 0, 252)
    }

    j = document.getElementById("js_not_found");
    if (typeof (j) != "undefined" && j != null) {
        y("not_found")
    } else {
        k(K);
        s = setInterval(function () {
            k(K)
        }, 1000)
    }

    function y(M) {
        window.parent.postMessage({event_id: "js_countdown_show", uid: f, page: M}, "*")
    }

    function m() {
        var N, O, M = document.getElementById("js_countdown_circle");
        M.style.visibility = "visible";
        N = window.innerWidth < 1400 ? M.offsetHeight + 20 : M.offsetHeight + 50;
        O = M.offsetWidth;
        window.parent.postMessage({event_id: "time_countdown_size", width: O, height: N, disable: "0", uid: f}, "*")
    }

    function J() {
        m()
    }

    window.onresize = function () {
        clearTimeout(r);
        r = setTimeout(J, 100)
    }
})();