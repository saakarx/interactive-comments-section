import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './App';
import './main.css';

import { store } from './store/store';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
