<template>
	<div style="min-height: 100vh;" class="flex flex-col">
		<header>
			<Navbar />
		</header>
		<Nuxt class="flex-grow mb-16"/>
		<!--
		<footer>
			<Footer />
		</footer>
		-->
	</div>
</template>

<style>
@font-face {
  	font-family: "LOTR";
  	src: url("/font/LOTR.ttf") format("truetype");
  	font-weight: normal;
	font-style: normal;
}

@font-face {
  	font-family: "Albertus";
  	src: url("/font/Albertus.otf") format("truetype");
  	font-weight: normal;
	font-style: normal;
}

@font-face {
  	font-family: "Albertus";
  	src: url("/font/Albertus.otf") format("truetype");
  	font-weight: bold;
	font-style: normal;
}

::-webkit-scrollbar {
	width: 5px;
}

::-webkit-scrollbar-thumb {
	border-radius: 5px;
	background: -webkit-gradient(linear,left top,left bottom,from(#f55932),to(#ff6347));
	box-shadow: inset 2px 2px 2px #ffffff40, inset -2px -2px 2px #00000040;}

::-webkit-scrollbar-track {
	background-color: #fff;
	background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17);
}

* {
	cursor: url("/img/cursors/cursor1.png"), auto;
  	font-family: "Albertus", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 13pt;
}

body {
  	background-image: url("~assets/background.webp");
	background-attachment: fixed;
	margin: 0;
	padding: 0;
}

.tooltip .tooltip-text {
	visibility: hidden;
	text-align: center;
	padding: 2px 6px;
	position: absolute;
	z-index: 100;
}

.tooltip:hover .tooltip-text {
	visibility: visible;
}

.bg-gray {
	background-color: #18191c;
}
</style>
