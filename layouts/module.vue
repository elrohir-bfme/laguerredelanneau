<template>
  <Nuxt />
</template>

<style>

@font-face {
  font-family: 'LOTR';
  font-display: swap;
  src: url('~assets/fonts/LOTR.TTF') format('truetype');
}

@font-face {
  font-family: 'Albertus';
  font-display: swap;
  src: url('~assets/fonts/Albertus.otf') format('truetype');
}

html {
  background-color: transparent;
  font-family: 'Albertus';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-image: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  cursor: url("~assets/cursor1.png"),auto;
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

html::-webkit-scrollbar {
   width: 5px;          
}
 
html::-webkit-scrollbar-thumb {   
  border-radius: 5px;
  background: -webkit-gradient(linear,left top,left bottom,from(#f55932),to(#ff6347));
  box-shadow: inset 2px 2px 2px rgba(255,255,255,.25), inset -2px -2px 2px rgba(0,0,0,.25);}
 
html::-webkit-scrollbar-track {     
  background-color: #fff;
  background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17);
}

</style>
