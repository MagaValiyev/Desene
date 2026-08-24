/**
 * Tarayıcı giriş noktası. Native giriş noktası index.js olarak kalır.
 */

import {createRoot} from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(<App />);
}
