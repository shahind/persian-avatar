# Persian Miniature Style Avatars
This packages tries to provide new ideas in web design and web development by attracting attensions to the beautiful Persian miniature design. 
A set of avatars are provided here with a simple JS script to be included in web projects. Web and mobile developers, UI/UX designers, graphic designers, etc
can use this package to provide a fresh air to their products.  

## Usage
You can simply use avatars inside the ``avatars`` directory or incude the js script in your project.
```html
<script src="https://shahind.github.io/persian-avatar/embed.js"/></script>
OR
<script src="https://persiavatar.shahinsoft.ir/embed.js"/></script>
```
You can then use two functions, the simple one will just add an ``img`` element to the body with your desired width and height:
```js
<script>
  PRAvatar_showAvatar(100,100);
</script>
```

<img src="https://shahind.github.io/persian-avatar/avatars/18.jpg" height="100" width="100">

The second one will feed your ``img`` elemnts:
```html
<img id="yourImageID" />
<script>
  PRAvatar_feedImg('yourImageID');
</script>
```

<img id="avatar" style="border-radius:50px" width="100" src="https://shahind.github.io/persian-avatar/avatars/5.jpg">

# How you can help?
## Core JS development
If you are interested in this project, I really appreciate any help from you. Currently I'm thinking on developement of NodeJS packages and other
simple approaches to make this project easier to use. The current JS script version just returns random urls to the avatars. However, it would be
great to provide more functionalities like adjustable width and height(optimized file sizes) and shapes (like circle).

## Main page HTML design
It would be great if we can demonstrate use cases in a pretty UI at ``https://shahind.github.io/persian-avatar/`` to make the final goal of this project
more clear.

## Gathering avatars
Currently only 20 vatars are available in this project. By gathering more avatars, preferably with filters like gender, age, color, etc. we can help
designers by providing more flexibility in their designs.
