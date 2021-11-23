import { createElement } from 'react';
import { render } from 'react-dom';
import { Header } from '../components/header-comp';

const mountItem = document.querySelector('#app_main');

render(createElement(Header, { text: 'Map application' }), mountItem);
