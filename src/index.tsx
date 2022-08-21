import 'react-app-polyfill/ie11';
import 'core-js/fn/array/fill';
import 'core-js/fn/array/find';
import 'core-js/fn/array/includes';
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Root';

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
