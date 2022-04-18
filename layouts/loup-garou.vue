<template>
  <div style="font-family: 'Albertus'">    
    <header class="text-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center bg-gray border-purple-600 border-2 border-opacity-75 hover:border-purple-700">
          <nuxt-link style="font-family: 'Albertus'" class="p-4 text-purple-500 hover:text-white hover:bg-gray-900" to="/loup-garou">Cartes</nuxt-link>
          <nuxt-link style="font-family: 'Albertus'" class="p-4 text-purple-500 hover:text-white hover:bg-gray-900" to="/loup-garou/deroulement">Déroulement</nuxt-link>
          <a style="font-family: 'Albertus'" class="p-4 text-gray-600 hover:text-white hover:bg-gray-900" target="_blank" href="http://bit.ly/LaTerreduMilieu">
            <svg class="h-10 w-10" width="256px" height="293px" viewBox="0 0 256 293" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                <g>
                    <path d="M226.011429,0 L29.9885714,0 C13.4582857,0 0,13.4582857 0,30.1348571 L0,227.913143 C0,244.589714 13.4582857,258.048 29.9885714,258.048 L195.876571,258.048 L188.123429,230.985143 L206.848,248.393143 L224.548571,264.777143 L256,292.571429 L256,30.1348571 C256,13.4582857 242.541714,0 226.011429,0 Z M169.545143,191.049143 C169.545143,191.049143 164.278857,184.758857 159.890286,179.2 C179.053714,173.787429 186.368,161.792 186.368,161.792 C180.370286,165.741714 174.665143,168.521143 169.545143,170.422857 C162.230857,173.494857 155.209143,175.542857 148.333714,176.713143 C134.290286,179.346286 121.417143,178.614857 110.445714,176.566857 C102.107429,174.957714 94.9394286,172.617143 88.9417143,170.276571 C85.5771429,168.96 81.92,167.350857 78.2628571,165.302857 C77.824,165.010286 77.3851429,164.864 76.9462857,164.571429 C76.6537143,164.425143 76.5074286,164.278857 76.3611429,164.132571 C73.728,162.669714 72.2651429,161.645714 72.2651429,161.645714 C72.2651429,161.645714 79.2868571,173.348571 97.8651429,178.907429 C93.4765714,184.466286 88.064,191.049143 88.064,191.049143 C55.7348571,190.025143 43.4468571,168.813714 43.4468571,168.813714 C43.4468571,121.709714 64.512,83.5291429 64.512,83.5291429 C85.5771429,67.7302857 105.618286,68.1691429 105.618286,68.1691429 L107.081143,69.9245714 C80.7497143,77.5314286 68.608,89.088 68.608,89.088 C68.608,89.088 71.8262857,87.3325714 77.2388571,84.8457143 C92.8914286,77.9702857 105.325714,76.0685714 110.445714,75.6297143 C111.323429,75.4834286 112.054857,75.3371429 112.932571,75.3371429 C121.856,74.1668571 131.949714,73.8742857 142.482286,75.0445714 C156.379429,76.6537143 171.300571,80.7497143 186.514286,89.088 C186.514286,89.088 174.957714,78.1165714 150.089143,70.5097143 L152.137143,68.1691429 C152.137143,68.1691429 172.178286,67.7302857 193.243429,83.5291429 C193.243429,83.5291429 214.308571,121.709714 214.308571,168.813714 C214.308571,168.813714 201.874286,190.025143 169.545143,191.049143 Z M101.522286,122.733714 C93.184,122.733714 86.6011429,130.048 86.6011429,138.971429 C86.6011429,147.894857 93.3302857,155.209143 101.522286,155.209143 C109.860571,155.209143 116.443429,147.894857 116.443429,138.971429 C116.589714,130.048 109.860571,122.733714 101.522286,122.733714 M154.916571,122.733714 C146.578286,122.733714 139.995429,130.048 139.995429,138.971429 C139.995429,147.894857 146.724571,155.209143 154.916571,155.209143 C163.254857,155.209143 169.837714,147.894857 169.837714,138.971429 C169.837714,130.048 163.254857,122.733714 154.916571,122.733714" fill="#7289DA"></path>
                </g>
            </svg>
          </a>
        </nav>
      </div>
    </header>
    <Nuxt />
  </div>
</template>

<style>

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

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
  background-color: #18191c;
  font-family: 'Albertus';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-image: url('~assets/rematch.webp');
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
  background: -webkit-gradient(linear,left top,left bottom,from(#9d32f5),to(#9122ec));
  box-shadow: inset 2px 2px 2px rgba(255,255,255,.25), inset -2px -2px 2px rgba(0,0,0,.25);}
 
html::-webkit-scrollbar-track {     
  background-color: #fff;
  background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17);
}

</style>
