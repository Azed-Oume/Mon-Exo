import React from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './compenents/App/App';
import '../src/compenents/App/styles/reset.css';
import '../src/compenents/App/styles/style.css';

const container = document.querySelector('#monexo');

const root = createRoot(container);

root.render(<App />);