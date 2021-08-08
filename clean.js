const fs = require("fs");

/**
 * Clean exports.xxx = void 0;
 * @param {string} fn File name
 */
function clean(fn) {
    if (fs.existsSync(fn)) {
        let f = fs.readFileSync(fn, {"encoding": "utf-8"})
        let l = f.split('\n');
        let r = [];
        let fi = true;
        for (let i = 0; i < l.length; i++) {
            let s = l[i];
            if (s.startsWith('exports.') && s.endsWith('= void 0;') && fi) continue;
            if (s == '"use strict";');
            else if (s.startsWith('Object.defineProperty(exports,'));
            else fi = false;
            r.push(s);
        }
        let t = r.join('\n');
        fs.writeFileSync(fn, t, {"encoding": "utf-8"});
    }
}

clean("lib/sha1.js")
