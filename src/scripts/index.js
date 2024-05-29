import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/index';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

console.log('Hello Coders!');
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', async () => {
  app.renderPage();
  await swRegister();

  const preloader = document.querySelector('pre-loading');

  setTimeout(() => {
    preloader.classList.add('loader-hidden');

    preloader.addEventListener('transitionend', () => {
      document.body.removeChild(preloader);
    });
  }, 1000);
});
