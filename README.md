
#***Play-its** HTML Soundboard*
<p align="center">
    <img alt="PlayIts" src="https://cloud.githubusercontent.com/assets/16484527/19606212/7f67714e-97de-11e6-9dec-3ea1c4ca4c72.PNG?raw=true">
</p>

---

***Play-its*** is a custom jQuery-ui widget that enables you to build your own web-based soundboard. Your favourite tracks at your fingertips! 

Check out a demo at https://selamanse.github.io/playits

## Features

***Play-its*** can be configured with ogg and m4a soundfiles which allows for support for different browsers.

## Usage

Import ***Play-its*** and its dependencies in your html file.

```html
<head>
	...
	<link rel="stylesheet" href="vendor/jquery-ui.css" />
	<script type="text/javascript" src="vendor/jquery.js"></script>
	<script type="text/javascript" src="vendor/jquery-ui.js"></script>
	<script type="text/javascript" src="vendor/jquery-rotate.js"></script>
	
	<script type="text/javascript" src="js/jquery-playit.js"></script>
	...
</head>
```

To add a sound you need to create a new jQuery element, call the *playit* function and supply the desired values of the sound to play.

```javascript
$("<div>").playit({
	sourcemp4: "sounds/applause.m4a", 
	sourceogg: "sounds/applause.ogg", 
	description: "A group of people applauding."	
});
```
Please see: [index.html](index.html) and [js/script.js](js/script.js) for a full example.

## Credits

The showcase soundboard uses images from [Sketchy-Icons Collection by AzureSol](http://azuresol.deviantart.com/art/Sketchy-Icons-134668163)
