const R = 24; C = 80; F=16; var b = [[]]; var x=y=r=c=0;
let w=''; for (let c = 0; c < C; c++) w += ' ';
const S = document.getElementById('textarea');
const X = S.getContext('2d'); X.font = F + 'px Courier New';
S.width = X.measureText(w).width + 2; S.height = 24*F+5;
var V = document.getElementById("textarea"); V.focus();
V.addEventListener('focusout', function (e) { V.style.border = '2px ridge grey'; });
V.addEventListener('focus', function (e) { V.style.border = '2px ridge white'; });
V.addEventListener('keydown', function (e) {
  let ch = e.key; if (ch == 'Enter') {
    let l = b[r].slice(c, b[r].length); b[r] = b[r].slice(0, c);
    r += 1; c = 0; b.splice(r, 0, [].concat(l));
  } else if (ch == 'Backspace') { if (c) { c -= 1; b[r].splice(c, 1); }
    else if (r) {
      let l = b[r].slice(c, b[r].length); b.splice(r, 1);
      r -= 1; c = b[r].length; b[r] = b[r].concat(l);
    }
  } else if (ch == 'ArrowLeft') { if (c != 0) c -= 1; else if (r > 0) { r -= 1; c = b[r].length; }
  } else if (ch == 'ArrowRight') { if (c < b[r].length) c += 1;
    else if (r < b.length-1) { r += 1; c = 0; }
  } else if (ch == 'ArrowUp' && r != 0) r -= 1;
    else if (ch == 'ArrowDown' && r < b.length-1) r += 1;
    else if (ch.length == 1) { b[r].splice(c, 0, ch); c += 1;
  } let rw = r < b.length ? b[r] : -1; let rwlen = rw == -1 ? 0 : rw.length;
  if (c > rwlen) c = rwlen;
  if (r < y) y = r;
  if (r >= y + R) y = r - R+1;
  if (c < x) x = c;
  if (c >= x + C) x = c - C+1;
}); (function run() {
  X.fillStyle = 'black'; X.fillRect(0, 0, S.width, S.height);
  for (let rw = 0; rw < R; rw++) {
    let brw = rw + y;
    for (let cl = 0; cl < C; cl++) {
      let bcl = cl + x; try {
        X.fillStyle = 'white';
        X.font = F + 'px Courier New';
        if (b[brw][bcl].length) X.fillText(b[brw][bcl], (cl * F / 1.66), (rw * F + F));
      } catch(e) {}
    } X.fillText('\u2588', ((c-x) * F / 1.66), ((r-y) * F + F));
  } requestAnimationFrame(run);
})();