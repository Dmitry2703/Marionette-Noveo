/**
 * @fileOverview Card Details
 */

import Mn from 'backbone.marionette';
import cardDetails from '../templates/cardDetails.jst';

export default Mn.View.extend({
  el: '#app',
  template: cardDetails
});
