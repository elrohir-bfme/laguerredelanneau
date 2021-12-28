<template>
<div>
    <p class="text-center text-3xl font-bold text-white">
        Liste des clans de la Terre du Milieu
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        <div v-for="clan in clans" :key="clan.id" class="p-4 relative mb-14">
            <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                <img v-if="clan.img" alt="profil" title="profil" :src="`https://api.laterredumilieu.fr${clan.img.url}`" 
                class="mx-auto object-cover rounded-lg h-40 w-40 dark:border-gray-800"/>
            </div>
            <div class="bg-gradient-to-r from-gray-800 to-gray-900  hover:from-gray-900  hover:to-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                <div class="text-center">
                    <p class="text-2xl text-white">
                        {{clan.name}}
                    </p>
                    <p class="text-xl text-gray-200 dark:text-gray-200 font-light mb-4">
                        <img  class="inline-block rounded-full w-10" src="~assets/wars/point.jpg" title="Points" alt="Points">
                        {{clan.points}} {{clan.points > 0 ? "points" : "point"}}
                    </p>
                        <div class="grid grid-cols-3 gap-4 text-white text-center">
                            <div>
                                <span class="text-green-500  inline-block">
                                    BFME 2 1.09
                                    <img class="inline-block w-8" src="~assets/wars/bfme2.png" title="bfme2" alt="bfme2">
                                </span>
                            </div>
                            <div>
                            </div>
                            <div>
                                <span class="text-blue-500 inline-block">
                                    ROTWK 2.02
                                    <img class="inline-block w-8" src="~assets/wars/rotwk.png" title="rotwk" alt="rotwk">
                                </span>
                            </div>
                        </div> 
                        <div class="mx-auto m-2" v-for="player in clan.players" :key="player.name" >
                            <div class="grid grid-cols-3 gap-4 text-white text-center">
                                <div class="bg-green-600 rounded-lg">
                                    <p class="mt-2">
                                    {{player.grade109}}

  
                                    <img v-if="player.grade109 == 'general'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeGeneral.svg"  title="general" alt="general">
                                    <img v-if="player.grade109 == 'lieutenant'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeLieutenant.svg" title="lieutenant" alt="lieutenant">  
                                    <img v-if="player.grade109 == 'soldat'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeSoldat.svg" title="soldat" alt="soldat"> 
                                    </p>  
                                </div>
                                <div class="bg-purple-600 hover:bg-purple-700 uppercase px-2 py-1 text-xs font-bold mr-3 rounded-lg">

                                {{(player.name)}}
                                    <span class="block text-center text-xs font-normal">
                                    
                                    {{player.victory}} <img alt="Victoire" class="w-8 h-4 inline-block" src="~assets/svg/trophy.svg" title="Victoire">
                                    
                                    {{player.defeat}} <img alt="Défaite" class="w-8 h-4 inline-block" src="~assets/svg/skull.svg" title="Défaite">
                                
                                    </span>    
                                </div>
                                <div class="bg-blue-600 rounded-lg">
                                    <p class="mt-2">
                                    {{player.grade202}}
                                    
                                    <img v-if="player.grade202 == 'Champion'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeGeneral.svg" title="Champion" alt="Champion">
                                    <img v-if="player.grade202 == 'Mirmillon'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeLieutenant.svg" title="Mirmillon" alt="Mirmillon">  
                                    <img v-if="player.grade202 == 'Provotactor'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeSoldat.svg" title="Provotactor" alt="Provotactor"> 
                                    </p> 
                                </div>
                            </div> 
                        </div>
                </div>
                <div class="rounded-lg bg-gray-900 dark:bg-white p-2 w-full">
                      <div class="grid grid-cols-3 gap-4 text-white text-center">
                          <p class="flex flex-col">
                              Victoire
                              <span class="text-white dark:text-indigo-500 font-bold">
                                  {{ clan.win}}
                              </span>
                          </p>
                          <p class="flex flex-col">
                              Défaite
                              <span class="text-white dark:text-indigo-500 font-bold">
                                  {{ clan.defeat}}
                              </span>
                          </p>
                          <p class="flex flex-col">
                              Matchs
                              <span class="text-white dark:text-indigo-500 font-bold">
                                  {{ clan.matchs}}
                              </span>
                          </p>
                      </div>
                  </div>
            </div>
        </div>
    </div>
