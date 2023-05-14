/* Donate via PayPal (maksymkorzh@gmail.com) */
var TextArea = function(o) {
  var b = [], w='';
  const s = document.getElementById(o.id);
  const x = s.getContext('2d');
  for (let c = 0; c < o.cols; c++) w += ' ';
  for (let r = 0; r < o.rows; r++) { b.push([]);
  for (let c = 0; c < o.cols; c++) b[r].push({
  'char': ' ', 'bgcolor': 'black',
  'fgcolor': 'white', 'weight': 'normal' });}
  x.font = o.font + 'px Mono';
  s.width = x.measureText(w).width + 2;
  s.height = o.rows * o.font;
  (function run() {    
    for (let r = 0; r < o.rows; r++) {
    for (let c = 0; c < o.cols; c++) {
      x.font = b[r][c].weight + ' ' + o.font + 'px Mono';
      x.fillStyle = b[r][c].bgcolor;
      x.fillRect((c * o.font / 1.66), (r * o.font),
      (c * o.font / 1.66) + s.width/o.cols+1, (r * o.font) + s.width/o.rows/2);
      x.fillStyle = b[r][c].fgcolor;
      x.fillText( b[r][c].char, (c * o.font / 1.66), (r * o.font + o.font - 3));}
    } requestAnimationFrame(run);
  })(); return {
    get: function(r, c) { return b[r][c]; },
    set: function(r, c, char, fgcolor, bgcolor, weight) {
      b[r][c].char = char;
      b[r][c].bgcolor = (typeof(bgcolor) === 'undefined') ? 'black' : bgcolor;
      b[r][c].fgcolor = (typeof(fgcolor) === 'undefined') ? 'white' : fgcolor;
      b[r][c].weight = (typeof(weight) === 'undefined') ? 'normal' : weight;
    }
  }
};