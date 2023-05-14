# TextAreaJS
An HTML canvas based widget to display text at given row/col coordinates

# API
```js
  // create display object
  var display = Display({
    id: 'display',           // corresponding HTML canvas element
    rows: 24,                // number of text view rows
    cols: 80,                // number of text view columns
    font: 16,                // font size in pixels
  });
  
  // displays 'W' at 10th row and 12th column with default attributes
  display.set(9, 11, 'W');
  
  // same but with yellow foreground and blue background color
  display.set(9, 11, 'W', 'yellow', 'blue');
  
  // same but with a bold font weight
  display.set(9, 11, 'W', 'yellow', 'blue', 'bold');
  
  // returns object {char: 'W', bgcolor: 'blue', fgcolor: 'yellow', weight: 'bold'} at row/col
  display.get(9, 11);
```

# Example usage
```html
<html>
  <body>
    <canvas id="textarea"/>
    <script src="textarea.js"></script>
    <script>
      // create display object
      var textArea = TextArea({
        id: 'textarea',
        rows: 24,
        cols: 80,
        font: 16,
      });
      
      // string to display at given coords
      let hello = 'Hello, world!';
      
      // set background color to blue
      for (let r = 0; r < 24; r++) {
        for (let c = 0; c < 80; c++)
          textArea.set(r, c, ' ', 'yellow', 'blue', 'normal');
      }
      
      // render string
      for (let i = 0; i < hello.length; i++)
        textArea.set(11, i+33, hello[i], 'yellow', 'blue', 'normal');
    </script>
  </body>
</html>
```