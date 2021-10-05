import {Store} from './store';

export const Platekompaniet: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container: 'button.flat',
      text: ['Kjøp'],
    },
    maxPrice: {
      container: '#buy-area__price-wrapper > div',
    },
    outOfStock: {
      container:
        '#product-intro > div.container.old-product-page.ng-star-inserted > div > div > div.col-md-7 > div > div.product-control > div.buy-area.ng-star-inserted > div > button',
      text: ['Ikke på lager'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://platekompaniet.no/blu-ray/spiral-blu-ray-58d11fa6/',
    },

    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://cdon.no/spill/playstation-5-digital-edition-53815423',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://cdon.no/spill/playstation-5-release-2021-54876367',
    },
  ],
  name: 'platekompaniet',
};
