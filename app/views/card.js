/**
 * @fileOverview Card View
 */

import Mn from 'backbone.marionette';
import cardItem from '../templates/card.jst';
import mainView from '../templates/mainView.jst';

const CardItem = Mn.View.extend({
  tagName: 'article',
  className: 'card-item',
  template: cardItem,

  events: {
    'click .js-delete': 'deleteClicked',
    'click .js-like': 'increaseClicked'
  },

  increment: true,

  modelEvents: {
    change: 'render'
  },

  deleteClicked() {
    this.model.collection.remove(this.model);
  },

  increaseClicked() {
    let likes = this.model.get('likes');
    if (this.increment) {
      likes++;
    } else {
      likes--;
    }
    this.increment = !this.increment;
    this.model.set('likes', likes);
  },

  destroy() {
    let self = this;
    this.$el.fadeOut(() => {
      Mn.View.prototype.destroy.call(self);
    });
  }
});

const CardsView = Mn.CollectionView.extend({
  tagName: 'section',
  className: 'cards-container',
  childView: CardItem
});

export default Mn.View.extend({
  template: mainView,
  regions: {
    body: {
      el: 'section',
      replaceElement: true
    }
  },

  onRender() {
    this.showChildView('body', new CardsView({
      collection: this.collection
    }));
  }
});
