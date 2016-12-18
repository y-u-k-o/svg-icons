## SVG - requirements:

* ViewBox attribute should contain no more than two digit ```viewBox="0 0 80 30"```.
* Use basic shapes instead path if it possible (circle, ellipse, line, polygon, polyline, and rect).
* Dimension and decimal precision should be less as possible.
* SVG should not contain useless elements in their code (```<title>```, ```<desc>```, ```<style>```, ```<defs>```, class="", style="", etc.).
* All white spaces should be removed from SVG code.
* SVG code should has valid structure.

##### <span style="color: #3c763d">SVG Code</span>  - <code>113 bytes</code>
```html 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 30"><ellipse cx="40" cy="15" rx="36" ry="12"/></svg>
```

-----------------------

#### 1. [The viewBox attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox)

Example: ```viewBox="0 0 80 30"``` (min-x, min-y, width, height)

Please, always set the top-left corner to 0, 0. Next, round width and height to whole numbers. Also, width and height should contains no more than two digit. This can saves more than 10 bytes since one character equals one byte.

##### <span style="color: #a94442">BAD</span> - <code>130 bytes</code>
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.234 5.234 180.123 130.214">
  <ellipse cx="40" cy="15" rx="36" ry="12"/>
</svg>
```

-----------------------

#### 2. [Basic shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)

Please, use basic shapes instead path if it possible. Basic shapes have their own tags: circle, ellipse, line, polygon, polyline, and rect. Since these shapes are well-defined, the amount of code needed to describe them is minimal — all you need are some attribute/value pairs. Here's what the code of our example's ellipse looks like:

##### <span style="color: #a94442">BAD</span> - <code>125 bytes</code>
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 30">
  <path d="M4,15a36,12 0 1,0 72,0a36,12 0 1,0 -72,0"/>
</svg>
```

-----------------------

#### 3. Dimension and decimal precision

When you save an SVG, you'll need to indicate a decimal precision—usually an integer between one and eight. It defines the number of digits after the decimal point for all numeric values. Remember, characters equal bytes and the less we have, the smaller the file will be. As decimal precision is reduced, so are the amount of bytes—potentially seven less bytes per number.

But as precision decreases, SVGs can visually break because there may not be enough numeric data to accurately describe them. As precision increases, more detail is present, but beyond a certain point, may not increase fidelity—wasting bytes. Our goal is to balance file size and visual fidelity and know precisely where that balance is perfect.

##### <span style="color: #a94442">BAD</span> - <code>125 bytes</code>
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 30">
  <ellipse cx="40.234" cy="15.234" rx="36.234" ry="12.234"/>
</svg>
```

-----------------------

#### 4. Useless elements and attributes

Please, avoid use unnecessary elements and attributes. 
Example: ```<title>```, ```<desc>```, ```<style>```, ```<defs>```, class="", style="", etc.

##### <span style="color: #a94442">BAD</span> - <code>171 bytes</code>
```html 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 30">
  <style>
    .cl1 { fill: red; }
  </style>
  <g>
    <title>Ellipse</title>
    <ellipse cx="40" cy="15" rx="36" ry="12" class="cl1"/>
  </g>
</svg>
```

-----------------------

#### 4. White Spaces

Please, remove all white spaces in your SVG code.

##### <span style="color: #a94442">BAD</span> - <code>119 bytes</code>
```html 
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 30">
  <ellipse cx="40" cy="15" rx="36" ry="12"/>
</svg>
```


## Inspiration

* https://css-tricks.com/understanding-and-manually-improving-svg-optimization/
* https://jakearchibald.github.io/svgomg/
* https://github.com/svg/svgo