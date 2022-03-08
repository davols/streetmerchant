import {Store} from './store';

export const Skvis: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container: '#product-form > div.form-row.row-btn-add > button > span',
      text: ['Add to cart'],
    },
    maxPrice: {
      container: '#product-form > div:nth-child(2) > div > div.field > div > div:nth-child(1) > span > span.lbl-price',
      
    },
    outOfStock: {
      container:
        '#product-form > div.form-row.row-btn-add > a',
      text: ['Notify me'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://skvis.no/en-us/elektronikk/lyd-bilde/lydanlegg/radio/soundmaster-dab-15-arbeidsradio-164115',
    },

    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://skvis.no/en-us/gaming/playstation-5/ps5-konsoll/playstation-5-digital-edition-167578',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://skvis.no/en-us/gaming/playstation-5/ps5-konsoll/playstation-5-konsoll-med-disc-avspiller-173729',
    },
  ],
  name: 'skvis',
};
