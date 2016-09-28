/**
 * @fileOverview Router
 */

import Mn from 'backbone.marionette';
import Bb from 'backbone';
import CardDetailsView from '../views/cardDetails.js';
import CardModel from '../models/card.js';

export default Mn.AppRouter.extend({
  routes: {
    'card': 'cardDetails'
  },

  cardDetails() {
    console.log('test');
    const cardDetailsView = new CardDetailsView({
      model: new CardModel()
    });
    cardDetailsView.render();
  }
});
