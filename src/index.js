import React from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './compenents/App/App';

const container = document.querySelector('#monexo');

const root = createRoot(container);

root.render(<App />);