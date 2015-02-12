## PBBP

Paul Browne's Boiler Plate

Built on top of the popular HTML5 Boilerplate with 1.4kb of helper scripts adding functionality such as;

1. Responsive image replacement
2. Images the can mimic background-size:cover; background-position:center center;
3. Full screen containers
4. Vertically centered elements
5. Scalable typography
6. Stopping FOUC (flashes of unstyled content) and page yank

Also includes an iconfont compiled from [icomoon](https://icomoon.io/), Open Sans and Libre Baskerville from [Google fonts](https://www.google.com/fonts#UsePlace:use/Collection:Libre+Baskerville:400italic|Open+Sans:400,600) 

[DEMO](https://rawgit.com/Paul-Browne/PBBP/master/index.html)

#### 1. Responsive Image Replacement [repo](https://github.com/Paul-Browne/responsive-images.js)

A simple script that swaps out images depending on the width of the image's *container*.
You can specify as many, or as few breakpoints as you like. The placeholder image should be of sufficient size ie. 1024x768, but of low quality ~ 20kb. Having a placeholder image is optional.

```html
<div class="container"> // optional, could just be the <body>
  <img src = "i/world-placeholder.jpg" class="foo" id="bar" alt=""
  data-src = "<400:i/world-small.jpg,
              <800:i/world-medium.jpg,
              <1200:i/world-large.jpg,
              <1600:i/world-huge.jpg,
              >1600:i/world-massive.jpg" />
</div>
```

You can also add Retina images

```html
<div class="container"> // optional, could just be the <body>
  <img src = "i/world-placeholder.jpg" class="foo" id="bar" alt=""
  data-src = "<400:i/world-small.jpg,
              <800:i/world-medium.jpg,
              <1200:i/world-large.jpg,
              <1600:i/world-huge.jpg,
              >1600:i/world-massive.jpg"
data-src2x = "<400:i/world-small@2x.jpg,
              <800:i/world-medium@2x.jpg,
              <1200:i/world-large@2x.jpg,
              <1600:i/world-huge@2x.jpg,
              >1600:i/world-massive@2x.jpg" />
</div>
```


#### 2. Image Cover

A simple script that mimics `background-size:cover; background-position:center center;` on `<img>` elements.
Just wrap your `<img>` in a container with the class `icovr` like so;

```html
<div class="icovr" id="bar">
  <img src="i/a-picture.jpg" alt="" />
</div>
```

Will also work with responsive images. The container should have a height specified.

#### 3. Full Screen Containers

A simple script that allows you to add a container that will have the same dimensions (height and width) as the viewport.

```html
<div class="fullscreen">
  // content
</div>
```

#### 4. Middlize

A simple script that allows you to vertically and horizontally center any element within It's container.

```html
<div class="container">
  <div class="middlize"><h1>Hello World!</h1></div>
</div>
```

To only vertically center the element use the class `vmid` instead. The container should have a height specified.

#### 5. Scalable Typography [repo](https://github.com/Paul-Browne/typeScale)

A simple script that tweeks the base font size and line-height depending on the width of the viewport (browser window)

#### 6. FOUC and Page Yank

A simple script that hides the page whilst its loading, then has it fade in when ready and fade out when navigated away from or refreshed.
