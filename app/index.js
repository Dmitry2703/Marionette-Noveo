/**
 * @fileOverview Application
 */

import './styles/app.css';
import Bb from 'backbone';
import Mn from 'backbone.marionette';
import Router from './routers/router.js';
import MainView from './views/card.js';
import CardModel from './models/card.js';

const data = [
  {
    id: 1,
    title: 'Card 1',
    description: 'description of card 1',
    likes: 0
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'description of card 2',
    likes: 10
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'description of card 3',
    likes: 2
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'description of card 4',
    likes: 1
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'description of card 5',
    likes: 4
  }
];

const App = Mn.Application.extend({
  region: '#app',
  onStart() {
    const router = new Router();
    Bb.history.start();
    const mainView = new MainView({
      collection: new Bb.Collection(data),
      model: new CardModel()
    });
    this.showView(mainView);
  }
});

const app = new App();
app.start();
