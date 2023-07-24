import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

import App from './App';
import LoginScreen from './LoginScreen';
import SimpleForm from './SimpleForm';
import Clock from './Clock';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<Clock />);
