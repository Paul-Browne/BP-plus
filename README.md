## ![alt text](https://raw.githubusercontent.com/Paul-Browne/BP-plus/master/i/bpplus.jpg) Boilerplate + 

#####So Whats the plus?

When starting a new project I always find myself adding a few scripts and styles which make my life easier. At a cost of just over `2kb` these additions enable the following;

- **Responsive image replacement** - swapping images depending on the image's container width and device's pixel ratio.
- 
- **Better `<img>` control** - Mimic `background-size:cover; background-position:center center;` for inline images.
- 
- **Fullscreen containers** - Containers that take up the full screen, obviously!
- 
- **Vertically centered elements** - Position an element vertically bang in the middle of the parent.
- 
- **Scalable typography** - Small incremental changes to the base font size, making text more "comfortable" to read across all device sizes.
- 
- **Stopping FOUC and page yank** - Gently fade the page in when rendered, and fade out when navigated away from. 
- 
- **A grid system** - An epicGrid system!
- 
- **Better fonts** - Open Sans and Libre Baskerville from Google fonts, as well as an icon font from icomoon.
- 

---

##### Responsive Image Replacement

Swap out images depending on the width of the image's *container* and the device's pixel ratio.
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

---

##### Better `<img>` Control

Mimic `background-size:cover; background-position:center center;` on inline `<img>` elements.
Just wrap your `<img>` in a container with the class `icovr` like so;

```html
<div class="icovr" id="bar">
  <img src="i/a-picture.jpg" alt="" />
</div>
```

Will also work with responsive images. The container should have a height specified.

---

##### Fullscreen Containers

Add a container that will have the same dimensions (height and width) as the viewport.

```html
<div class="fullscreen">
  // content
</div>
```

Use the class `fullheight` if you want to create a container with only the same height as the viewport.
The classes `fullscreen` and `icovr` can be used on the same container.

##### Middlize

Vertically and horizontally center any element within It's container.

```html
<div class="container">
  <div class="middlize"><h1>Hello World!</h1></div>
</div>
```

To only vertically center the element use the class `vmid` instead. The container should have a height specified.

---

##### Scalable Typography

A slight adjustment is made to the baseline `font-size` and `line-height` to make text more readable across all devices;

| Viewport Width| font-size  | line-height |
| ------------- |------------|-------------|
| 400px         | 15.666px   | 1.45        |
| 800           | 16.333     | 1.5         |
| 1200          | 17         | 1.55        |
| 1600          | 17.666     | 1.6         |
| 2000          | 18.333     | 1.65        |

---

##### This [DEMO](https://rawgit.com/Paul-Browne/BP-plus/master/index.html) shows all of the above in action
