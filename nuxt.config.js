export default {
  /*
  ** Nuxt target
  ** See https://events.laterredumilieu.fr//api/configuration-target
  */
  
  publicRuntimeConfig: {
    hostname: "https://events.laterredumilieu.fr",
  },

  ssr: false,
  target: 'static',

  loading: {
    color: 'orange',
    height: '3px',
    continuous: true,
    duration: 1000,
  },
  /*
  ** Headers of the page
  ** See https://events.laterredumilieu.fr//api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      // {
      //   hid: 'twitter:card',
      //   name: 'twitter:card',
      //   content: 'summary_large_image'
      // },
      // { hid: 'twitter:site', name: 'twitter:site', content: '@elrohir_bfme' },
      // {
      //   hid: 'twitter:url',
      //   name: 'twitter:url',
      //   content: 'https://events.laterredumilieu.fr/'
      // },
      // {
      //   hid: 'twitter:title',
      //   name: 'twitter:title',
      //   content: 'Events de la Terre du Milieu'
      // },
      // {
      //   hid: 'twitter:description',
      //   name: 'twitter:description',
      //   content:
      //     'Retrouvez les évènements de la Terre du Milieu, sur les jeux la Bataille pour la Terre du Milieu mais pas seulement'
      // },
      // {
      //   hid: 'twitter:image',
      //   name: 'twitter:image',
      //   content: 'https://events.laterredumilieu.fr/eventsltdm.webp'
      // },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      // { hid: 'og:site_name', property: 'og:site_name', content: 'La Terre du Milieu' },
      // { hid: 'og:type', property: 'og:type', content: 'website' },
      // {
      //   hid: 'og:url',
      //   property: 'og:url',
      //   content: 'https://events.laterredumilieu.fr/'
      // },
      // {
      //   hid: 'og:title',
      //   property: 'og:title',
      //   content: 'Events de la Terre du Milieu'
      // },
      // {
      //   hid: 'og:description',
      //   property: 'og:description',
      //   content:
      //     'Retrouvez les évènements de la Terre du Milieu, sur les jeux la Bataille pour la Terre du Milieu mais pas seulement'
      // },
      // {
      //   hid: 'og:image',
      //   property: 'og:image',
      //   content: 'https://events.laterredumilieu.fr/eventsltdm.webp'
      // },
      // {
      //   hid: 'og:image:secure_url',
      //   property: 'og:image:secure_url',
      //   content: 'https://events.laterredumilieu.fr/'
      // },
      // {
      //   hid: 'og:image:alt',
      //   property: 'og:image:alt',
      //   content: 'La Terre du Milieu'
      // }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://events.laterredumilieu.fr/`
      }
    ]
  },

  components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      '@nuxtjs/tailwindcss'
    ],

    tailwindcss: {
      // jit: true,
    },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
    '@nuxt/image',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    'nuxt-highcharts',
    '@nuxtjs/i18n'
  ],

  /* url: 'http://api.laterredumilieu.fr' */
  strapi: {
    url: "https://api.laterredumilieu.fr/"
  },

  env: {
    strapiBaseUri: "https://api.laterredumilieu.fr"
  },

sitemap: {
  hostname: 'https://events.laterredumilieu.fr',
  gzip: true,
  defaults: {
      priority: 1,
      lastmod: new Date()
  },
},

robots: {
  UserAgent: '*',
  Allow: "/",
  Sitemap: 'https://events.laterredumilieu.fr/sitemap.xml',
},

  pwa: {
    meta: {
      /* meta options */
      lang: 'fr',
      ogHost: 'https://laguerredelanneau.vercel.app',
      twitterCard: "Events de la Terre du Milieu",
      twitterCreator: "@Elrohir_bfme",
      theme_color: '#3E7A4A'
    },
    manifest: {
      name: "Events de la Terre du Milieu",
      description : "Retrouvez les évènements de la Terre du Milieu, sur les jeux la Bataille pour la Terre du Milieu mais pas seulement",
      lang: 'fr',
      useWebmanifestExtension: false,
    }
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    } 
  },

  generate: {
    fallback: true
},

  image: {
    domains: [
      'laguerredelanneau.vercel.app'
    ]
  },

  highcharts: {
    /* module options */
  },

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
        en: {
          welcome: 'Welcome to the events in Middle-earth',
          gde: "WFE",
          title_gdn: "The Northern Wars Tournament",
          title_bdd: "Battle of the Duets Tournament",
          archives: "Archives of Nùmenor",
          gdn_menu: "Tournament: The Northern Wars",
          gdn_menu_info: "Organized by Elrohir which started on November 19, 2021",
          gdn_menu_button: "Tournament in progress",
          gde_menu: "War for Eriador",
          gde_menu_info: "9 Factions for the fight of Eriador!",
          gde_menu_button: "The Eriador War began on Monday, February 7",
          bdd_menu: "The Battle for Duo Land",
          bdd_menu_info: "Tournament on 1 and launched on January 13, 2022",
          bdd_menu_button: "Tournament Information",
          layout_gde_title: "The Northern Wars Tournament",
          layout_gde_matchs: "Matches",
          layout_gde_pres: "Présentation",
          layout_gde_insc: "Introduction",
          layout_gde_video: "Videos",
          layout_gde_regle: "Rules",
          layout_gde_joueur: "Players",
          gde: {
            camp_bien: "Good Camp",
            camp_mal: "Evil Camp",
            territoires: "Territories",
            score: "Score",
            debut: "BEGIN",
            fin: "END",
            telecharger: "Download all maps",
            chef: "Chief of the",
            argent: "Money",
            victoire: "Victory",
            defaite: "Defeat"
          },
          joueurs: {
            title: "List of players",
            info: "If there is a problem please contact Elrohir on the Middle Earth Discord",
            victoire: "Victory",
            defaite: "Defeat",
            ratio: "Ratio"
          },
          regles: {
            title: "The rules!"
          },
          videos: {
            title: "Trailer",
            angmar: "TRAILER OF THE ANGMAR",
            gondor: "TRAILER OF GONDOR",
            arnor: "TRAILER OF ARNOR",
            nain: "TRAILER OF THE DWARFS",
            isengard: "TRAILER ISENGARD"
          },
          inscription: {
            title: "WFE: Registration is now open!",
            info: "On your keyboards, it's time to register for the Eriador War event!",
            description: "Registrations are indeed open, initially until Sunday 30/01 23:59. The registration form will remain open after this date but late registrations may not be considered for Round 1. Make sure you understand the rules and information requested in the form. If in doubt, ask! Be careful not to submit offensive or objectionable nicknames or profile pictures (we're asking for your common sense here). Also, avoid using non-Latin characters (Russian alphabet, etc.) in your nickname.",
            attention: "Please note: validating the registration form does not guarantee that your first choice will be assigned to you; it will depend on the assignments that will be made by the GMs. A quick registration will nevertheless increase your chances of being assigned to your desired faction! Also, make sure you have entered the correct information, including your Discord ID. Your registration will be put on hold until the correct information is provided.",
            formulaire: "Link to the registration form",
            prerequis: "Prerequisites",
            need: "You need BFME2 1.06 + ROTWK 2.02 v.8.5",
            tutoBFME: "TUTO BFME2",
            tutoROTWK: "TUTO ROTWK",
            gdn: "You need to install the mod : The Northern Wars",
            tutoGDN: "TUTO MOD The Northern Wars"
          },
          presentation: {
            title: "A large-scale event!",
            desc: "Fight in Eriador for GOOD or EVIL to achieve victory!",
            factions: "9 Factions",
            ralliez: "Join your choice: Angmar, Arnor, Elf, Goblin, Gondor, Isengard, Mordor, Dwarf, Rohan.",
            semaine: "One move per week!",
            destin: "The fate of Eriador is in your hands. Each week you will move on an interactive map.",
            regions: "64 regions",
            guerre: "A War between GOOD and EVIL. A common goal but also goals for each unique faction!",
            participer: "How to participate in this adventure?",
            pres: "The War of Eriador is the name of the western region of Middle-earth, an important area but also unknown to the general public. The principle of this event is based on the game mode: 'The War of the Ring'.",
            mode: "This new mode combines turn-based elements in the style of the board game Risk, with real-time skirmishes. The map is divided into territories. Each turn, the player can move around the map. Either on territories he has acquired, or move his armies into neutral territories that come under his control, or attack enemy territories. In the latter case, the outcome of the battle must be played in real time. The winner of the battle wins the territory and the loser must reappear in his main city. To win the game, players must either control the enemy's main territory or dominate a set number of territories. The conditions of victory are still under consideration.",
            inscription: "Registration !",
            act1: "Act 1: Account of the Eriador War by Gildor, servant of the House of Elrond of Rivendell.",
            act1_info: "In the year 3019 of the Third Age, since the Sun and the Moon have risen in the sky, Middle-earth is close to the final tipping point. After the terrible conflicts that occurred during the War of the Ring, what was good and pure in this land is about to be destroyed forever.",
            act2: "Act 2",
            act2_info: "In the year 3018, the peoples of Middle-earth fought a merciless war for total domination. The Elves united, the Dwarves emerged from their mountains, Gondor prepared its defenses, Rohan gathered its riders, Isengard awoke, the Goblins infested the mountains, Angmar rose from its icy ashes, and Mordor was ready for war.",
            act3: "Act 3",
            act3_info: "In Eriador, the war was quick against Angmar, the painful memory of his misdeeds several centuries ago pushed Elves and Dwarves to unite to destroy Carn Dûm again.  But to the south, it was Gondor that fell first. The Dunedans proved too weak to face the violence and ferocity of the armies of Mordor. Minas Tirith fell quickly, despite the intervention of Rohan.",
            act4: "Act 4",
            act4_info: "Then came the fall of Dol Amroth, which sealed the fate of the Numenorean kingdom in exile. At the same time, Rohan took the fortress of Isengard, but the White Hand held out for a long time in Eriador and in the Black Forest from Dol Guldur before collapsing. The Goblins allied themselves with the forces of Good in the hope of being spared and rarely left Moria. The Dwarves attempted several assaults on Mordor but never reached Barad-dur. It was the people of Durin who fell as a result of our people's change of alliance. The joint attacks of Mordor and the Eldar caused the Dwarves to disappear into the depths of the northern mountains.",
            act5: "Act 5",
            act5_info: "With the disappearance of the Dwarves, the Goblins were left without allies to support their defenses, as Rohan was caught between the Elves and Mordor. We managed to open the western gates of Moria and dislodge the Goblins, who in turn disappeared without a trace. The rohirrims resisted relentlessly for quite some time before being dispersed after the fall of Helm's Deep. From then on, only our people and the servants of the Dark Enemy remained. With our holdings throughout the west, we thought the Valar were with us in this final battle against the Enemy. But fate was once again cruel to us with our defeat at Minhiriath which forced us to retreat further into Eriador, but where the Enemy also suffered many losses in his own army and was forced to retreat east of the Misty Mountains.",
            act6: "It is thus in this year 3019 of our Age, that the destiny of many beings in Middle Earth must be decided. No one can escape, we must win or be won. After our defeat in Minhiriath, we set out for Mithlond to regroup and decide what to do, but we now know that we cannot defeat the darkness alone. To the north, the dwarves have reappeared in the Halls of Thorin, rebuilding their defensive forces. After deliberations between our peoples, a new alliance was agreed upon, against the Enemy. In the rest of Eriador, the Men gathered in different places. In Cardolan, the rohirrims, exiled from their lands, gathered near the fortified tower of Dol Tinereb to prepare a counter offensive. Further north, the Dunedain of Gondor who fled the destruction in Minas Tirith and Dol Amroth took refuge in the ruins of Fornost, the ancient capital of Arthedain. The influx of refugees caused the Northern Dunedain to gather and rebuild their former homes in Annuminas and Fornost. The ancient kingdom of Arnor, founded by Elendil, was reborn to once again counter the threat of Mordor. While the Arnorians have taken back their capital from Annuminas, they have entrusted the rest of Gondor with the management of Fornost. All have decided to join the coalition in order to repel the next waves of evil that will break over this land.",
            act7: "For toward the Misty Mountains, Sauron's forces are gathering. His forces, decimated at Minhiriath, have reconstituted themselves and set up camp in the mountains. The Goblins, thought to be extinct, have reappeared in GoblinTown, and now pledge allegiance to the Dark Lord who has promised them vengeance against the people who betrayed them. In the north, Angmar is once again regenerated by the Witch-King who intends to put down the Dunedain once and for all. In the south, Saruman has restarted the forges of Isengard and is preparing new armies for war, determined to finish off Rohan and put a definitive white hand on its lands.",
            faction: "Factions of the Eriador War",
            angmar_desc: "Defeated after only a few weeks of fighting the Dwarves and Elves, Sauron sent his most trusted servant, the Witch-King, to regenerate the icy kingdom of Angmar. After their defeat, the black Numenoreans hid in the mountains, fearing the wrath of the Eldar. The trolls and orcs were able to take refuge in the vastness of Forodwaith where no one would come looking for them. As in the past, the Witch-King had to gather his forces and rebuild Carn Dûm. Slave masters once again serve the Iron Crown, Numenoreans once again swear fealty to the darkness, and orcs, trolls and wolves rally to the Witch-King. Soon it is time for revenge for his minions, who now have the opportunity to break the Free Peoples. Fearing no opponent, they would be delighted to take over the Grey Havens to exact their revenge. But the Elves will not be alone, the Dwarves and Men will be ready to defend Eriador fiercely, especially as Arnor has also risen from his ashes. An opportunity for the Witch-King to finish off the Dunedain and to sweep away any being that would resist Lord Sauron.",
            arnor_desc: "The Northern Dunedain participated sporadically in the War of the Ring, the vast majority preferring to stay on the outskirts of the Shire and Bree which they had sworn to protect. The quick defeat of Angmar allowed them to act more effectively against the bandits of Eriador. But the defeats of Gondor, the Dwarves, Rohan and then the Elves at Minhiriath had great consequences for the country. Refugees flocked to Eriador from almost all of Middle-earth. Faced with such an influx, the Northern Dunedain could no longer use the same methods to protect the population. So they recruited from among the refugees. Trading their prowling cloaks for armor, shields, swords and spears, they gathered under the banner of the Seven Stars. With their newly formed forces, the Northern Dunedain rebuilt Annuminas, the capital of Elendil's kingdom, Arnor. Meeting with the Elves in Mithlond, it was proposed that a Grand Alliance be formed, like the one founded by Elendil and Gil-Galad in the Second Age against Sauron. Thus was founded the Great Alliance of Elves, Men and Dwarves again against the Dark Lord. The kingdom is restored, the broken sword is reforged and the Dunedain intend to chase the Evil from its lands until they bring the war to Barad-dûr.",
            elfe: "Elven",
            elfe_desc: "For as long as anyone can remember, the first Children of Iluvatar have always lived on Arda. In the Third Age, the world was aging and many of the Eldar began to look westward to Valinor. The return of Sauron precipitated the departure of many of them, exhausted by centuries of struggle. But some remained in Middle-earth, many fighting to overthrow the Dark Lord. Their defeat at Minhiriath caused them to retreat and change their strategy. Bringing together the factions of Men and Dwarves, a new Grand Alliance will be their last hope to push the Darkness out of Eriador and then Middle-earth once and for all. For if Sauron were to take over Eriador, there would be no choice for the Eldar but to go West and never return.",
            gobelin: "Goblin",
            gobelin_desc: "Defeated by the alliance of Elves and Mordor, abandoned by all, the Goblins hid in the dark vastness of Moria, biding their time. When the War of the Ring ended, they poured back into the Misty Mountains, seeking the victor. But it was Sauron who found them first, and claiming to be the victor he forced the Goblins into submission. Having to bow to the Dark Lord, they had no choice but to prepare for war in Eriador. If they did not have a great desire to serve the Lord of Mordor, they nevertheless dreamed of revenge. Revenge against the Free Peoples who abandoned them. The Elves who almost condemned them to extermination, the dwarves, the rohirrims, all of them must pay for their treason. This hatred is of course exploited by Sauron, who swore to offer them the riches of the Blue Mountains that the Dwarves jealously guard. Drums thunder in the depths, the war machine starts, goblins gather, trolls come out of the caves, giants descend from their mountains, spiders want to join the coming feast. Revenge is on the march!",
            gondor_desc: "The loss of the White City was a terrible blow to the Dunedans. The orcs ravaged the streets, took over the palace and burned the White Tree. Fortunately, a seed was saved and placed in a safe place where, when the day comes, the Dunedain will reclaim their lands and free Gondor from Sauron's control. Taking refuge in Eriador, the Gondorians were welcomed by the Elves and the Northern Dunedain who helped them settle in the ancient fortress of the Arthedain kingdom: Fornost. Rebuilding the fortress from top to bottom, the Gondorians were able to gather around their captains, restore themselves and prepare new forces for the new war in Eriador. They are aware of the need to defend this land at all costs, so they joined the new Great Alliance of Elves, Men and Dwarves without hesitation, hoping that as soon as evil is driven out of Eriador, they will be able to turn south quickly.",
            isengard_desc: "Thinking he had Rohan under his control, Saruman was surprised by Rohan's betrayal of him, and the rapid loss of Orthanc undermined his own plans for domination of Middle-earth. He nevertheless tried to lead the War of the Ring from Imladris and Dol Guldur, but the lack of means forced him to go into exile in Mordor. Since then, the White wizard has also had to submit to the Dark Lord. The victory of the latter in the War of the Ring, allowed Saruman to recover Isengard and to take possession of part of Rohan. But of course, he could not be satisfied with the situation. He was surprised, however, by the fierce resistance of the Free Peoples, who forced Sauron to withdraw from Eriador. But this was temporary, and he now had the task of preparing a new army to destroy the forces of Good. This new war is another opportunity for the White Wizard to correct his creations. The furnaces and forges of Isengard work day and night. From the pits come new generations of uruk-hai, more powerful and terrible than the previous ones. The war that will be waged in Eriador will be an opportunity to test the strength of its new orcs, to destroy what remains of Rohan and other peoples after all. The White Hand may well serve the ambitions of the Dark Lord for the time being. But perhaps when the time comes, it will be time for Saruman to realize greater ambitions, for Sauron has not yet recovered the One, and the Wizard's spies are always on the lookout, spying on every move in Middle-earth. And what if the war in Eriador allowed the rise of a new power?",
            mordor_desc: "Since his return to Middle-earth in the Third Age, Sauron has been consolidating his power in Mordor and strengthening his forces. Gathering under his banner orcs, trolls and men, he won the War of the Ring and placed the factions of Good in an extremely delicate position by rejecting them towards Eriador. But as great as his victory was, the Dark Lord was not satisfied, he had hoped for a total victory. His victory at Minhiriath gave him most of Middle-earth, but it came at a cost. The elves were defeated but retreated in good order to Mithlond, the other factions of Good were also able to take refuge throughout Eriador, ready to fight to the end. His army was decimated and he was forced to retreat, and despite the fact that the War of the Ring was won, the One still escaped Sauron, not knowing where he is now. These setbacks allowed Good to reorganize and rebuild its forces. The Lord of Mordor did the same and built an encampment in the Misty Mountains to prepare for a general invasion. The Dark Lord gathered other servants around him in order to get rid of the Free Peoples once and for all and plunge Middle-earth into darkness.",
            nain: "Dwarf",
            nain_desc: "Shaken after the loss of Erebor, this proud and robust people, descendants of Durin, wandered for months to find a place beyond the reach of the Darkness of Mordor. As fate would have it, they gathered in Thorin's Palace, where the legendary king was also exiled. When the elven emissaries approached them, they hesitated greatly, remembering the betrayal of the elves during the War of the Ring. But faced with the need to repel the forces of evil, and knowing that they could not barricade themselves in the mountains indefinitely, they joined the Great Alliance of Elves, Dwarves and Men. From the Blue Mountains, the Dwarves build mines and forges to prepare weapons and armor for the coming war. ",
            rohan_desc: "The Horse Lords had their hands full during the War of the Ring and were the most tragic victims. Sandwiched between Mordor and the Eldar, they lost their lands and their few strongholds, forced into exile like their nomadic Eotheod ancestors. But they had done enough damage in their path that Sauron's forces were slowed down and forced to retreat despite their victory at Minhiriath. Protected by the horsemen, the Rohirrim people went west, towards Eriador, taking care not to get too close to the Elves to whom they had a very strong resentment. They settled in Cardolan near an old fortified tower that they rebuilt as they pleased. From there, they launched raids against small settlements of orcs gathering closer and closer to Eriador. But they soon realized that they could not fight the coming storm alone. That is why they finally joined the Great Alliance of Elves, Men and Dwarves.",
            contact: "Let's keep in touch!",
            information: "All the information to follow the event",
            info_1: "The Eriador War",
            info_2: "Interactive map",
            info_3: "Registration",
            follow: "Follow the information",
            tdm: "The Middle-earth"
          },
          matchs: {
            tour: "TOUR",
            matchs: "matches",
            joueurs: "Joueurs",
            resulat: "Players",
            aucun: "No Combat for the moment!",
            participer: "If you want to participate in the event just join the Discord and take a faction. For more information see the rules.",
          }
        },
        fr: {
          welcome: 'Bienvenue sur les évènements de la Terre du Milieu',
          gde: "GDE",
          title_gdn: "Tournoi Les Guerres du Nord",
          title_bdd: "Tournoi La Bataille des Duo",
          archives: "Archives de Nùmenor",
          gdn_menu: "Tournoi : Les Guerres du Nord",
          gdn_menu_info: "Organisé par Elrohir qui a commencé le 19 Novembre 2021",
          gdn_menu_button: "Tournoi en cours",
          gde_menu: "La Guerre pour l'Eriador",
          gde_menu_info: "9 Factions pour la lutte de l'Eriador !",
          gde_menu_button: "La Guerre de l'Eriador a débuté depuis le Lundi 7 février",
          bdd_menu: "La Bataille pour la Terre des Duo",
          bdd_menu_info: "Tournoi sur le 1 et lancé le 13 janvier 2022",
          bdd_menu_button: "Information sur le tournoi",
          layout_gde_title: "La Guerre de l'Eriador",
          layout_gde_matchs: "Matchs",
          layout_gde_pres: "Présentation",
          layout_gde_insc: "Inscription",
          layout_gde_video: "Vidéos",
          layout_gde_regle: "Règles",
          layout_gde_joueur: "Joueurs",
          gde: {
            camp_bien: "Camp du Bien",
            camp_mal: "Camp du Mal",
            territoires: "Territoires",
            score: "Score",
            debut: "DEBUT",
            fin: "FIN",
            telecharger: "Télécharger toutes les cartes",
            chef: "Chef de la Faction du",
            argent: "Argent",
            victoire: "Victoire",
            defaite: "Défaite"
          },
          joueurs: {
            title: "Listes des joueurs",
            info: "Si il y'a un souci veuillez contacter Elrohir sur le Discord de la Terre du Milieu merci",
            victoire: "Victoire",
            defaite: "Défaite",
            ratio: "Ratio"
          },
          regles: {
            title: "Les règles !"
          },
          videos: {
            title: "Bande Annonce",
            angmar: "BANDE ANNONCE DE L'ANGMAR",
            gondor: "BANDE ANNONCE DU GONDOR",
            arnor: "BANDE ANNONCE D'ARNOR",
            nain: "BANDE ANNONCE DES NAINS",
            isengard: "BANDE ANNONCE ISENGARD"
          },
          inscription: {
            title: "GDE : C'est parti pour les inscriptions !",
            info: "A vos claviers, le temps est venu de s'inscrire à l'évènement de la Guerre de l'Eriador !",
            description: "Les inscriptions sont en effet ouvertes, dans un premier temps jusqu'au dimanche 30/01 23h59. Le formulaire d'inscription restera ouvert après cette date mais les inscriptions tardives pourraient ne pas être prises en compte pour le tour 1. Assurez-vous de bien avoir compris les règles et les informations demandées dans le formulaire. En cas de doute, demandez ! Faites attention à ne pas soumettre de pseudo ou photo de profil offensants ou choquants (nous faisons ici appel à votre bon sens). Évitez également les caractères non-latins (alphabet russe, etc) dans votre pseudo.",
            attention: "Attention : le fait d'avoir validé le formulaire d'inscription ne garantit en rien que votre premier choix vous sera attribué ; cela dépendra des assignations qui seront réalisées par les MJ. Une inscription rapide augmentera néanmoins vos chances d'être assigné à votre faction souhaitée ! Vérifiez bien aussi que vous avez entré les bonnes informations, notamment concernant votre ID Discord. Votre inscription sera mise en suspens jusqu'à ce que l'information correcte soit donnée.",
            formulaire: "Lien du formulaire d'inscription",
            prerequis: "Prérequis",
            need: "Il faut avoir BFME2 1.06 + ROTWK 2.02 v.8.5",
            tutoBFME: "TUTO BFME2",
            tutoROTWK: "TUTO ROTWK",
            gdn: "Il faut installer le mod : Les Guerres du Nord",
            tutoGDN: "TUTO MOD Les Guerres du Nord"
          },
          presentation: {
            title: "Un évènement à grande échelle !",
            desc: "Combattez dans l'Eriador pour le BIEN ou le MAL pour remporter la victoire !",
            factions: "9 Factions",
            ralliez: "Ralliez-vous votre de choix : Angmar, Arnor, Elfe, Gobelin, Gondor, Isengard, Mordor, Nain, Rohan.",
            semaine: "Un déplacement par semaine !",
            destin: "Le destin de l'Eriador est entre vos mains. Chaque semaine vous allez vous déplacer sur une carte interactive.",
            regions: "64 régions",
            guerre: "Une Guerre entre le BIEN et le MAL. Un objectif commun mais aussi des objectifs pour chaque faction unique !",
            participer: "Comment participer à cette aventure ?",
            pres: "La Guerre de l'Eriador est le nom de la région ouest de la Terre du Milieu, une zone importante mais aussi méconnue du grand public. Le principe de cette évènement reprend le mode de jeu : 'La Guerre de l'Anneau'.",
            mode: "Ce nouveau mode combine des éléments de tour par tour à la manière du jeu de plateau Risk, avec des escarmouches en temps réel. La carte est divisée en territoires. À chaque tour, le joueur peut se déplacer sur la carte. Soit sur des territoires qu'il a acquis, soit déplacer ses armées dans des territoires neutres qui passent sous son contrôle, soit attaquer des territoires ennemis. Dans ce dernier cas, l'issue de l'affrontement doit être joué lors d'une partie en temps réel. Le vainqueur de la bataille gagne le territoire et le perdant doit réaparaitre dans sa cité principal. Pour gagner le jeu, les joueurs doivent, soit contrôler le territoire principal de l'ennemi, soit dominer un nombre déterminé de territoires. Les conditions de victoire sont encore en réflexion.",
            inscription: "Inscription !",
            act1: "Act 1 : Récit de la Guerre d’Eriador par Gildor, serviteur de la Maison d’Elrond de Fondcombe.",
            act1_info: "En l'an 3019 du Troisième  Age, depuis que le Soleil et la Lune se sont élevés dans le ciel, la Terre du Milieu est proche du point de basculement définitif. Après les terribles conflits survenus lors de la Guerre de l’Anneau, ce qui existait de bon et pur en cette terre s’apprête à être détruit pour toujours.",
            act2: "Act 2",
            act2_info: "En l’an 3018, les peuples de la Terre du Milieu se sont livrés une guerre sans merci pour la domination totale. Les Elfes se sont unifiés, les Nains sont sortis de leurs montagnes, le Gondor a préparé ses défenses, le Rohan avait réuni ses cavaliers, l’Isengard s’était éveillé, les Gobelins infestaient les montagnes, l’Angmar renaissait de ses cendres glaciales, et le Mordor était prêt à la guerre.",
            act3: "Act 3",
            act3_info: "En Eriador, la guerre fut rapide contre Angmar, le souvenir douloureux de ses méfaits il y a plusieurs siècles ont poussé Elfes et Nains à s’unir pour détruire à nouveau Carn Dûm.  Mais au sud, ce fut le Gondor qui chuta le premier. Les Dunedains s'avérèrent trop faibles face à la violence et la férocité des armées du Mordor. Minas Tirith tomba rapidement et ce malgré l’intervention du Rohan.",
            act4: "Act 4",
            act4_info: "Puis ce fut la chute de Dol Amroth qui scella le destin du royaume numénoréen en exil. Dans le même temps, le Rohan prit la forteresse d’Isengard, mais la Main Blanche résista longtemps en Eriador et dans la Forêt Noire depuis Dol Guldur avant de s’effondrer. Les Gobelins se sont alliés aux forces du Bien dans l’espoir d’être épargnés et sortirent rarement de la Moria. Les Nains tentèrent plusieurs assauts contre le Mordor sans jamais parvenir à Barad-dûr. Ce fut d’ailleurs le peuple de Durin qui chuta suite au changement d’alliance de notre peuple. Les attaques conjointes du Mordor et des Eldar ont poussé les Nains à disparaître dans les profondeurs des montagnes du nord.",
            act5: "Act 5",
            act5_info: "Avec la disparition des Nains, les Gobelins se retrouvaient sans alliés pouvant soutenir leurs défenses, le Rohan étant aux prises entre les Elfes et le Mordor. Nous avons réussi à ouvrir les portes ouest de la Moria et à en déloger les Gobelins qui ont à leur tour disparu sans laisser des traces. Les cavaliers rohirrims ont résisté sans relâche pendant un bon moment avant d’être dispersés après la chute du Gouffre de Helm. Dès lors, il ne restait que notre peuple et les serviteurs du Sombre Ennemi. Avec nos possessions sur tout l’ouest, nous pensions que les Valar étaient avec nous dans cette lutte finale contre l’Ennemi. Mais le destin nous fut une fois de plus cruel avec notre défaite à Minhiriath qui nous obligea à nous replier plus loin en Eriador, mais où l’Ennemi a également accusé beaucoup de pertes dans sa propre armée et fut obligé à se retirer à l’est des Monts Brumeux.",
            act6: "C’est donc en cette année 3019 de notre Age, que doit se décider le destin de bien des êtres en Terre du Milieu. Nul ne pourra y échapper, nous devrons vaincre ou être vaincu. Après notre défaite en Minhiriath, nous avons fait route vers Mithlond afin de nous regrouper et de décider de la marche à suivre, mais nous savons désormais que nous ne pourrons vaincre les ténèbres seuls. Au nord, les nains sont réapparus dans les Halls de Thorin, reconstituant leurs forces défenses. Après des délibérations entre nos peuples, il fut convenu d’une nouvelle alliance, contre l’Ennemi. Dans le reste de l’Eriador, les Hommes se sont rassemblés en différents endroits. Dans le Cardolan, les rohirrims, exilés de leurs terres, se sont rassemblés près de la tour fortifiée de Dol Tinereb afin de préparer une contre offensive. Plus au nord, les Dunedains du Gondor ayant fui les destructions à Minas Tirith et de Dol Amroth se sont réfugiés dans les ruines de Fornost, l’ancienne capitale d’Arthedain. Les afflux de réfugiés ont poussé les Dunedains du Nord à se rassembler et à reconstruire leurs anciens foyers à Annuminas et Fornost. L’ancien royaume d’Arnor fondé par Elendil, renaît de nouveau pour contrer une nouvelle fois la menace du Mordor. Si les arnoriens ont repris leur capitale à Annuminas, ils ont confié au reste du Gondor la gestion de Fornost. Tous ont décidé de rejoindre la coalition afin de repousser les prochaines vagues du Mal qui déferleront sur cette terre.",
            act7: "Car vers les Monts Brumeux, les forces de Sauron se rassemblent. Ses forces décimées à Minhiriath se sont reconstituées et ont établi un camp dans les montagnes. Les Gobelins que l'on pensait disparu, sont réapparu dans Gobelinville, et prêtent désormais allégeance au Seigneur des Ténèbres qui leur a promis vengeance contre les peuples les ayant trahis. Au nord, Angmar est de nouveau régénéré par le Roi-Sorcier qui entend mettre à bas les Dunedains une bonne fois pour toute. Au sud, Saroumane refait fonctionner les forges d’Isengard et prépare de nouvelles armées à la guerre, bien décidé d’en finir contre le Rohan afin de mettre une main blanche définitive sur ses terres.",
            faction: "Les factions de la Guerre de l'Eriador",
            angmar_desc: "Terrassé après seulement quelques semaines de combats contre les Nains et les Elfes, Sauron renvoya son serviteur le plus fidèle, le Roi-Sorcier, afin de régénérer le royaume glacial d’Angmar. Après leur défaite, les numénoréens noirs se cachèrent dans les montagnes, craignant le courroux des Eldar. Les trolls et orques purent se réfugier dans les immensités du Forodwaith où nul ne serait venu les chercher. Comme par le passé, le Roi-Sorcier dû rassembler ses forces et rebâtir Carn Dûm. Les maîtres d’esclaves servent à nouveau la Couronne de Fer, les numénoréens jurent à nouveau fidélité aux ténèbres, et les orques, trolls et loups se rallient au Roi-Sorcier. L’heure est bientôt à la revanche pour ses serviteurs, qui ont désormais l’occasion de briser les Peuples Libres. Ne craignant aucun adversaire, ils seraient ravis d’investir les Havres Gris afin d'assouvir leur vengeance. Mais les Elfes ne seront pas seuls, les Nains et les Hommes seront prêts à défendre férocement l’Eriador, d’autant qu’Arnor a pu lui aussi renaître de ses cendres. Une occasion pour le Roi-Sorcier d'en finir avec les Dunedains et de balayer tout être qui résisterait au Seigneur Sauron.",
            arnor_desc: "Les Dunedains du Nord participèrent sporadiquement à la Guerre de l’Anneau, la grande majorité préférant rester aux abords de la Comté et de Bree qu’ils avaient juré de protéger. La défaite rapide d’Angmar leur a permis d’agir plus efficacement contre les bandits d’Eriador. Mais les défaites du Gondor, des Nains, du Rohan puis des Elfes à Minhiriath ont eu de grandes conséquences sur le pays. Des réfugiés affluèrent en nombre en Eriador, provenant de presque toute la Terre du Milieu. Devant un tel afflux, les Dunedains du nord ne pouvaient plus utiliser les mêmes méthodes afin de protéger les populations. Dès lors, ils recrutèrent parmi les réfugiés. Troquant leurs manteaux de rôdeurs contre des armures, des boucliers, des épées et des lances, ils se réunirent autour de la bannière des Septs Étoiles. Leurs forces nouvellement constituées, les dunedains du Nord reconstruisent Annuminas, la capitale du royaume d’Elendil, Arnor. Se réunissant avec les Elfes à Mithlond, il fut proposé la création d’une Grande Alliance comme celle que fonda Elendil et Gil-Galad au Second Age contre Sauron. Ainsi fut fondée la Grande Alliance des Elfes, des Hommes et des Nains à nouveau contre le Seigneur Ténébreux. Le royaume est restauré, l’épée brisée est reforgée et les Dunedains entendent bien chasser le Mal de ses terres jusqu’à porter la guerre à Barad-dûr.",
            elfe: "Elfe",
            elfe_desc: "Aussi loin que l’on s’en souvienne, les premiers Enfants d’Iluvatar, ont toujours vécu sur Arda. Au Troisième  Age, le monde vieillissait et pour beaucoup parmi les Eldar commençaient à regarder vers l’ouest, vers Valinor. Le retour de Sauron précipita le départ de nombre d’entre eux, épuisé par des siècles de lutte. Mais il en fut qui restèrent en Terre du Milieu, beaucoup combattirent afin de renverser le Seigneur Ténébreux. Leur défaite à Minhiriath les a poussés à se retrancher et à changer de stratégie. Réunissant les factions des Hommes et des Nains, une nouvelle Grande Alliance qui sera leur ultime espoir de repousser les Ténèbres d’Eriador puis de la Terre du Milieu une bonne fois pour toute. Car si Sauron venait à s’emparer de l’Eriador, il n’y aurait d’autre choix pour les Eldar que de partir vers l’Ouest pour ne jamais revenir.",
            gobelin: "Gobelin",
            gobelin_desc: "Défaits par l’alliance des Elfes et du Mordor, abandonnés de tous, les Gobelins se sont terrés dans les immensités obscures de la Moria, attendant leur heure. Lorsque la Guerre de l’Anneau prit fin, ils se déversèrent à nouveau dans les Monts Brumeux, cherchant à connaître le vainqueur. Mais ce fut Sauron qui les trouva le premier, et clamant être le vainqueur il força les Gobelins à la soumission. Devant désormais courber l’échine devant le Seigneur Ténébreux, ils n’eurent d’autres choix que de se préparer à la guerre en Eriador. S’ils n’avaient pas un grand désir de servir le Seigneur du Mordor, ils rêvent néanmoins de vengeance. Une vengeance contre les Peuples Libres qui les ont abandonnés. Les Elfes qui ont failli les condamner à l’extermination, les nains, les rohirrims, tous doivent payer pour leur trahison. Cette haine est bien sûr exploitée par Sauron qui en prime leur jura de leur offrir les richesses des Monts Bleus que gardent jalousement les Nains. Des tambours tonnent dans les profondeurs, la machine de guerre se met en marche, les gobelins se rassemblent, des trolls sortent des cavernes, les géants descendent de leurs montagnes, les araignées veulent se joindre au festin à venir. La vengeance est en marche !",
            gondor_desc: "La perte de la cité Blanche fut un coup terrible pour les Dunedains. Les orques ont ravagé les rues, investi le palais et brûlé l’Arbre Blanc. Fort heureusement, une graine a pu être sauvée et mise en lieu sûr où lorsque le jour sera venu, les Dunedains iront réclamer leurs terres et libéreront le Gondor de la mainmise de Sauron. Se réfugiant en Eriador, les Gondoriens furent accueillis par les Elfes et les Dunedains du Nord qui les aidèrent à s’installer dans l’ancienne forteresse du royaume d’Arthedain : Fornost. Rebâtissant la forteresse de fond en comble, les gondoriens purent se rassembler autour de leurs capitaines, se restaurer et préparer de nouvelles forces en vue de la nouvelle guerre qui se prépare en Eriador. Ils sont conscients de la nécessité de défendre à tout prix cette terre, c’est pourquoi ils rejoignirent sans hésiter la nouvelle Grande Alliance des Elfes, des Hommes et des Nains, en espérant que dès que le Mal sera chassé d’Eriador, ils pourront se tourner rapidement vers le sud.",
            isengard_desc: "Pensant avoir eu le Rohan sous sa coupe, Saroumane fut surpris par la trahison du Rohan à son encontre, la perte rapide d’Orthanc mis à mal ses propres projets de domination de la Terre du Milieu. Il a néanmoins tenté de mener la Guerre de l’Anneau depuis Imladris puis Dol Guldur, mais le manque de moyens l'a contraint à partir en exil au Mordor. Depuis, le magicien Blanc dû se soumettre lui aussi au Seigneur Ténébreux. La victoire de ce dernier à la Guerre de l’Anneau, permit à Saroumane de recouvrer Isengard et de prendre possession d’une partie du Rohan. Mais bien sûr, il ne pouvait se satisfaire de la situation. Il fut toutefois surpris par la résistance acharnée des Peuples Libres qui poussèrent Sauron à se retirer d’Eriador. Mais cela était temporaire, et il avait désormais la tâche de préparer une nouvelle armée en vue de détruire les forces du Bien. Cette nouvelle guerre est une nouvelle opportunité pour le Magicien Blanc de corriger ses créations. Les fournaises et les forges d’Isengard fonctionnent jour et nuit. Des fosses sortent de nouvelles générations d’uruk-haï, plus puissantes et terribles que les précédentes. La guerre qui sera portée en Eriador sera l’occasion de tester la solidité de ses nouveaux orques, de détruire ce qui reste du Rohan et des autres peuples après tout. La Main Blanche peut bien servir les ambitions du Seigneur Ténébreux pour l’instant. Mais peut-être que le moment venu, il sera temps pour Saroumane de réaliser de plus grandes ambitions car Sauron n’a toujours pas recouvré l’Unique et les espions du Magicien sont toujours au aguets, épiant les moindres gestes en Terre du Milieu. Et si la guerre en Eriador permettait la montée d’un nouveau pouvoir ?",
            mordor_desc: "Depuis son retour en Terre du Milieu lors du Troisième Age, Sauron n’a eu de cesse de consolider son pouvoir au Mordor et de renforcer ses effectifs. Réunissant sous sa bannière des orques, trolls et hommes, il a remporté la Guerre de l’Anneau et placé les factions du Bien dans une position extrêmement délicate en les rejetant vers l’Eriador. Mais tout aussi grande fut sa victoire, le Seigneur Ténébreux n’était pas satisfait, il avait espéré une victoire totale. Sa victoire à Minhiriath lui a permit de remporter la majeure partie de la Terre du Milieu, mais elle a eu un coût. Les elfes furent battus mais se replièrent en bon ordre vers Mithlond, les autres factions du Bien ont pu également se réfugier dans tout l’Eriador, prêt à se battre jusqu’au bout. Son armée fut décimée et il fut obligé de battre en retraite, et malgré le fait que la Guerre de l’Anneau fut remportée, l’Unique échappa encore à Sauron, ne sachant où il se trouve actuellement. Ces contretemps ont permis au Bien de se réorganiser et de reconstituer ses forces. Le Seigneur du Mordor fit de même et construisit un campement dans les Monts Brumeux afin de préparer une invasion générale. Le Seigneur Ténébreux rassemble autour de lui d’autres serviteurs afin de se débarrasser une bonne fois pour toute des Peuples Libres et ainsi plonger la Terre du Milieu dans les Ténèbres.",
            nain: "Nain",
            nain_desc: "Secoué après la perte d’Erebor, ce peuple fier et robuste, descendant de Durin a erré durant des mois afin de se trouver une endroit hors de portée des Ténèbres du Mordor. Le destin a voulu qu’ils se réunissent dans le Palais de Thorin où ce roi légendaire connut également l’exil. Lorsque les émissaires elfes les approchèrent, ils eurent une grande hésitation, se remémorant la trahison des elfes durant la Guerre de l’Anneau. Mais devant la nécessité de repousser les forces du Mal et sachant qu’ils ne pouvaient indéfiniment se barricader dans les montagnes, ils rejoignirent la Grande Alliance rassemblant Elfes, Nains et Hommes. Depuis les Monts Bleus, les Nains construisent mines et forges afin de préparer armes et armures pour la guerre qui s’annonce. ",
            rohan_desc: "Les Seigneurs des Chevaux eurent fort à faire durant la Guerre de l’Anneau et furent les victimes les plus tragiques. Pris en sandwich entre le Mordor et les Eldar, ils perdirent leurs terres et leurs rares places fortes, contraints à l’exil comme leurs ancêtres nomades Eotheod. Ils avaient néanmoins fait suffisamment de dégâts sur leur passage pour que les forces de Sauron soient ralenties et contraintes de se replier malgré leur victoire à Minhiriath. Protégés par les cavaliers, le peuple rohirrim parti à l’ouest, vers l’Eriador, en prenant soin de ne pas trop s’approcher des Elfes auxquels il vouaient un très fort ressentiment. Ils se sont installés au Cardolan près d’une ancienne tour fortifiée qu'ils rebâtirent à leur guise. De là, ils lancèrent des raids contre de petits campements d’orques s'amassant de plus en plus près d’Eriador. Mais ils se rendirent rapidement compte qu’ils ne pouvaient combattre seuls contre la tempête qui s’annonce. C’est pourquoi ils ont finalement rejoint la Grande Alliance des Elfes, des Hommes et des Nains.",
            contact: "Restons en contact !",
            information: "Toutes les informations pour suivre l'évènement",
            info_1: "La Guerre de l'Eriador",
            info_2: "Carte interactive",
            info_3: "Inscription",
            follow: "Suivres les informations",
            tdm: "La Terre du Milieu"
          },
          matchs: {
            tour: "TOUR",
            matchs: "matchs",
            joueurs: "Joueurs",
            resulat: "Résulat",
            aucun: "Aucun Combat pour le moment !",
            participer: "Si vous voulez participer à l'évènement suffit de rejoindre le Discord et de prendre une faction. Pour plus d'informations aller voir les règles.",
          }
        }
      }
    },
  }

}
