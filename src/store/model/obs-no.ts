import {Store} from './store';

export const ObsNo: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container: 'button.v:nth-child(1) > span:nth-child(1)',
      text: ['Kjøp på nett'],
    },
    maxPrice: {
      container: '#buy-area__price-wrapper > div',
    },
    outOfStock: {
      container:
        '#content-container > main > div.z.a0.a1.a2 > div:nth-child(2) > div > div:nth-child(4) > section > div.b.kg.kb > button',
      text: ['Overvåk'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.obs.no/elektronikk-og-underholdning/underholdning/konsolltilbehor/2088151',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.obs.no/elektronikk-og-underholdning/underholdning/konsoll/2085071',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.obs.no/elektronikk-og-underholdning/underholdning/konsoll/2085063',
    },
  ],
  name: 'obs-no',
};