</div>

<!-- </div> -->


</template>

<script>
export default {
    layout: "wars",
    data() {
        return {
        loading: false,
        clans: [{"win":null,"matchs":null,"_id":"60cf83fe806c5041454b1d07","name":"Team KAAM","points":1700,"defeat":null,"createdAt":"2021-06-20T18:07:58.180Z","updatedAt":"2021-09-17T14:25:28.657Z","__v":0,"img":{"_id":"60d1c4d6715565be9bdfc828","name":"kaamelott.png","alternativeText":"","caption":"","hash":"kaamelott_a278e3524d","ext":".png","mime":"image/png","size":335.72,"width":498,"height":492,"url":"/uploads/kaamelott_a278e3524d.png","formats":{"thumbnail":{"name":"thumbnail_kaamelott.png","hash":"thumbnail_kaamelott_a278e3524d","ext":".png","mime":"image/png","width":158,"height":156,"size":50.66,"path":null,"url":"/uploads/thumbnail_kaamelott_a278e3524d.png"}},"provider":"local","related":["60cf83fe806c5041454b1d07"],"createdAt":"2021-06-22T11:09:10.636Z","updatedAt":"2021-06-22T11:09:31.181Z","__v":0,"id":"60d1c4d6715565be9bdfc828"},"players":[{"grade202":"Champion","grade109":"Mirmillon","_id":"60cf91d86b813b37a7276921","name":"Illünt","defeat":4,"victory":1,"createdAt":"2021-06-20T19:07:04.296Z","updatedAt":"2021-09-17T14:25:28.631Z","__v":0,"clan":"60cf83fe806c5041454b1d07","id":"60cf91d86b813b37a7276921"},{"grade202":"Mirmillon","grade109":"Champion","_id":"60d59749715565be9bdfc836","name":"Eclatax","victory":2,"defeat":8,"createdAt":"2021-06-25T08:43:53.709Z","updatedAt":"2021-09-17T14:25:28.631Z","__v":0,"clan":"60cf83fe806c5041454b1d07","id":"60d59749715565be9bdfc836"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d5975d715565be9bdfc837","name":"Njord","victory":0,"defeat":0,"createdAt":"2021-06-25T08:44:13.840Z","updatedAt":"2021-09-17T14:25:28.631Z","__v":0,"clan":"60cf83fe806c5041454b1d07","id":"60d5975d715565be9bdfc837"},{"grade202":"Mirmillon","grade109":"Mirmillon","_id":"60d597ec715565be9bdfc838","name":"Bohort","victory":2,"defeat":5,"createdAt":"2021-06-25T08:46:36.043Z","updatedAt":"2021-09-17T14:25:28.631Z","__v":0,"clan":"60cf83fe806c5041454b1d07","id":"60d597ec715565be9bdfc838"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d597f8715565be9bdfc839","name":"Samael","victory":0,"defeat":2,"createdAt":"2021-06-25T08:46:48.433Z","updatedAt":"2021-09-17T14:25:28.631Z","__v":0,"clan":"60cf83fe806c5041454b1d07","id":"60d597f8715565be9bdfc839"},{"grade202":"Mirmillon","grade109":"Provotactor","_id":"60d59809715565be9bdfc83a","name":"Théoden","victory":0,"defeat":0,"createdAt":"2021-06-25T08:47:05.589Z","updatedAt":"2021-09-17T14:25:28.631Z","__v":0,"clan":"60cf83fe806c5041454b1d07","id":"60d59809715565be9bdfc83a"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d59815715565be9bdfc83b","name":"Doigbite","victory":2,"defeat":2,"createdAt":"2021-06-25T08:47:17.381Z","updatedAt":"2021-09-17T14:25:28.631Z","__v":0,"clan":"60cf83fe806c5041454b1d07","id":"60d59815715565be9bdfc83b"}],"id":"60cf83fe806c5041454b1d07"},{"win":null,"matchs":null,"_id":"60cf8423806c5041454b1d09","name":"Team RUSH","defeat":null,"points":5900,"createdAt":"2021-06-20T18:08:35.934Z","updatedAt":"2021-09-17T14:26:03.005Z","__v":0,"img":{"_id":"60d1c4d7715565be9bdfc82a","name":"rush.png","alternativeText":"","caption":"","hash":"rush_206b7ac278","ext":".png","mime":"image/png","size":478.28,"width":592,"height":610,"url":"/uploads/rush_206b7ac278.png","formats":{"thumbnail":{"name":"thumbnail_rush.png","hash":"thumbnail_rush_206b7ac278","ext":".png","mime":"image/png","width":151,"height":156,"size":44.82,"path":null,"url":"/uploads/thumbnail_rush_206b7ac278.png"},"small":{"name":"small_rush.png","hash":"small_rush_206b7ac278","ext":".png","mime":"image/png","width":485,"height":500,"size":398.01,"path":null,"url":"/uploads/small_rush_206b7ac278.png"}},"provider":"local","related":["60cf8423806c5041454b1d09"],"createdAt":"2021-06-22T11:09:11.083Z","updatedAt":"2021-06-22T11:09:42.994Z","__v":0,"id":"60d1c4d7715565be9bdfc82a"},"players":[{"grade202":"Champion","grade109":"Provotactor","_id":"60d598af715565be9bdfc83c","name":"Wyrdan","victory":0,"defeat":0,"createdAt":"2021-06-25T08:49:51.742Z","updatedAt":"2021-09-17T14:26:02.978Z","__v":0,"clan":"60cf8423806c5041454b1d09","id":"60d598af715565be9bdfc83c"},{"grade202":"Mirmillon","grade109":"Mirmillon","_id":"60d598c8715565be9bdfc83d","name":"QDR","victory":0,"defeat":0,"createdAt":"2021-06-25T08:50:16.217Z","updatedAt":"2021-09-17T14:26:02.978Z","__v":0,"clan":"60cf8423806c5041454b1d09","id":"60d598c8715565be9bdfc83d"},{"grade202":"Mirmillon","grade109":"Mirmillon","_id":"60d598e0715565be9bdfc83e","name":"BoBoFF","victory":0,"defeat":0,"createdAt":"2021-06-25T08:50:40.203Z","updatedAt":"2021-09-17T14:26:02.978Z","__v":0,"clan":"60cf8423806c5041454b1d09","id":"60d598e0715565be9bdfc83e"},{"grade202":"Mirmillon","grade109":"Champion","_id":"60d598f9715565be9bdfc83f","name":"Aupif","victory":9,"defeat":5,"createdAt":"2021-06-25T08:51:05.013Z","updatedAt":"2021-09-17T14:26:02.978Z","__v":0,"clan":"60cf8423806c5041454b1d09","id":"60d598f9715565be9bdfc83f"},{"grade202":"Mirmillon","grade109":"Mirmillon","_id":"60d5990e715565be9bdfc840","name":"LexiDevil","victory":0,"defeat":0,"createdAt":"2021-06-25T08:51:26.525Z","updatedAt":"2021-09-17T14:26:02.978Z","__v":0,"clan":"60cf8423806c5041454b1d09","id":"60d5990e715565be9bdfc840"},{"grade202":"Provotactor","grade109":"Mirmillon","_id":"60d59920715565be9bdfc841","name":"Gréhelfe","victory":5,"defeat":0,"createdAt":"2021-06-25T08:51:44.709Z","updatedAt":"2021-09-17T14:26:02.978Z","__v":0,"clan":"60cf8423806c5041454b1d09","id":"60d59920715565be9bdfc841"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d59934715565be9bdfc842","name":"Kaktus","victory":0,"defeat":0,"createdAt":"2021-06-25T08:52:04.341Z","updatedAt":"2021-09-17T14:26:02.978Z","__v":0,"clan":"60cf8423806c5041454b1d09","id":"60d59934715565be9bdfc842"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d59946715565be9bdfc843","name":"Diablo","victory":1,"defeat":1,"createdAt":"2021-06-25T08:52:22.397Z","updatedAt":"2021-09-17T14:26:02.978Z","__v":0,"clan":"60cf8423806c5041454b1d09","id":"60d59946715565be9bdfc843"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d5995d715565be9bdfc844","name":"SpiRit","victory":0,"defeat":0,"createdAt":"2021-06-25T08:52:45.677Z","updatedAt":"2021-09-17T14:26:02.978Z","__v":0,"clan":"60cf8423806c5041454b1d09","id":"60d5995d715565be9bdfc844"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d59971715565be9bdfc845","name":"Lijert","victory":0,"defeat":1,"createdAt":"2021-06-25T08:53:05.189Z","updatedAt":"2021-09-17T14:26:02.978Z","__v":0,"clan":"60cf8423806c5041454b1d09","id":"60d59971715565be9bdfc845"}],"id":"60cf8423806c5041454b1d09"},{"win":null,"matchs":null,"_id":"60cf844a806c5041454b1d0b","name":"Team GROND","defeat":null,"points":4800,"createdAt":"2021-06-20T18:09:14.405Z","updatedAt":"2021-09-17T14:25:18.450Z","__v":0,"img":{"_id":"60d1ca94715565be9bdfc832","name":"ezgif-3-8453a79dcc92.gif","alternativeText":"","caption":"","hash":"ezgif_3_8453a79dcc92_0cb189873a","ext":".gif","mime":"image/gif","size":703.19,"url":"/uploads/ezgif_3_8453a79dcc92_0cb189873a.gif","provider":"local","width":114,"height":86,"related":["60cf844a806c5041454b1d0b"],"createdAt":"2021-06-22T11:33:40.571Z","updatedAt":"2021-06-22T11:34:20.260Z","__v":0,"id":"60d1ca94715565be9bdfc832"},"players":[{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06f9a6b813b37a7276945","name":"Miraak","victory":0,"defeat":0,"createdAt":"2021-06-21T10:53:14.278Z","updatedAt":"2021-09-17T14:25:18.416Z","__v":0,"clan":"60cf844a806c5041454b1d0b","id":"60d06f9a6b813b37a7276945"},{"grade202":"Provotactor","grade109":"Mirmillon","_id":"60d06ecc6b813b37a7276943","name":"Kado","victory":0,"defeat":0,"createdAt":"2021-06-21T10:49:48.857Z","updatedAt":"2021-09-17T14:25:18.416Z","__v":0,"clan":"60cf844a806c5041454b1d0b","id":"60d06ecc6b813b37a7276943"},{"grade202":"Champion","grade109":"Champion","_id":"60d06ebf6b813b37a7276942","name":"Toinou","victory":0,"defeat":0,"createdAt":"2021-06-21T10:49:35.624Z","updatedAt":"2021-09-17T14:25:18.416Z","__v":0,"clan":"60cf844a806c5041454b1d0b","id":"60d06ebf6b813b37a7276942"},{"grade202":"Mirmillon","grade109":"Provotactor","_id":"60d06ed76b813b37a7276944","name":"Langshor","victory":0,"defeat":0,"createdAt":"2021-06-21T10:49:59.489Z","updatedAt":"2021-09-17T14:25:18.416Z","__v":0,"clan":"60cf844a806c5041454b1d0b","id":"60d06ed76b813b37a7276944"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06fb16b813b37a7276947","name":"Elessar","victory":0,"defeat":0,"createdAt":"2021-06-21T10:53:37.596Z","updatedAt":"2021-09-17T14:25:18.416Z","__v":0,"clan":"60cf844a806c5041454b1d0b","id":"60d06fb16b813b37a7276947"},{"grade202":"Provotactor","grade109":"Mirmillon","_id":"60d06fa76b813b37a7276946","name":"Moltak","victory":0,"defeat":0,"createdAt":"2021-06-21T10:53:27.054Z","updatedAt":"2021-09-17T14:25:18.416Z","__v":0,"clan":"60cf844a806c5041454b1d0b","id":"60d06fa76b813b37a7276946"},{"grade202":"Mirmillon","grade109":"Mirmillon","_id":"60d06e9f6b813b37a727693f","name":"Aragornanus","victory":0,"defeat":0,"createdAt":"2021-06-21T10:49:03.909Z","updatedAt":"2021-09-17T14:25:18.416Z","__v":0,"clan":"60cf844a806c5041454b1d0b","id":"60d06e9f6b813b37a727693f"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06fc66b813b37a7276948","name":"Gammaction","victory":0,"defeat":0,"createdAt":"2021-06-21T10:53:58.481Z","updatedAt":"2021-09-17T14:25:18.416Z","__v":0,"clan":"60cf844a806c5041454b1d0b","id":"60d06fc66b813b37a7276948"},{"grade202":"Mirmillon","grade109":"Mirmillon","_id":"60efefa22f0527544f2c10d0","name":"Lahkdar","victory":0,"defeat":0,"createdAt":"2021-07-15T08:19:46.555Z","updatedAt":"2021-09-17T14:25:18.416Z","__v":0,"clan":"60cf844a806c5041454b1d0b","id":"60efefa22f0527544f2c10d0"}],"id":"60cf844a806c5041454b1d0b"},{"win":null,"matchs":null,"_id":"60cf872a3068573712cb970f","name":"Team KLODO","defeat":null,"points":4000,"createdAt":"2021-06-20T18:21:30.679Z","updatedAt":"2021-09-17T14:25:39.271Z","__v":0,"img":{"_id":"60d1c6b0715565be9bdfc82e","name":"klodo.gif","alternativeText":"","caption":"","hash":"klodo_031058a222","ext":".gif","mime":"image/gif","size":1007.62,"url":"/uploads/klodo_031058a222.gif","provider":"local","width":640,"height":360,"related":["60cf872a3068573712cb970f"],"createdAt":"2021-06-22T11:17:04.674Z","updatedAt":"2021-06-22T11:17:11.290Z","__v":0,"id":"60d1c6b0715565be9bdfc82e"},"players":[{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06b616b813b37a7276930","name":"Amarrow","victory":0,"defeat":0,"createdAt":"2021-06-21T10:35:13.313Z","updatedAt":"2021-09-17T14:25:39.245Z","__v":0,"clan":"60cf872a3068573712cb970f","id":"60d06b616b813b37a7276930"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06b726b813b37a7276931","name":"Fenrir d'Orion","victory":0,"defeat":0,"createdAt":"2021-06-21T10:35:30.250Z","updatedAt":"2021-09-17T14:25:39.245Z","__v":0,"clan":"60cf872a3068573712cb970f","id":"60d06b726b813b37a7276931"},{"grade202":"Mirmillon","grade109":"Provotactor","_id":"60d06ac56b813b37a727692c","name":"Khal","victory":0,"defeat":0,"createdAt":"2021-06-21T10:32:37.813Z","updatedAt":"2021-09-17T14:25:39.245Z","__v":0,"clan":"60cf872a3068573712cb970f","id":"60d06ac56b813b37a727692c"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06b946b813b37a7276933","name":"Raugorn","victory":0,"defeat":0,"createdAt":"2021-06-21T10:36:04.374Z","updatedAt":"2021-09-17T14:25:39.245Z","__v":0,"clan":"60cf872a3068573712cb970f","id":"60d06b946b813b37a7276933"},{"grade202":"Mirmillon","grade109":"Provotactor","_id":"60d06ad86b813b37a727692d","name":"Gimli","victory":2,"defeat":2,"createdAt":"2021-06-21T10:32:56.295Z","updatedAt":"2021-09-17T14:25:39.245Z","__v":0,"clan":"60cf872a3068573712cb970f","id":"60d06ad86b813b37a727692d"},{"grade202":"Champion","grade109":"Champion","_id":"60d06ab16b813b37a727692b","name":"Loempia","victory":0,"defeat":0,"createdAt":"2021-06-21T10:32:17.106Z","updatedAt":"2021-09-17T14:25:39.245Z","__v":0,"clan":"60cf872a3068573712cb970f","id":"60d06ab16b813b37a727692b"},{"grade202":"Provotactor","grade109":"Mirmillon","_id":"60d06b846b813b37a7276932","name":"Colleguos","victory":1,"defeat":2,"createdAt":"2021-06-21T10:35:48.187Z","updatedAt":"2021-09-17T14:25:39.245Z","__v":0,"clan":"60cf872a3068573712cb970f","id":"60d06b846b813b37a7276932"},{"grade202":"Mirmillon","grade109":"Provotactor","_id":"60d06b346b813b37a727692e","name":"Zed","victory":0,"defeat":0,"createdAt":"2021-06-21T10:34:28.894Z","updatedAt":"2021-09-17T14:25:39.245Z","__v":0,"clan":"60cf872a3068573712cb970f","id":"60d06b346b813b37a727692e"},{"grade202":"Provotactor","grade109":"Mirmillon","_id":"60d06bea6b813b37a7276934","name":"TK","victory":3,"defeat":1,"createdAt":"2021-06-21T10:37:30.138Z","updatedAt":"2021-09-17T14:25:39.245Z","__v":0,"clan":"60cf872a3068573712cb970f","id":"60d06bea6b813b37a7276934"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06b4f6b813b37a727692f","name":"Caddie","victory":0,"defeat":0,"createdAt":"2021-06-21T10:34:55.908Z","updatedAt":"2021-09-17T14:25:39.245Z","__v":0,"clan":"60cf872a3068573712cb970f","id":"60d06b4f6b813b37a727692f"}],"id":"60cf872a3068573712cb970f"},{"win":null,"matchs":null,"_id":"60cf87a93068573712cb9711","name":"Team SEL","defeat":null,"points":5600,"createdAt":"2021-06-20T18:23:37.715Z","updatedAt":"2021-09-17T14:26:12.817Z","__v":0,"img":{"_id":"60d58f91715565be9bdfc834","name":"la_rage_2.png","alternativeText":"","caption":"","hash":"la_rage_2_be027ed782","ext":".png","mime":"image/png","size":208.54,"width":439,"height":421,"url":"/uploads/la_rage_2_be027ed782.png","formats":{"thumbnail":{"name":"thumbnail_la_rage_2.png","hash":"thumbnail_la_rage_2_be027ed782","ext":".png","mime":"image/png","width":163,"height":156,"size":42.48,"path":null,"url":"/uploads/thumbnail_la_rage_2_be027ed782.png"}},"provider":"local","related":["60cf87a93068573712cb9711"],"createdAt":"2021-06-25T08:10:57.290Z","updatedAt":"2021-06-25T08:11:01.176Z","__v":0,"id":"60d58f91715565be9bdfc834"},"players":[{"grade202":"Mirmillon","grade109":"Champion","_id":"60d06c656b813b37a7276935","name":"Loken","victory":7,"defeat":4,"createdAt":"2021-06-21T10:39:33.855Z","updatedAt":"2021-09-17T14:26:12.793Z","__v":0,"clan":"60cf87a93068573712cb9711","id":"60d06c656b813b37a7276935"},{"grade202":"Provotactor","grade109":"Mirmillon","_id":"60d06cf26b813b37a7276938","name":"Edvald","victory":0,"defeat":0,"createdAt":"2021-06-21T10:41:54.805Z","updatedAt":"2021-09-17T14:26:12.793Z","__v":0,"clan":"60cf87a93068573712cb9711","id":"60d06cf26b813b37a7276938"},{"grade202":"Mirmillon","grade109":"Provotactor","_id":"60d06d3c6b813b37a727693a","name":"Sindarry","victory":1,"defeat":2,"createdAt":"2021-06-21T10:43:08.808Z","updatedAt":"2021-09-17T14:26:12.793Z","__v":0,"clan":"60cf87a93068573712cb9711","id":"60d06d3c6b813b37a727693a"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06d6c6b813b37a727693d","name":"MK","victory":0,"defeat":0,"createdAt":"2021-06-21T10:43:56.278Z","updatedAt":"2021-09-17T14:26:12.793Z","__v":0,"clan":"60cf87a93068573712cb9711","id":"60d06d6c6b813b37a727693d"},{"grade202":"Mirmillon","grade109":"Mirmillon","_id":"60d06c7e6b813b37a7276936","name":"Thieuthieu","victory":0,"defeat":0,"createdAt":"2021-06-21T10:39:58.190Z","updatedAt":"2021-09-17T14:26:12.793Z","__v":0,"clan":"60cf87a93068573712cb9711","id":"60d06c7e6b813b37a7276936"},{"grade202":"Mirmillon","grade109":"Provotactor","_id":"60d06d2e6b813b37a7276939","name":"Jean Yves","victory":0,"defeat":0,"createdAt":"2021-06-21T10:42:54.336Z","updatedAt":"2021-09-17T14:26:12.793Z","__v":0,"clan":"60cf87a93068573712cb9711","id":"60d06d2e6b813b37a7276939"},{"grade202":"Provotactor","grade109":"Mirmillon","_id":"60d06cd46b813b37a7276937","name":"MrLeNul","victory":0,"defeat":0,"createdAt":"2021-06-21T10:41:24.480Z","updatedAt":"2021-09-17T14:26:12.793Z","__v":0,"clan":"60cf87a93068573712cb9711","id":"60d06cd46b813b37a7276937"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06dc66b813b37a727693e","name":"Chabacks","victory":0,"defeat":0,"createdAt":"2021-06-21T10:45:26.486Z","updatedAt":"2021-09-17T14:26:12.793Z","__v":0,"clan":"60cf87a93068573712cb9711","id":"60d06dc66b813b37a727693e"},{"grade202":"Champion","grade109":"Mirmillon","_id":"60fda2632f0527544f2c10d1","name":"Wrykut","createdAt":"2021-07-25T17:41:55.947Z","updatedAt":"2021-09-17T14:26:12.793Z","__v":0,"clan":"60cf87a93068573712cb9711","id":"60fda2632f0527544f2c10d1"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60fda2852f0527544f2c10d2","name":"Bolrog","createdAt":"2021-07-25T17:42:29.133Z","updatedAt":"2021-09-17T14:26:12.793Z","__v":0,"clan":"60cf87a93068573712cb9711","id":"60fda2852f0527544f2c10d2"}],"id":"60cf87a93068573712cb9711"},{"win":null,"matchs":null,"_id":"60cf87bf3068573712cb9712","name":"Team RUCHE ","defeat":null,"points":5200,"createdAt":"2021-06-20T18:23:59.623Z","updatedAt":"2021-09-17T14:25:51.321Z","__v":0,"chef":"","img":{"_id":"60d1c6c3715565be9bdfc830","name":"ruche.png","alternativeText":"","caption":"","hash":"ruche_1d23e0a943","ext":".png","mime":"image/png","size":79.6,"width":192,"height":192,"url":"/uploads/ruche_1d23e0a943.png","formats":{"thumbnail":{"name":"thumbnail_ruche.png","hash":"thumbnail_ruche_1d23e0a943","ext":".png","mime":"image/png","width":156,"height":156,"size":65.68,"path":null,"url":"/uploads/thumbnail_ruche_1d23e0a943.png"}},"provider":"local","related":["60cf87bf3068573712cb9712"],"createdAt":"2021-06-22T11:17:23.102Z","updatedAt":"2021-06-22T11:17:25.595Z","__v":0,"id":"60d1c6c3715565be9bdfc830"},"players":[{"grade202":"Champion","grade109":"Champion","_id":"60d069356b813b37a7276922","name":"Exorcisst","victory":0,"defeat":0,"createdAt":"2021-06-21T10:25:57.575Z","updatedAt":"2021-09-17T14:25:51.295Z","__v":0,"clan":"60cf87bf3068573712cb9712","id":"60d069356b813b37a7276922"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d069c86b813b37a7276925","name":"Sharku","victory":0,"defeat":0,"createdAt":"2021-06-21T10:28:24.797Z","updatedAt":"2021-09-17T14:25:51.295Z","__v":0,"clan":"60cf87bf3068573712cb9712","id":"60d069c86b813b37a7276925"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06a756b813b37a727692a","name":"Thorin écu de chêne","victory":0,"defeat":0,"createdAt":"2021-06-21T10:31:17.804Z","updatedAt":"2021-09-17T14:25:51.295Z","__v":0,"clan":"60cf87bf3068573712cb9712","id":"60d06a756b813b37a727692a"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06a1f6b813b37a7276926","name":"ErwannWerty","victory":0,"defeat":0,"createdAt":"2021-06-21T10:29:51.215Z","updatedAt":"2021-09-17T14:25:51.295Z","__v":0,"clan":"60cf87bf3068573712cb9712","id":"60d06a1f6b813b37a7276926"},{"grade202":"Mirmillon","grade109":"Mirmillon","_id":"60d069636b813b37a7276924","name":"Utharlok","victory":0,"defeat":2,"createdAt":"2021-06-21T10:26:43.876Z","updatedAt":"2021-09-17T14:25:51.295Z","__v":0,"clan":"60cf87bf3068573712cb9712","id":"60d069636b813b37a7276924"},{"grade202":"Mirmillon","grade109":"Mirmillon","_id":"60d0694e6b813b37a7276923","name":"Rui","victory":0,"defeat":4,"createdAt":"2021-06-21T10:26:22.452Z","updatedAt":"2021-09-17T14:25:51.295Z","__v":0,"clan":"60cf87bf3068573712cb9712","id":"60d0694e6b813b37a7276923"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06a496b813b37a7276928","name":"Kyagara","victory":0,"defeat":0,"createdAt":"2021-06-21T10:30:33.690Z","updatedAt":"2021-09-17T14:25:51.295Z","__v":0,"clan":"60cf87bf3068573712cb9712","id":"60d06a496b813b37a7276928"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06a346b813b37a7276927","name":"Demonsdark","victory":0,"defeat":0,"createdAt":"2021-06-21T10:30:12.819Z","updatedAt":"2021-09-17T14:25:51.295Z","__v":0,"clan":"60cf87bf3068573712cb9712","id":"60d06a346b813b37a7276927"},{"grade202":"Provotactor","grade109":"Provotactor","_id":"60d06a596b813b37a7276929","name":"Alk-nico","victory":0,"defeat":0,"createdAt":"2021-06-21T10:30:49.581Z","updatedAt":"2021-09-17T14:25:51.295Z","__v":0,"clan":"60cf87bf3068573712cb9712","id":"60d06a596b813b37a7276929"}],"id":"60cf87bf3068573712cb9712"}]
        }
    },
    async fetch() {
      this.loading = true;
      this.loading = false;
    },
    head() {
    return {
      title: 'Clans ⚔️',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Retrouvez la liste des clans de l'évènement de l'Arène d'Arda, leurs joueurs et leurs titres dans cette terrible combat !",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'clans, bfme2, rotwk, elrohir',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Clans ⚔️',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Retrouvez la liste des clans de l'évènement de l'Arène d'Arda, leurs joueurs et leurs titres dans cette terrible combat !",
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@Elrohir_BFME',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://laguerredelanneau.vercel.app/arena/arene.webp',
        },
        { hid: 'og:title', name: 'og:title', content: 'Clans ⚔️' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://laguerredelanneau.vercel.app/arenedarda/clans',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://laguerredelanneau.vercel.app/arena/arene.webp',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            "Retrouvez la liste des clans de l'évènement de l'Arène d'Arda, leurs joueurs et leurs titres dans cette terrible combat !",
        },
      ],
    }
  },
}
</script>

<style>

</style>