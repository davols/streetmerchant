import {Store} from './store';

export const MaxgamingNo: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container: '.Knapp_Kop > a:nth-child(1)',
      text: ['Legg i handlekurven'],
    },
    maxPrice: {
      container: '#PrisFalt > span',
    },
    outOfStock: {
      container: '#Knapp_Bevaka_Produkt',
      text: ['Overvåk dette produktet'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.maxgaming.no/no/smartband/go-tcha-armband-til-pokemon-go-bla',
    },

    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.maxgaming.no/no/playstation-5/playstation-5-digital-edition',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.maxgaming.no/no/playstation-5/playstation-5',
    },
  ],
  name: 'maxgaming-no',
};
