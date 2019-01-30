const express = require('express');
const app = express();

app.locals.pokemonData = [
  {
    title: 'Generation 1 Starters',
    formName: 'gen1',
    pokemonA: {
      name: 'Bulbasaur',
      formValue: 'bulbasaur',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/600px-001Bulbasaur.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/240px-001Bulbasaur.png'
    },
    pokemonB: {
      name: 'Charmander',
      formValue: 'charmander',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/600px-004Charmander.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/240px-004Charmander.png'
    },
    pokemonC: {
      name: 'Squirtle',
      formValue: 'squirtle',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/600px-007Squirtle.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/240px-007Squirtle.png'
    }
  },
  {
    title: 'Generation 2 Starters',
    formName: 'gen2',
    pokemonA: {
      name: 'Chikorita',
      formValue: 'chikorita',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/b/bf/152Chikorita.png/600px-152Chikorita.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/b/bf/152Chikorita.png/240px-152Chikorita.png'
    },
    pokemonB: {
      name: 'Cyndaquil',
      formValue: 'cyndaquil',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/9/9b/155Cyndaquil.png/600px-155Cyndaquil.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/9/9b/155Cyndaquil.png/240px-155Cyndaquil.png'
    },
    pokemonC: {
      name: 'Totodile',
      formValue: 'totodile',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/d/df/158Totodile.png/600px-158Totodile.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/d/df/158Totodile.png/240px-158Totodile.png'
    }
  },
  {
    title: 'Generation 3 Starters',
    formName: 'gen3',
    pokemonA: {
      name: 'Treecko',
      formValue: 'treecko',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/2/2c/252Treecko.png/600px-252Treecko.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/2/2c/252Treecko.png/240px-252Treecko.png'
    },
    pokemonB: {
      name: 'Torchic',
      formValue: 'torchic',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/9/91/255Torchic.png/600px-255Torchic.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/9/91/255Torchic.png/240px-255Torchic.png'
    },
    pokemonC: {
      name: 'Mudkip',
      formValue: 'mudkip',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/6/60/258Mudkip.png/600px-258Mudkip.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/6/60/258Mudkip.png/240px-258Mudkip.png'
    }
  },
  {
    title: 'Generation 4 Starters',
    formName: 'gen4',
    pokemonA: {
      name: 'Turtwig',
      formValue: 'turtwig',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/5/5c/387Turtwig.png/600px-387Turtwig.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/5/5c/387Turtwig.png/240px-387Turtwig.png'
    },
    pokemonB: {
      name: 'Chimchar',
      formValue: 'chimchar',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/7/76/390Chimchar.png/600px-390Chimchar.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/7/76/390Chimchar.png/240px-390Chimchar.png'
    },
    pokemonC: {
      name: 'Piplup',
      formValue: 'piplup',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/b/b1/393Piplup.png/600px-393Piplup.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/b/b1/393Piplup.png/240px-393Piplup.png'
    }
  },
  {
    title: 'Generation 5 Starters',
    formName: 'gen5',
    pokemonA: {
      name: 'Snivy',
      formValue: 'snivy',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/7/75/495Snivy.png/600px-495Snivy.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/7/75/495Snivy.png/240px-495Snivy.png'
    },
    pokemonB: {
      name: 'Tepig',
      formValue: 'tepig',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/5/5b/498Tepig.png/600px-498Tepig.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/5/5b/498Tepig.png/240px-498Tepig.png'
    },
    pokemonC: {
      name: 'Oshawott',
      formValue: 'oshawott',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/3/3b/501Oshawott.png/600px-501Oshawott.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/3/3b/501Oshawott.png/240px-501Oshawott.png'
    }
  },
  {
    title: 'Generation 6 Starters',
    formName: 'gen6',
    pokemonA: {
      name: 'Chespin',
      formValue: 'chespin',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/c/ca/650Chespin.png/600px-650Chespin.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/c/ca/650Chespin.png/240px-650Chespin.png'
    },
    pokemonB: {
      name: 'Fennekin',
      formValue: 'fennekin',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/3/3d/653Fennekin.png/600px-653Fennekin.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/3/3d/653Fennekin.png/240px-653Fennekin.png'
    },
    pokemonC: {
      name: 'Froakie',
      formValue: 'froakie',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/1/18/656Froakie.png/600px-656Froakie.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/1/18/656Froakie.png/240px-656Froakie.png'
    }
  },
  {
    title: 'Generation 7 Starters',
    formName: 'gen7',
    pokemonA: {
      name: 'Rowlet',
      formValue: 'rowlet',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/7/74/722Rowlet.png/600px-722Rowlet.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/7/74/722Rowlet.png/240px-722Rowlet.png'
    },
    pokemonB: {
      name: 'Litten',
      formValue: 'litten',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/0/0e/725Litten.png/600px-725Litten.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/0/0e/725Litten.png/240px-725Litten.png'
    },
    pokemonC: {
      name: 'Popplio',
      formValue: 'popplio',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/d/d8/728Popplio.png/600px-728Popplio.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/d/d8/728Popplio.png/240px-728Popplio.png'
    }
  },
  {
    title: 'Generation 1 Final Evolutions',
    formName: 'gen1e',
    pokemonA: {
      name: 'Venusaur',
      formValue: 'venusaur',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/600px-003Venusaur.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/a/ae/003Venusaur.png/240px-003Venusaur.png'
    },
    pokemonB: {
      name: 'Charizard',
      formValue: 'charizard',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/600px-006Charizard.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/240px-006Charizard.png'
    },
    pokemonC: {
      name: 'Blastoise',
      formValue: 'blastoise',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/600px-009Blastoise.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/0/02/009Blastoise.png/240px-009Blastoise.png'
    }
  },
  {
    title: 'Generation 2 Final Evolutions',
    formName: 'gen2e',
    pokemonA: {
      name: 'Meganium',
      formValue: 'meganium',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/d/d1/154Meganium.png/600px-154Meganium.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/d/d1/154Meganium.png/240px-154Meganium.png'
    },
    pokemonB: {
      name: 'Typhlosion',
      formValue: 'typhlosion',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/4/47/157Typhlosion.png/600px-157Typhlosion.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/4/47/157Typhlosion.png/240px-157Typhlosion.png'
    },
    pokemonC: {
      name: 'Feraligatr',
      formValue: 'feraligatr',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/d/d5/160Feraligatr.png/600px-160Feraligatr.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/d/d5/160Feraligatr.png/240px-160Feraligatr.png'
    }
  },
  {
    title: 'Generation 3 Final Evolutions',
    formName: 'gen3e',
    pokemonA: {
      name: 'Sceptile',
      formValue: 'sceptile',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/3/3e/254Sceptile.png/600px-254Sceptile.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/3/3e/254Sceptile.png/240px-254Sceptile.png'
    },
    pokemonB: {
      name: 'Blaziken',
      formValue: 'blaziken',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/9/90/257Blaziken.png/600px-257Blaziken.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/9/90/257Blaziken.png/240px-257Blaziken.png'
    },
    pokemonC: {
      name: 'Swampert',
      formValue: 'swampert',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/b/b6/260Swampert.png/600px-260Swampert.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/b/b6/260Swampert.png/240px-260Swampert.png'
    }
  },
  {
    title: 'Generation 4 Final Evolutions',
    formName: 'gen4e',
    pokemonA: {
      name: 'Torterra',
      formValue: 'torterra',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/d/df/389Torterra.png/600px-389Torterra.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/d/df/389Torterra.png/240px-389Torterra.png'
    },
    pokemonB: {
      name: 'Infernape',
      formValue: 'infernape',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/f/fb/392Infernape.png/600px-392Infernape.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/f/fb/392Infernape.png/240px-392Infernape.png'
    },
    pokemonC: {
      name: 'Empoleon',
      formValue: 'empoleon',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/7/7f/395Empoleon.png/600px-395Empoleon.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/7/7f/395Empoleon.png/240px-395Empoleon.png'
    }
  },
  {
    title: 'Generation 5 Final Evolutions',
    formName: 'gen5e',
    pokemonA: {
      name: 'Serperior',
      formValue: 'serperior',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/b/b7/497Serperior.png/600px-497Serperior.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/b/b7/497Serperior.png/240px-497Serperior.png'
    },
    pokemonB: {
      name: 'Emboar',
      formValue: 'emboar',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/1/18/500Emboar.png/600px-500Emboar.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/1/18/500Emboar.png/240px-500Emboar.png'
    },
    pokemonC: {
      name: 'Samurott',
      formValue: 'samurott',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/b/b5/503Samurott.png/600px-503Samurott.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/b/b5/503Samurott.png/240px-503Samurott.png'
    }
  },
  {
    title: 'Generation 6 Final Evolutions',
    formName: 'gen6e',
    pokemonA: {
      name: 'Chesnaught',
      formValue: 'chesnaught',
      imgBig: 'https://cdn.bulbagarden.net/upload/1/18/652Chesnaught.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/1/18/652Chesnaught.png'
    },
    pokemonB: {
      name: 'Delphox',
      formValue: 'delphox',
      imgBig: 'https://cdn.bulbagarden.net/upload/2/21/655Delphox.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/archive/2/21/20131029114742%21655Delphox.png'
    },
    pokemonC: {
      name: 'Greninja',
      formValue: 'greninja',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/6/67/658Greninja.png/600px-658Greninja.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/6/67/658Greninja.png/240px-658Greninja.png'
    }
  },
  {
    title: 'Generation 7 Final Evolutions',
    formName: 'gen7e',
    pokemonA: {
      name: 'Decidueye',
      formValue: 'decidueye',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/a/a4/724Decidueye.png/600px-724Decidueye.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/a/a4/724Decidueye.png/240px-724Decidueye.png'
    },
    pokemonB: {
      name: 'Incineroar',
      formValue: 'incineroar',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/2/27/727Incineroar.png/600px-727Incineroar.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/2/27/727Incineroar.png/240px-727Incineroar.png'
    },
    pokemonC: {
      name: 'Primarina',
      formValue: 'primarina',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/8/89/730Primarina.png/600px-730Primarina.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/8/89/730Primarina.png/240px-730Primarina.png'
    }
  },
  {
    title: 'Legendary Birds',
    formName: 'legendaryBirds',
    pokemonA: {
      name: 'Articuno',
      formValue: 'articuno',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/4/4e/144Articuno.png/600px-144Articuno.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/4/4e/144Articuno.png/240px-144Articuno.png'
    },
    pokemonB: {
      name: 'Zapdos',
      formValue: 'zapdos',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/e/e3/145Zapdos.png/600px-145Zapdos.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/e/e3/145Zapdos.png/240px-145Zapdos.png'
    },
    pokemonC: {
      name: 'Moltres',
      formValue: 'moltres',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/1/1b/146Moltres.png/600px-146Moltres.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/1/1b/146Moltres.png/240px-146Moltres.png'
    }
  },
  {
    title: 'Legendary Beasts',
    formName: 'legendaryBeasts',
    pokemonA: {
      name: 'Raikou',
      formValue: 'raikou',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/c/c1/243Raikou.png/600px-243Raikou.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/c/c1/243Raikou.png/240px-243Raikou.png'
    },
    pokemonB: {
      name: 'Entei',
      formValue: 'entei',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/f/f9/244Entei.png/600px-244Entei.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/f/f9/244Entei.png/240px-244Entei.png'
    },
    pokemonC: {
      name: 'Suicune',
      formValue: 'suicune',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/d/da/245Suicune.png/600px-245Suicune.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/d/da/245Suicune.png/240px-245Suicune.png'
    }
  },
  {
    title: 'Legendary Titans',
    formName: 'legendaryTitans',
    pokemonA: {
      name: 'Regirock',
      formValue: 'regirock',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/a/aa/377Regirock.png/600px-377Regirock.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/a/aa/377Regirock.png/240px-377Regirock.png'
    },
    pokemonB: {
      name: 'Regice',
      formValue: 'regice',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/f/fe/378Regice.png/600px-378Regice.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/f/fe/378Regice.png/240px-378Regice.png'
    },
    pokemonC: {
      name: 'Registeel',
      formValue: 'registeel',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/2/22/379Registeel.png/600px-379Registeel.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/2/22/379Registeel.png/240px-379Registeel.png'
    }
  },
  {
    title: 'Weather Trio',
    formName: 'weatherTrio',
    pokemonA: {
      name: 'Kyogre',
      formValue: 'kyogre',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/4/41/382Kyogre.png/600px-382Kyogre.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/4/41/382Kyogre.png/240px-382Kyogre.png'
    },
    pokemonB: {
      name: 'Groudon',
      formValue: 'groudon',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/600px-383Groudon.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/7/70/383Groudon.png/240px-383Groudon.png'
    },
    pokemonC: {
      name: 'Rayquaza',
      formValue: 'rayquaza',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/600px-384Rayquaza.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/240px-384Rayquaza.png'
    }
  },
  {
    title: 'Creation Trio',
    formName: 'creationTrio',
    pokemonA: {
      name: 'Dialga',
      formValue: 'dialga',
      imgBig: 'https://cdn.bulbagarden.net/upload/8/8a/483Dialga.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/8/8a/483Dialga.png'
    },
    pokemonB: {
      name: 'Palkia',
      formValue: 'palkia',
      imgBig: 'https://cdn.bulbagarden.net/upload/6/66/484Palkia.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/6/66/484Palkia.png'
    },
    pokemonC: {
      name: 'Giratina',
      formValue: 'giratina',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/2/2b/487Giratina-Origin.png/600px-487Giratina-Origin.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/2/2b/487Giratina-Origin.png/240px-487Giratina-Origin.png'
    }
  },
  {
    title: 'Tao Trio',
    formName: 'taoTrio',
    pokemonA: {
      name: 'Reshiram',
      formValue: 'reshiram',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/8/8d/643Reshiram.png/600px-643Reshiram.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/8/8d/643Reshiram.png/240px-643Reshiram.png'
    },
    pokemonB: {
      name: 'Kyurem',
      formValue: 'kyurem',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/c/c3/646Kyurem.png/600px-646Kyurem.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/c/c3/646Kyurem.png/240px-646Kyurem.png'
    },
    pokemonC: {
      name: 'Zekrom',
      formValue: 'zekrom',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/8/81/644Zekrom.png/600px-644Zekrom.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/8/81/644Zekrom.png/240px-644Zekrom.png'
    }
  },
  {
    title: 'Aura Trio',
    formName: 'auraTrio',
    pokemonA: {
      name: 'Xerneas',
      formValue: 'xerneas',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/1/13/716Xerneas.png/600px-716Xerneas.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/1/13/716Xerneas.png/240px-716Xerneas.png'
    },
    pokemonB: {
      name: 'Yveltal',
      formValue: 'yveltal',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/5/54/717Yveltal.png/600px-717Yveltal.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/5/54/717Yveltal.png/240px-717Yveltal.png'
    },
    pokemonC: {
      name: 'Zygarde',
      formValue: 'zygarde',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/3/3a/718Zygarde.png/600px-718Zygarde.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/3/3a/718Zygarde.png/240px-718Zygarde.png'
    }
  },
  {
    title: 'Light Trio',
    formName: 'lightTrio',
    pokemonA: {
      name: 'Solgaleo',
      formValue: 'solgaleo',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/5/57/791Solgaleo.png/600px-791Solgaleo.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/5/57/791Solgaleo.png/240px-791Solgaleo.png'
    },
    pokemonB: {
      name: 'Lunala',
      formValue: 'lunala',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/9/9d/792Lunala.png/600px-792Lunala.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/9/9d/792Lunala.png/240px-792Lunala.png'
    },
    pokemonC: {
      name: 'Necrozma',
      formValue: 'necrozma',
      imgBig: 'https://cdn.bulbagarden.net/upload/thumb/4/44/800Necrozma.png/600px-800Necrozma.png',
      imgSmall: 'https://cdn.bulbagarden.net/upload/thumb/4/44/800Necrozma.png/240px-800Necrozma.png'
    }
  }
];

module.exports = app.locals.pokemonData;