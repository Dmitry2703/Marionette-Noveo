/**
 * @fileOverview Model of Card
 */

import Bb from 'backbone';

export default Bb.Model.extend({
  defaults: {
    title: '',
    description: '',
    likes: 0
  }
});
