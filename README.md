## BoilerPlate +

#####Ok. So Whats the plus?

Responsive image replacement, better &lt;img&gt; control, full screen containers, vertically centered elements, scalable typography, stopping FOUC and page yank, a simple grid system and better fonts (inc an icon font).

[DEMO](https://rawgit.com/Paul-Browne/PBBP/master/index.html)

#### 1. Responsive Image Replacement

[A simple script](https://github.com/Paul-Browne/ResImg.js) that swaps out images depending on the width of the image's *container* and the device's pixel ratio.
You can specify as many, or as few breakpoints as you like. The placeholder image should be of sufficient size ie. 1024x768, but of low quality ~ 20kb. Having a placeholder image is optional.

```html
<div class="container"> <!-- optional, could just be the <body> -->
  <img src = "i/world-placeholder.jpg" class="foo" id="bar" alt=""
  data-src = "<400:i/world-small.jpg,
              <800:i/world-medium.jpg,
              <1200:i/world-large.jpg,
              <1600:i/world-huge.jpg,
              >1600:i/world-massive.jpg" />
</div>
```

So, in the above example (assuming the `container` was the full screen);

|Device|screensize|pixel ratio|image|
|------|----------|-----------|-----|
|generic laptop|1366px|1|world-huge|
|fullHD desktop|1920|1|world-massive|
|samsung galaxy s2 - landscape|533|1.5|world-medium|
|samsung galaxy s3 - landscape|640|2|world-huge|
|samsung galaxy s4 - landscape|640|3|world-massive|
|iphone 3GS - portrait|320|1|world-small|
|iphone 4S - portrait|320|2|world-medium|
|ipad 1st/2nd gen - portrait|768|1|world-medium|
|ipad 3rd/4th gen - portrait|768|2|world-huge|
|ipad 1st/2nd gen - landscape|1024|1|world-large|
|ipad 3rd/4th gen - landscape|1024|2|world-massive|


#### 2. Image Cover

[A simple script](https://github.com/Paul-Browne/imageCover.js) that mimics `background-size:cover; background-position:center center;` on `<img>` elements.
Just wrap your `<img>` in a container with the class `icovr` like so;

```html
<div class="icovr" id="bar">
  <img src="i/a-picture.jpg" alt="" />
</div>
```

Will also work with responsive images. The container should have a height specified.

#### 3. Full Screen Containers

[A simple script](https://github.com/Paul-Browne/fullScreen.js) that allows you to add a container that will have the same dimensions (height and width) as the viewport.

```html
<div class="fullscreen">
  // content
</div>
```

Use the class `fullheight` if you want to create a container with only the same height as the viewport.

#### 4. Middlize

[A simple script](https://github.com/Paul-Browne/Middlize.js) that allows you to vertically and horizontally center any element within It's container.

```html
<div class="container">
  <div class="middlize"><h1>Hello World!</h1></div>
</div>
```

To only vertically center the element use the class `vmid` instead. The container should have a height specified.

#### 5. Scalable Typography

[A simple script](https://github.com/Paul-Browne/typeScale) that tweeks the base font size and line-height depending on the width of the viewport (browser window).

#### 6. FOUC and Page Yank

[A simple script](https://github.com/Paul-Browne/FOUC-and-Page-Yank) that hides the page whilst its loading, then has it fade in when ready and fade out when navigated away from or refreshed.

#### 7. A Simple Grid System

[A simple script](https://github.com/Paul-Browne/epicGrid)

add content here

#### 8. Fonts via google and icomoon

[Open Sans and libre baskerville](https://www.google.com/fonts/#UsePlace:use/Collection:Libre+Baskerville:400italic|Open+Sans:400,600) via google fonts. Open Sans - 400 is used for the main body text, Open Sans - 600 for bold/strong text and headlines (h1 - h6). Libre Baskerville - 400 italic is used for blockquotes, addresses, emphasis and anything else that requires italics.

The iconfont was generated using [icomoon](https://icomoon.io/) It includes a whole bunch of commonly used symbols


