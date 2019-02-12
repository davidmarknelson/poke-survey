const express = require('express');
const app = express();

// Data of pokemon for survey and results pages
app.locals.pokemonData = [
  {
    title: 'Generation 1 Starters',
    formName: 'gen1',
    pokemonA: {
      name: 'Bulbasaur',
      formValue: 'bulbasaur',
      img: 'images/pokemon/bulbasaur.png'
    },
    pokemonB: {
      name: 'Charmander',
      formValue: 'charmander',
      img: 'images/pokemon/charmander.png'
    },
    pokemonC: {
      name: 'Squirtle',
      formValue: 'squirtle',
      img: 'images/pokemon/squirtle.png'
    }
  },
  {
    title: 'Generation 2 Starters',
    formName: 'gen2',
    pokemonA: {
      name: 'Chikorita',
      formValue: 'chikorita',
      img: 'images/pokemon/chikorita.png'
    },
    pokemonB: {
      name: 'Cyndaquil',
      formValue: 'cyndaquil',
      img: 'images/pokemon/cyndaquil.png'
    },
    pokemonC: {
      name: 'Totodile',
      formValue: 'totodile',
      img: 'images/pokemon/totodile.png'
    }
  },
  {
    title: 'Generation 3 Starters',
    formName: 'gen3',
    pokemonA: {
      name: 'Treecko',
      formValue: 'treecko',
      img: 'images/pokemon/treecko.png'
    },
    pokemonB: {
      name: 'Torchic',
      formValue: 'torchic',
      img: 'images/pokemon/torchic.png'
    },
    pokemonC: {
      name: 'Mudkip',
      formValue: 'mudkip',
      img: 'images/pokemon/mudkip.png'
    }
  },
  {
    title: 'Generation 4 Starters',
    formName: 'gen4',
    pokemonA: {
      name: 'Turtwig',
      formValue: 'turtwig',
      img: 'images/pokemon/turtwig.png'
    },
    pokemonB: {
      name: 'Chimchar',
      formValue: 'chimchar',
      img: 'images/pokemon/chimchar.png'
    },
    pokemonC: {
      name: 'Piplup',
      formValue: 'piplup',
      img: 'images/pokemon/piplup.png'
    }
  },
  {
    title: 'Generation 5 Starters',
    formName: 'gen5',
    pokemonA: {
      name: 'Snivy',
      formValue: 'snivy',
      img: 'images/pokemon/snivy.png'
    },
    pokemonB: {
      name: 'Tepig',
      formValue: 'tepig',
      img: 'images/pokemon/tepig.png'
    },
    pokemonC: {
      name: 'Oshawott',
      formValue: 'oshawott',
      img: 'images/pokemon/oshawott.png'
    }
  },
  {
    title: 'Generation 6 Starters',
    formName: 'gen6',
    pokemonA: {
      name: 'Chespin',
      formValue: 'chespin',
      img: 'images/pokemon/chespin.png'
    },
    pokemonB: {
      name: 'Fennekin',
      formValue: 'fennekin',
      img: 'images/pokemon/fennekin.png'
    },
    pokemonC: {
      name: 'Froakie',
      formValue: 'froakie',
      img: 'images/pokemon/froakie.png'
    }
  },
  {
    title: 'Generation 7 Starters',
    formName: 'gen7',
    pokemonA: {
      name: 'Rowlet',
      formValue: 'rowlet',
      img: 'images/pokemon/rowlet.png'
    },
    pokemonB: {
      name: 'Litten',
      formValue: 'litten',
      img: 'images/pokemon/litten.png'
    },
    pokemonC: {
      name: 'Popplio',
      formValue: 'popplio',
      img: 'images/pokemon/popplio.png'
    }
  },
  {
    title: 'Generation 1 Final Evolutions',
    formName: 'gen1e',
    pokemonA: {
      name: 'Venusaur',
      formValue: 'venusaur',
      img: 'images/pokemon/venusaur.png'
    },
    pokemonB: {
      name: 'Charizard',
      formValue: 'charizard',
      img: 'images/pokemon/charizard.png'
    },
    pokemonC: {
      name: 'Blastoise',
      formValue: 'blastoise',
      img: 'images/pokemon/blastoise.png'
    }
  },
  {
    title: 'Generation 2 Final Evolutions',
    formName: 'gen2e',
    pokemonA: {
      name: 'Meganium',
      formValue: 'meganium',
      img: 'images/pokemon/meganium.png'
    },
    pokemonB: {
      name: 'Typhlosion',
      formValue: 'typhlosion',
      img: 'images/pokemon/typhlosion.png'
    },
    pokemonC: {
      name: 'Feraligatr',
      formValue: 'feraligatr',
      img: 'images/pokemon/feraligatr.png'
    }
  },
  {
    title: 'Generation 3 Final Evolutions',
    formName: 'gen3e',
    pokemonA: {
      name: 'Sceptile',
      formValue: 'sceptile',
      img: 'images/pokemon/sceptile.png'
    },
    pokemonB: {
      name: 'Blaziken',
      formValue: 'blaziken',
      img: 'images/pokemon/blaziken.png'
    },
    pokemonC: {
      name: 'Swampert',
      formValue: 'swampert',
      img: 'images/pokemon/swampert.png'
    }
  },
  {
    title: 'Generation 4 Final Evolutions',
    formName: 'gen4e',
    pokemonA: {
      name: 'Torterra',
      formValue: 'torterra',
      img: 'images/pokemon/torterra.png'
    },
    pokemonB: {
      name: 'Infernape',
      formValue: 'infernape',
      img: 'images/pokemon/infernape.png'
    },
    pokemonC: {
      name: 'Empoleon',
      formValue: 'empoleon',
      img: 'images/pokemon/empoleon.png'
    }
  },
  {
    title: 'Generation 5 Final Evolutions',
    formName: 'gen5e',
    pokemonA: {
      name: 'Serperior',
      formValue: 'serperior',
      img: 'images/pokemon/serperior.png'
    },
    pokemonB: {
      name: 'Emboar',
      formValue: 'emboar',
      img: 'images/pokemon/emboar.png'
    },
    pokemonC: {
      name: 'Samurott',
      formValue: 'samurott',
      img: 'images/pokemon/samurott.png'
    }
  },
  {
    title: 'Generation 6 Final Evolutions',
    formName: 'gen6e',
    pokemonA: {
      name: 'Chesnaught',
      formValue: 'chesnaught',
      img: 'images/pokemon/chesnaught.png'
    },
    pokemonB: {
      name: 'Delphox',
      formValue: 'delphox',
      img: 'images/pokemon/delphox.png'
    },
    pokemonC: {
      name: 'Greninja',
      formValue: 'greninja',
      img: 'images/pokemon/greninja.png'
    }
  },
  {
    title: 'Generation 7 Final Evolutions',
    formName: 'gen7e',
    pokemonA: {
      name: 'Decidueye',
      formValue: 'decidueye',
      img: 'images/pokemon/decidueye.png'
    },
    pokemonB: {
      name: 'Incineroar',
      formValue: 'incineroar',
      img: 'images/pokemon/incineroar.png'
    },
    pokemonC: {
      name: 'Primarina',
      formValue: 'primarina',
      img: 'images/pokemon/primarina.png'
    }
  },
  {
    title: 'Legendary Birds',
    formName: 'legendaryBirds',
    pokemonA: {
      name: 'Articuno',
      formValue: 'articuno',
      img: 'images/pokemon/articuno.png'
    },
    pokemonB: {
      name: 'Zapdos',
      formValue: 'zapdos',
      img: 'images/pokemon/zapdos.png'
    },
    pokemonC: {
      name: 'Moltres',
      formValue: 'moltres',
      img: 'images/pokemon/moltres.png'
    }
  },
  {
    title: 'Legendary Beasts',
    formName: 'legendaryBeasts',
    pokemonA: {
      name: 'Raikou',
      formValue: 'raikou',
      img: 'images/pokemon/raikou.png'
    },
    pokemonB: {
      name: 'Entei',
      formValue: 'entei',
      img: 'images/pokemon/entei.png'
    },
    pokemonC: {
      name: 'Suicune',
      formValue: 'suicune',
      img: 'images/pokemon/suicune.png'
    }
  },
  {
    title: 'Legendary Titans',
    formName: 'legendaryTitans',
    pokemonA: {
      name: 'Regirock',
      formValue: 'regirock',
      img: 'images/pokemon/regirock.png'
    },
    pokemonB: {
      name: 'Regice',
      formValue: 'regice',
      img: 'images/pokemon/regice.png'
    },
    pokemonC: {
      name: 'Registeel',
      formValue: 'registeel',
      img: 'images/pokemon/registeel.png'
    }
  },
  {
    title: 'Weather Trio',
    formName: 'weatherTrio',
    pokemonA: {
      name: 'Kyogre',
      formValue: 'kyogre',
      img: 'images/pokemon/kyogre.png'
    },
    pokemonB: {
      name: 'Groudon',
      formValue: 'groudon',
      img: 'images/pokemon/groudon.png'
    },
    pokemonC: {
      name: 'Rayquaza',
      formValue: 'rayquaza',
      img: 'images/pokemon/rayquaza.png'
    }
  },
  {
    title: 'Creation Trio',
    formName: 'creationTrio',
    pokemonA: {
      name: 'Dialga',
      formValue: 'dialga',
      img: 'images/pokemon/dialga.png'
    },
    pokemonB: {
      name: 'Palkia',
      formValue: 'palkia',
      img: 'images/pokemon/palkia.png'
    },
    pokemonC: {
      name: 'Giratina',
      formValue: 'giratina',
      img: 'images/pokemon/giratina.png'
    }
  },
  {
    title: 'Tao Trio',
    formName: 'taoTrio',
    pokemonA: {
      name: 'Reshiram',
      formValue: 'reshiram',
      img: 'images/pokemon/reshiram.png'
    },
    pokemonB: {
      name: 'Kyurem',
      formValue: 'kyurem',
      img: 'images/pokemon/kyurem.png'
    },
    pokemonC: {
      name: 'Zekrom',
      formValue: 'zekrom',
      img: 'images/pokemon/zekrom.png'
    }
  },
  {
    title: 'Aura Trio',
    formName: 'auraTrio',
    pokemonA: {
      name: 'Xerneas',
      formValue: 'xerneas',
      img: 'images/pokemon/xerneas.png'
    },
    pokemonB: {
      name: 'Yveltal',
      formValue: 'yveltal',
      img: 'images/pokemon/yveltal.png'
    },
    pokemonC: {
      name: 'Zygarde',
      formValue: 'zygarde',
      img: 'images/pokemon/zygarde.png'
    }
  },
  {
    title: 'Light Trio',
    formName: 'lightTrio',
    pokemonA: {
      name: 'Solgaleo',
      formValue: 'solgaleo',
      img: 'images/pokemon/solgaleo.png'
    },
    pokemonB: {
      name: 'Lunala',
      formValue: 'lunala',
      img: 'images/pokemon/lunala.png'
    },
    pokemonC: {
      name: 'Necrozma',
      formValue: 'necrozma',
      img: 'images/pokemon/necrozma.png'
    }
  }
];

module.exports = app.locals.pokemonData;