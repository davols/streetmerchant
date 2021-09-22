import {Store} from './store';

export const KjellNo: Store = {
  currency: 'kr.',
  labels: {
    inStock: {
      container: '#addToCart > span > div',
      text: ['Legg i handlekurv'],
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
      url:
        'https://www.kjell.com/no/produkter/kontor/batterier/alkaliske-batterier/kjell-company-aa-batterier-lr6-20-pk.-p32301',
    },

    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url:
        'https://www.kjell.com/no/produkter/videospill-og-gaming/playstation-5/sony-playstation-5-digital-edition-spillkonsol-p62771',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url:
        'https://www.kjell.com/no/produkter/videospill-og-gaming/playstation-5/sony-playstation-5-spillkonsol-p62770',
    },
  ],
  name: 'kjell-no',
};
