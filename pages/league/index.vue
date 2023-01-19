<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-4 mx-auto bg rounded-3xl">
    <div class="flex flex-col text-left w-full mb-5">
      <img class="mx-auto py-12 w-1/4" src="~assets/league/league_presentation.png" :title="$t('league.title')" :alt="$t('league.title')">

      <h1 class="text-white text-4xl text-center">
        Welcome to the New and Improved, Official Rise of the Witch King 2.02 League
      </h1>
      
      <h2 class="text-white text-3xl text-center">
        This league will be supervised by @Elrohir and @Eternal, as well as the 2.02 staff and trusted volunteers
      </h2>

      <img class="mx-auto py-12" src="~assets/league/rules.png">

      <p class="text-white text-lg">

        Info & Rules 🧙<br/> <br/>

        The League will be played on the new beta patch up until its public release, only league players will have access to it in 202-beta-testing 
        <br/>The League is based on an ELO point system.
        <br/>Players can play against anyone regardless of their ELO placement. However, the larger the point/skill gap between players the more punishing it becomes for higher skilled players who lose, and vice versa.
        <br/>Each Replay must be posted in the dedicated league-replays 

        <br/><br/>To upload a replay simply use the command: "/replay" in league replays channel and write the correct information. 

        <br/><br/>Players must approve the replay for it to be uploaded as well as league admins with a ✅ under the replay's message in league-replays :warning: 

        <br/><br/>If a game is played on a map that is not in the map pool, the replay will not be counted ⚠️ 

        <br/><br/>If any type of disconnection/oos :DC: happens, the game can be replayed if both players agree. If they disagree the replay can be reviewed and see if there was a clear winner, if there is no clear winner the person who dced will get the loss as any other type of ladder in other successful RTSes.

        <br/>"Farming" points is forbidden and will be sanctioned. Do not hesitate to challenge players and discuss in the league-discussion 

        <br/>Remember ! No matter your skill level you are welcome to come compete in the league and face down other players players of your skill level or higher ! Learn and improve in a fun ladder experience with cool features ! 📯 

        <br/><br/><span class="underline">Leaderboard :</span> 
        <br/>
        <nuxt-link to="league/players">Link</nuxt-link>

        <br/><br/>
        Rules  ☄️

        <br/><br/>- Starting resources: 1000
        <br/>- 👥 Command Point: X1
        <br/>- Custom Hero: Disabled ❌ 
        <br/>- Ring: Optional
        <br/>- 🔎 Neutral Host: Mandatory unless both players agree to play one on host game each. 
        <br/>- 🔃 In case of any problems please contact the league managers
        <br/>- 🎲 Factions: Free to select whichever faction or randomise 
        <br/>- 🎲 Optionnal Rule (not mandatory and at the discretion of the players) ⬇️

        <br/><br/>If both players agree, choosing factions can be done so: Both players inform their neutral host of their faction of choice. The host then reveals the factions each player chose and they must then stick to their choice, preventing "counter picking". This rule is strictly optional. 

        <br/><br/>NETWORK 

        <br/>Both GameRanger and Radmin can be used to play games, although Radmin is recommended as it is more reliable and stable (less lag) than GameRanger. If you do not know what Radmin is, it is a small and similar app like GameRanger. You may download it and join our network to play!

        <br/><br/><a href="https://www.radmin-vpn.com/" target="_blank">Radmin VPN</a>
        <br/>Once installed simply open it > click on Network on the top left > join an existing network > private network window > and enter the following: 
        <br/>Name: RotWK League ; Password: 202league.
        <br/>Once done and connected simply launch your game solo, go to Network and have fun! 


      </p>

      <img class="mx-auto py-12" src="~assets/league/bfme.png">
      <img class="mx-auto py-12" src="~assets/league/rules2.png">
      <img class="mx-auto py-12" src="~assets/league/Maps.png">
      <img class="mx-auto py-12" src="~assets/league/wor_buckland_loadscreen.png"> 


      <p class="text-white text-lg">
        <br/>Maps 🗺️

        <br/><br/>You can find a list of the maps here: 
        <br/><nuxt-link to="league/maps">Link</nuxt-link>

        <br/><br/>The map pool may be expanded upon request 🗺️ 

        <br/><br/>League Map pool:

        <br/><br/>- Belfalas Abyss  :Palantir3: 
        <br/>- Blood Gulch :Palantir3:
        <br/>- Brandy hills :Palantir3:
        <br/>- Chetwood :Palantir3:
        <br/>- Cirdan's Cove :Palantir3:
        <br/>- Dunland II :Palantir3:
        <br/>- Eastfold II :Palantir3:
        <br/>- Ettenmoors 
        <br/>- Ettenmoors II :Palantir3: 
        <br/>- Erech 4th Age :Palantir3:
        <br/>- Eryn Laer
        <br/>- Fangorn
        <br/>- Firien Dale :Palantir3:
        <br/>- Fords of Bruinen :Palantir3:
        <br/>- Fords of Isen
        <br/>- Gap of Rohan 
        <br/>- Glenford :Palantir3:
        <br/>- Hollin
        <br/>- Jungles of far harad
        <br/>- Last Bridge  :Palantir3:
        <br/>- Lossarnach :Palantir3:
        <br/>- Mering Stream :Palantir3:
        <br/>- Mirkwood II :Palantir3:
        <br/>- Plains of Lindon
        <br/>- Rhudaur :Palantir3:
        <br/>- Rhun Shore
        <br/>- Sirannon  :Palantir3:
        <br/>- Sakura Forest 
        <br/>- Sorrow Isles  :Palantir3:
        <br/>- The Iron Hills :Palantir3:
        <br/>- Tombs of Karna
        <br/>- Tyrn Gorthad
        <br/>- Westfold

        <br/><br/>Listed maps with the :Palantir3:  emoji may be downloaded here or in the pinned messages in league-discussion : 
        <br/>
        <a href="https://drive.google.com/drive/folders/1XCwxHuCvqaoN21vKV_t-lQJ_JGaY59YN?usp=sharing">LINK</a>
        

        <br/><br/>Download the maps pack in the link above and extract the maps in your Maps directory in :

        <br/><br/>C:\Users\You\AppData\Roaming\My lord of the rings files, Rise of the witch king\Maps

      </p>

      <img class="mx-auto py-12" src="~assets/league/beta.png"/>

      <p class="text-white text-lg text-center">
        The League is being played on the last patch of version of 2.02, version 9.0.0

        Once the new patch is out the beta will no longer be required ☄️ 
      </p>
       


      <img class="mx-auto py-12" src="~assets/league/rules2.png"/>
      <img class="mx-auto py-12" src="~assets/league/register.png"/>

      <p class="text-white text-lg text-center">

        Register now ! 📯 (On discord)

        Simply Register by writing in league-discussion this simple command : "/register" it will then log you in the league system, ready to play 👍 

      </p>
      <img class="mx-auto py-12" src="~assets/league/rules2.png"/>

      <!-- <h1 class="font-medium mb-4 text-red-500 text-8xl">{{ $t('league.title') }}</h1>
      <a href="https://discord.com/invite/aaAH56J" target="_blank" rel="noopener noreferrer">
        Discord ROTWK de la ligue
      </a> -->
        <!-- <div class="flex items-center justify-center">
            <img class="w-full h-full" src="~assets/league/LFA.webp" :title="$t('league.title')" :alt="$t('league.title')">
        </div> -->
    </div>
  </div>
</section>
</template>

<script>
export default {
  layout: "league",
}
</script>

<style scoped>

.bg {
    background-color: #18191c;
}

</style>