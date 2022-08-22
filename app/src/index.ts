import { createRoot } from 'react-dom/client';
import 'Assets/styles/main.scss';
import { renderApp } from './App';

const rootElement: HTMLElement | null = document.getElementById('root');
if (!rootElement) throw new Error('[!] root element could not be found');
const root = createRoot(rootElement);

renderApp(root);
