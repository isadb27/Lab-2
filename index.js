import './components/header/header.js';
import './components/search/search.js';
import './components/card/card.js';
import './components/news/news.js';
import './components/dial/dial.js';

const app = document.getElementById('app');

const header = document.createElement('my-header');
app.appendChild(header);

const search = document.createElement('my-search');
app.appendChild(search);

const card = document.createElement('my-card');
app.appendChild(card);

const news = document.createElement('my-news');
app.appendChild(news);

const dial = document.createElement('my-dial');
app.appendChild(dial);
